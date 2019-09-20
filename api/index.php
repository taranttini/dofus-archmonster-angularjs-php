<?php

require_once 'conf.php';

include_once 'email.php';

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();


//criando uma nova instancia do Slim
$app = new \Slim\Slim(array(
    "MODE" => "development",
    // "MODE" => "production",
    "TEMPLATES.PATH" => "./templates",

    ));

//setando o encoding
$app->contentType('text/html; charset=utf-8');
//o padrao de retorno
$app->response()->header("Content-Type", "application/json");
//rota padrão para página não encontrada
$app->notFound(function () use ($app) {
    $app->response()->header('Content-Type', 'application/json');
    echo json_encode(array(
        'status' => false,
        'message' => 'The resource doesn\'t exist. Check the API docs'
        ));
});

//include_once ( 'data.php' );


$app->get("/", function() {
    echo "<h1>Hello Slim World</h1>";
});

function json_is_invalid($json) {

    json_decode($json, true);

    return json_last_error() != JSON_ERROR_NONE;
}

function data_is_invalid($data) {

    if ( json_is_invalid( $data ) ) {
        return true;
    }

    $erro = false;
    $received = json_decode($data, true);

    foreach($received as $data) { if ( false == is_int($data) ) { $erro = true; } }

    return $erro;
}

function get_jsonData($data) {
    return empty($data["json_data"]) ? '{}' : $data["json_data"];
}



$app->post("/config", function() use ($app, $db) {

    //$L_O_O_P = ''; for($i =0 ; $i < 1000000; $i++) { $L_O_O_P.= "$i,"; }

    $post = $app->request->getBody();

    if (json_is_invalid($post)) {
        echo json_encode(array(
            "status"=>false,
            "message"=>"Json invalid, call the suport."
            ));
        return;
    }

    try {

        $user = auth_user_from_token($app, $db);
        if ( false === $user )
        {
            echo json_encode(array('status'=>false, 'message'=>'Need authenticated user.'));
            $app->response()->status(401);
            return;
        }

        $return = $db->dofus_user()->insert_update(
            array('id'=>$user['id']),
            array('config_data'=> $post )
            );
        if ( false == (bool)$return )
        {
            $data = array(
                "status"=>false,
                "message"=>"Config not updated."
                );
        } else {
            $message = 1 == $return ? "inserted" : "updated";
            $data = array(
                "status"=>true,
                "message"=>"Config $message successfully."
                );
        }
    } catch (Exception $e) {
        //log erro
        echo $e;
        $data = array(
                "status"=>false,
                "message"=>"Config Erro Post, contact the support."
                );
    }

    echo json_encode($data);
});


$app->get("/archmonster", function() use ($app, $db) {

    //$L_O_O_P = ''; for($i =0 ; $i < 1000000; $i++) { $L_O_O_P.= "$i,"; }

    try {
        /*$id = 1;
        $user = $db->dofus_user[array("id"=>$id)];*/
        $user = auth_user_from_token($app, $db);
        if ( false === $user )
        {
            echo json_encode(array('status'=>false, 'message'=>'Requer usuario authenticado.'));

            $app->response()->status(401);
            return;
        }

        $archmonster = $db->dofus_user_archmonster[array("dofus_user_id"=>$user["id"])];

        $data = array(
            "status"=>true,
            "data"=> get_jsonData($archmonster),
            "config_data"=> $user["config_data"],
            "uid"=> $user["id"],
            "last"=> $user["auth_token"],
            );
    } catch (Exception $e) {
        //log error
        $data = array(
            "status"=>false,
            "message"=>"Error Archmonsters List, call the support."
            );
    }
    echo json_encode($data);
});

$app->get("/archmonster/:user_id", function($user_id) use ($app, $db) {

    try {
        $user = $db->dofus_user[array("id"=>$user_id)];
        $archmonster = $db->dofus_user_archmonster[array('dofus_user_id'=>$user["id"])];

        $data = array(
            "status"=>true,
            "message"=>"Return achmonsters of user $user_id.",
            "data"=> get_jsonData($archmonster),
            "config_data"=> $user["config_data"],
            "uid"=> $user["id"],
            "last"=> $user["auth_token"],
            );
    } catch (Exception $e) {
        //log error
        print_r($e);
        $data = array(
            "status"=>false,
            "message"=>"Error Archmonsters GET, call the support."
            );
    }
    //no login or no user valid
    //$app->response()->status(401);
    echo json_encode($data);
});

$app->post("/archmonster", function() use ($app, $db) {

    $post = $app->request->getBody();

    if (json_is_invalid($post) || data_is_invalid($post) ) {
        echo json_encode(array(
            "status"=>false,
            "message"=>"Json invalid, call the suport."
            ));
        return;
    }

    try {

        $user = auth_user_from_token($app, $db);
        if ( false === $user )
        {
            echo json_encode(array('status'=>false, 'message'=>'Need authenticated user.'));
            $app->response()->status(401);
            return;
        }

        //$id = 1;
        //$user = $db->dofus_user[array('id'=> $id)];
        $return = $db->dofus_user_archmonster()->insert_update(
            array('dofus_user_id'=>$user['id']),
            array('json_data'=> $post )
            );
        if ( false == (bool)$return )
        {
            $data = array(
                "status"=>false,
                "message"=>"Archmonster list not updated."
                );
        } else {
            $message = 1 == $return ? "inserted" : "updated";
            $data = array(
                "status"=>true,
                "message"=>"Archmonster list $message successfully."
                );
        }
    } catch (Exception $e) {
        //log erro
        echo $e;
        $data = array(
                "status"=>false,
                "message"=>"Archmonster Erro Post, contact the support."
                );
    }

    echo json_encode($data);
});

$app->get('/quest', function() use ($app, $db) {

    $data = array();

    $quests = $db->quest()->order('step');
    foreach ($quests as $quest) {

    $data[] = array(
        'id'=>$quest['id'],
        'step'=>$quest['step'],
        'monster_id' => $quest['monster_id'],
            'en' => utf8_encode( $quest['en'] ),
            'pt' => utf8_encode( $quest['pt'] ),
            'fr' => utf8_encode( $quest['fr'] ),
            'area_en' => utf8_encode( $quest['area_en'] ),
            'area_pt' => utf8_encode( $quest['area_pt'] ),
            'area_fr' => utf8_encode( $quest['area_fr'] ),
        );
    }

    echo json_encode($data);
});


$app->post('/createAccount', function() use ($app, $db) {

   // $app->response()->header("Content-Type", "application/json");

    $body = $app->request->getBody();
    $form = json_decode($body);

    //TEST LOGIN
    if ($form->email == '' && $form->password == '') {
        echo json_encode(array('status'=>false, 'message'=>'Informe o email e senha.'));
        return;
    }
    //gera token de conectado
    $token = md5(uniqid($form->email, true ));

    if ( json_is_invalid($form->config) ) {
        echo json_encode(array('status'=>false, 'message'=>'Json invalid, call the suport.'));
        return;
    }

    try {

        $PW = substr(md5($form->password), 0, 30);
        $user = $db->dofus_user()->insert(
            array(
                'email'=>$form->email,
                'password'=>$PW,
                'config_data'=>$form->config,
                'auth_token'=>$token,
            ));

        if ( $user === false ) {
            echo json_encode(array('status'=>false, 'message'=>'Nao foi possivel criar usuario.'));
            return;
        }



        $msg = '<h1>DOFUS ARCHMONSTER -> Nova Conta</h1>';
        $msg.= '<br />';
        $msg.= '<p>Sua conta criada foi criada com sucesso.</p>';
        $msg.= '<br />';
        $msg.= '<p><b>Email: </b>'.$form->email.'</p>';
        $msg.= '<p><b>Senha: </b>'.$form->password.'</p>';
        $msg.= '<br />';
        $msg.= '<p><br />Equipe DOFUS ARCHMONSTER</p>';
        $msg.= '--------------------------------------------------<br />';
        $msg.= '--------------------------------------------------<br />';
        $msg.= '--------------------------------------------------<br />';
        $msg.= '<h1>DOFUS ARCHMONSTER -> New Account</h1>';
        $msg.= '<br />';
        $msg.= '<p>Your account was created with success.</p>';
        $msg.= '<br />';
        $msg.= '<p><b>Email: </b>'.$form->email.'</p>';
        $msg.= '<p><b>Pass: </b>'.$form->password.'</p>';
        $msg.= '<br />';
        $msg.= '<p><br />Team DOFUS ARCHMONSTER</p>';

        sendMail($form->email, 'DOFUS ARCHMONSTER - New', $msg, $msg);

        echo json_encode(array('status'=>true, 'auth_token' => $token));

    } catch (exception $e) {
        echo json_encode(array('status'=>false, 'message'=>'occurred_an_error'));

    }

});


$app->get('/getEmailByToken/:token', function($token) use ($app, $db) {

    try {
        $user = $db->dofus_user()->where('recover_token=?', $token);

        $_user = $user->fetch();

        if ( false === $_user ) {
            echo json_encode(
                array('status'=>false, 'message'=>'token_invalid')
            );
        } else {
            echo json_encode(
                array('status'=>true, 'email'=>$_user['email'])
            );
        }

    } catch (Exception $e) {
        echo $e->getMessage();
        //log error
        echo json_encode(
            array( "status"=>false, "message"=>"occurred_an_error" )
        );
    }
});

$app->post('/recoverPassword', function() use ($app, $db) {
    try {
        $body = $app->request->getBody();
        $form = json_decode($body);

        $user = $db->dofus_user()->where('email=?', $form->email);

        if ( false !== $user->fetch() ) {

            $token = md5( uniqid( $form->email, true ) );

            $user->update(array('recover_token'=>$token));
            //echo $token;

            //enviar_email( $form->email, $token );

            $_url = 'http://dofus.eucurto.net/#/new-password/'.$token;

            $msg = '<h1>DOFUS ARCHMONSTER -> Recuperar Senha</h1>';
            $msg.= '<br />';
            $msg.= '<p>Foi solicitada uma nova senha para sua conta,</p>';
            $msg.= '<p>acesse o link para criar uma nova senha.</p>';
            $msg.= '<br />';
            $msg.= "<p><a href='$_url'>$_url</a></p>";
            $msg.= '<br />';
            $msg.= '<p><br />Equipe DOFUS ARCHMONSTER</p>';
            $msg.= '--------------------------------------------------<br />';
            $msg.= '--------------------------------------------------<br />';
            $msg.= '--------------------------------------------------<br />';
            $msg.= '<h1>DOFUS ARCHMONSTER -> Recover Password</h1>';
            $msg.= '<br />';
            $msg.= '<p>A new password was requested for your account,</p>';
            $msg.= '<p>visit the link to create a new password.</p>';
            $msg.= '<br />';
            $msg.= "<p><a href='$_url'>$_url</a></p>";
            $msg.= '<br />';
            $msg.= '<p><br />Team DOFUS ARCHMONSTER</p>';
            //echo $msg;
            sendMail($form->email, 'DOFUS ARCHMONSTER - Recover', $msg, $msg);
        }
        //$data = array('status'=>true, 'message'=>$msg);
        $data = array('status'=>true, 'message'=>'message_sent');

    } catch (Exception $e) {
        echo $e->getMessage();
        //log error
        $data = array(
            "status"=>false,
            "message"=>"occurred_an_error"
            );
    }
    echo json_encode($data);
});

$app->post('/newPassword', function() use ($app, $db) {
    try {
        $body = $app->request->getBody();
        $form = json_decode($body);

        $user = $db->dofus_user()->where('recover_token=?', $form->token);

        $_user = $user->fetch();
        if ( false !==  $_user ) {

            $PW = substr( md5($form->password), 0, 30 );

            $user->update(array('password'=>$PW));

            $data = array('status'=>true, 'message'=>'password_updated');


            $msg = '<h1>DOFUS ARCHMONSTER -> Nova Senha</h1>';
            $msg.= '<br />';
            $msg.= '<p>Sua senha foi alterada com sucesso.</p>';
            $msg.= '<br />';
            $msg.= '<p><b>Email: </b>'.$_user['email'].'</p>';
            $msg.= '<p><b>Senha: </b>'.$form->password.'</p>';
            $msg.= '<br />';
            $msg.= '<p>Equipe DOFUS ARCHMONSTER</p>';
            $msg.= '--------------------------------------------------<br />';
            $msg.= '--------------------------------------------------<br />';
            $msg.= '--------------------------------------------------<br />';
            $msg.= '<h1>DOFUS ARCHMONSTER -> New Password</h1>';
            $msg.= '<br />';
            $msg.= '<p>Your password has been successfully changed.</p>';
            $msg.= '<br />';
            $msg.= '<p><b>Email: </b>'.$_user['email'].'</p>';
            $msg.= '<p><b>Pass: </b>'.$form->password.'</p>';
            $msg.= '<br />';
            $msg.= '<p>Team DOFUS ARCHMONSTER</p>';

            sendMail($_user['email'], 'DOFUS ARCHMONSTER - Update', $msg, $msg);
        }
        else {
            $data = array('status'=>false, 'message'=>'token_invalid');
        }


    } catch (Exception $e) {
        //log error
        $data = array( "status"=>false, "message"=>"occurred_an_error" );
    }
    echo json_encode($data);
});

$app->post('/emailValid', function() use ($app, $db) {
    try {
        $body = $app->request->getBody();
        $form = json_decode($body);

        //$user = $db->dofus_user()->where('email=?', $form->email);
        $user = $db->dofus_user[array("email"=>$form->email)];
        if ( false === $user || $user['email'] != $form->email) {
            $data = array('status'=>true, 'message'=>'email_disponible.');
        }
        else {
            $data = array('status'=>false, 'message'=>'email_indisponible.');
        }

    } catch (Exception $e) {
        //log error
        $data = array(
            "status"=>false,
            "message"=>"occurred_an_error"
            );
    }
    echo json_encode($data);
});


$app->post("/changePassword", function() use ($app, $db) {

    //$L_O_O_P = ''; for($i =0 ; $i < 1000000; $i++) { $L_O_O_P.= "$i,"; }

    try {
        /*$id = 1;
        $user = $db->dofus_user[array("id"=>$id)];*/
        $user = auth_user_from_token($app, $db);
        if ( false === $user )
        {
            echo json_encode(array('status'=>false, 'message'=>'Requer usuario authenticado.'));

            $app->response()->status(401);
            return;
        }

        $body = $app->request->getBody();
        $form = json_decode($body);
        if (strlen($form->password) < 6) {
            echo json_encode(array('status'=>false, 'message'=>'password_length_not_valid'));
            return;
        }

        $token = md5(uniqid($user['email'], true ));

        $PW = substr(md5($form->password), 0, 30);
        $user->update(array('auth_token'=>$token, 'password'=>$PW));

        $data = array(
            "status"=>true,
            "message"=> 'updated',
            "last"=> $token,
            );

            $msg = '<h1>DOFUS ARCHMONSTER -> Mudar Senha</h1>';
            $msg.= '<br />';
            $msg.= '<p>Sua senha foi alterada com sucesso.</p>';
            $msg.= '<br />';
            $msg.= '<p><b>Email: </b>'.$_user['email'].'</p>';
            $msg.= '<p><b>Senha: </b>'.$form->password.'</p>';
            $msg.= '<br />';
            $msg.= '<p>Equipe DOFUS ARCHMONSTER</p>';
            $msg.= '--------------------------------------------------<br />';
            $msg.= '--------------------------------------------------<br />';
            $msg.= '--------------------------------------------------<br />';
            $msg.= '<h1>DOFUS ARCHMONSTER -> Change Password</h1>';
            $msg.= '<br />';
            $msg.= '<p>Your password has been successfully changed.</p>';
            $msg.= '<br />';
            $msg.= '<p><b>Email: </b>'.$_user['email'].'</p>';
            $msg.= '<p><b>Pass: </b>'.$form->password.'</p>';
            $msg.= '<br />';
            $msg.= '<p>Team DOFUS ARCHMONSTER</p>';

        sendMail($user['email'], 'DOFUS ARCHMONSTER - Change', $msg, $msg);

    } catch (Exception $e) {
        //log error
        $data = array(
            "status"=>false,
            "message"=>"occurred_an_error"
            );
    }
    echo json_encode($data);
});

$app->post('/logout', function() use ($app, $db) {

    $_user = current_user($app, $db);

    $_user->update(array('auth_token'=>null));

    $app->response()->header("Content-Type", "application/json");

    echo json_encode(array());
    });

$app->post('/login', function() use ($app, $db) {

    //http://dofus.eucurto.net/v2/api/login

    $app->response()->header("Content-Type", "application/json");

    $body = $app->request->getBody();
    $form = json_decode($body);

    //TEST LOGIN
    if ( $form->email == '' && ( $form->password == '' || $form->fid == '' ) ) {
        echo json_encode(array('status'=>false, 'message'=>'Informe o email e senha.'));
        $app->response()->status(401);
        return;
    }

    $_user = $db->dofus_user()
        ->where('email=?', $form->email)
        ->limit(1);

    $user = $_user->fetch();

    if ( $user !== false ) {

        $token = md5(uniqid($user['email'], true ));
        $data = array('auth_token' => $token);

        // valida email
        if ( $form->password != '' ) {

            $pass = substr(md5($form->password),0,30);

            if ( $user['password'] !== $pass ) {
                echo json_encode(array('status'=>false, 'message'=>'Email ou senha inválidos.'));

                $app->response()->status(401);
                return;
            }

            $_user->update(array('auth_token'=>$token));

            echo json_encode($data);
            return;

        }
        // valida facebook id
        else if ( $form->fid != '' ) {

            if ( $user['fid'] === '' || isset($user['fid']) ) {

                $_user->update(array('fid'=>$form->fid, 'auth_token'=>$token));

            }
            else if ( $user['fid'] === $form->fid ) {

                $_user->update(array('auth_token'=>$token));
            }

            echo json_encode($data);
            return;
        }

    }
    else {

        if ( $form->fid != ''  )
        {
            //gera token de conectado
            $token = md5(uniqid($form->email, true ));

            $PW = substr(md5($form->fid), 0, 30);

            $user = $db->dofus_user()->insert(
                array(
                    'email'=>$form->email,
                    'password'=>$PW,
                    'config_data'=>'{"language":"en","theme":"a1","server_name":"","user_name":""}',
                    'auth_token'=>$token,
                    'fid'=>$form->fid
                ));

            if ( $user === false ) {
                echo json_encode(array('status'=>false, 'message'=>'Nao foi possivel criar usuario.'));
                return;
            }
            echo json_encode(array('status'=>true, 'auth_token' => $token));
        } else {

            echo json_encode(array('status'=>false, 'message'=>'Usuario não localizado.'));

        }
    }
    return;
});


$app->get('/users', function() use ($app, $db) {
    $user = auth_user_from_token($app, $db);

    $app->response()->header("Content-Type", "application/json");

    if ( $user ) {
        echo json_encode($user);
        return;
    }
    $app->response()->status(401);
    return;
});



function current_user($app, $db) {

    $token = $app->request->headers->get('token');

    if ( !$token ) {
        return false;
    }
    $_user = $db->dofus_user()->where('auth_token = ?', $token);

    return $_user;
}

function auth_user_from_token($app, $db) {
    $_user = current_user($app, $db);

    if ( false == $_user) {
        return false;
    }
    $user = $_user->fetch();

    if ( $user ) {
        return $user;
    }
    return false;
}

$app->run();

//echo json_encode( $db->dofus_user_archmonster());

?>