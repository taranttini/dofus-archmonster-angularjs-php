<?php

ini_set('display_startup_errors','on');
ini_set('display_errors','on');
ini_set('error_log', dirname(__FILE__) . '/log.log'); /* path to server-writable log file */
//echo dirname(__FILE__);
ini_set('log_errors', 'on');
error_reporting(E_ALL);

date_default_timezone_set('america/sao_paulo') ;

require 'NotORM.php';

$dsn = "mysql:dbname=archmonster;host=127.0.0.1:3307";

$pdo = new PDO($dsn, "root", "usbw");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$structure = new NotORM_Structure_Convention(
    $primary = "id",
    $foreign = "%s_id",
    $table = "%s",
    $prefix = ""
    );

$db = new NotORM($pdo, $structure);


$db->debug = true;

?>