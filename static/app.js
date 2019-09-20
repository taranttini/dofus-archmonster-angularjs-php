'use strict';

(function () {

  var url = 'api/';

  var archApp = angular.module('archApp', ['ngRoute', 'ngResource', 'ngAnimate']);

  var LANG = {
    FR: {
      language: 'Langue',
      config: 'Paramètres',
      theme: 'Thèmes',
      choose_step: 'Sélectionnez l\'étape',
      missing_list: 'Montrer que le manquant',
      processing: ' traitement...',
      hold_up: ' soutenir...',
      updated: ' actualisée',
      occurred_an_error: 'produite une erreur',
      char_info: 'Personnage',
      hero_name: 'Nom du personnage',
      server_name: 'Nom du serveur',
      save: 'Sauvegarder',
      password: 'Passe',
      change_password: 'Mot de Passe',
      new_password1: 'Nouveau mot de passe',
      new_password2: 'Répéter mot de passe',
      password_not_equal: 'Les mots de passe ne sont égaux',
      password_length_not_valid: 'Mot de passe moins 6 caractères',
      back: 'Retour',
      options: 'Options',
      clear_list: 'Effacer la liste',
      log_out: 'Sortie',
      get_dofus: 'Obtenir DOFUS',
      really_want: 'Voulez-vous vraiment faire cela',
      YES: 'OUI',
      NO: 'NON',
      add_all_step: 'Ajouter toutes les étapes',
      user_or_mail_invalid: 'Utilisateur ou courriel invalide',
      inform_mail_valid: 'Informer un mail valide',
      inform_password: 'Informer le mot de passe',
      login: 'Connecter',
      create_account: 'Créer un compte',
      recover_password: 'Récupérer mot de passe',
      search: 'Recherche',
      email_unavailable: 'Email indisponible',
      password_updated: 'Passe actualisée',
      message_sent: 'Message envoyé',
      token_invalid: 'Token invalide',
      doar0: 'La Donation',
      doar1: 'Effectuez un petit don à aider avec hébergement coûts et la maintenance d\'outils',
      doar2: 'Problèmes ou des améliorations, envoyez un mail à ',
      add_one: 'Ajouter +1 cette étape',
      remove_one: 'Retirer -1 cette étape',
    },
    EN: {
      language: 'Language',
      config: 'Settings',
      theme: 'Themes',
      choose_step: 'Select Step',
      missing_list: 'Show only the missing',
      processing: ' processing...',
      hold_up: ' hold up...',
      updated: ' updated',
      occurred_an_error: ' occurred an error ',
      char_info: 'Character',
      hero_name: 'Character name',
      server_name: 'Server name',
      save: 'Save',
      password: 'Password',
      change_password: 'Change Password',
      new_password1: 'New password',
      new_password2: 'Repeat password',
      password_not_equal: 'Passwords not are equals',
      password_length_not_valid: 'Password minimum 6 characters',
      back: 'Back',
      options: 'Options',
      clear_list: 'Clear the list',
      log_out: 'Log Out',
      get_dofus: 'Get DOFUS',
      really_want: 'Really want do this',
      YES: 'YES',
      NO: 'NO',
      add_all_step: 'Add all steps',
      user_or_mail_invalid: 'User or mail invalid',
      inform_mail_valid: 'Inform a mail valid',
      inform_password: 'Inform the password',
      login: 'Connect',
      create_account: 'Create account',
      recover_password: 'Recover password',
      search: 'Search',
      email_unavailable: 'Email unavailable',
      password_updated: 'Password update',
      message_sent: 'Message Sent',
      token_invalid: 'Token invalid',
      doar0: 'Donation',
      doar1: 'Perform a small donation to collaborate with hosting costing and tool maintenance.',
      doar2: 'Problems or improvements, send mail to ',
      add_one: 'Add +1 this step',
      remove_one: 'Remove -1 this step',
    },
    PT: {
      language: 'Idioma',
      config: 'Configurações',
      theme: 'Temas',
      choose_step: 'Selecione o passo',
      missing_list: 'Exibir somente os que faltam',
      processing: ' em processamento...',
      hold_up: ' aguarde...',
      updated: ' atualizado',
      occurred_an_error: ' ocorreu um erro',
      char_info: 'Personagem',
      hero_name: 'Nome do personagem',
      server_name: 'Nome do servidor',
      save: 'Gravar',
      password: 'Senha',
      change_password: 'Mudar Senha',
      new_password1: 'Nova senha',
      new_password2: 'Repita senha',
      password_not_equal: 'As senhas não são iguais',
      password_length_not_valid: 'Senha mínimo 6 caracteres',
      back: 'Voltar',
      options: 'Opções',
      clear_list: 'Limpar a lista',
      log_out: 'Sair',
      get_dofus: 'Obter DOFUS',
      really_want: 'Realmente quer fazer isso',
      YES: 'SIM',
      NO: 'NÃO',
      add_all_step: 'Adicionar todos os passos',
      user_or_mail_invalid: 'Usuário ou e-mail inválido ',
      inform_mail_valid: 'Informar um email válido',
      inform_password: 'Informar a senha ',
      login: 'Conectar',
      create_account: 'Criar conta',
      recover_password: 'Recuperar senha',
      search: 'Pesquisar',
      email_unavailable: 'Email indisponível',
      password_updated: 'Senha atualizada',
      message_sent: 'Mensagem enviada',
      token_invalid: 'Token inválido',
      doar0: 'Doação',
      doar1: 'Colabore com a ferramenta, realize uma pequena doação para colaborar com os custeios de hospedagem e manutenção da ferramenta.',
      doar2: 'Problemas ou melhorias, envie uma mensagem para ',
      add_one: 'Adicionar +1 desse passo',
      remove_one: 'Remover -1 desse passo',
    },
    ES: {
      language: 'Lenguaje',
      config: 'Configuración',
      theme: 'Temas',
      choose_step: 'Seleccionar el paso',
      missing_list: 'mostrar sólo faltan',
      processing: 'en procesamiento...',
      hold_up: 'espere...',
      updated: 'actualizado',
      occurred_an_error: 'Ha ocurrido un error',
      char_info: 'Carácter',
      hero_name: 'Nombre del carácter',
      server_name: 'Nombre del servidor',
      save: 'Ahorrar',
      password: 'Contraseña',
      change_password: 'Cambiar contraseña',
      new_password1: 'Nueva contraseña',
      new_password2: 'Repetir contraseña',
      password_not_equal: 'Las contraseñas no son lo mismo',
      password_length_not_valid: 'Mínimo 6 caracteres contraseña',
      back: 'Volver',
      options: 'Opciones',
      clear_list: 'Borrar la lista',
      log_out: 'Salir',
      get_dofus: 'Obtener DOFUS',
      really_want: 'Realmente quiero hacer esto',
      YES: 'SÍ',
      NO: 'NO',
      add_all_step: 'Añadir todos los pasos',
      user_or_mail_invalid: 'El usuario o correo electrónico no es válido',
      inform_mail_valid: 'Díselo a un email válido',
      inform_password: 'Díselo una contraseña',
      login: 'Conecxión',
      create_account: 'Crear cuenta',
      recover_password: 'Recuperar la contraseña',
      search: 'Buscar',
      email_unavailable: 'Correo no disponible',
      password_updated: 'Contraseña actualizada',
      message_sent: 'Mensaje enviado',
      token_invalid: 'Token no es válido',
      doar0: 'Donación',
      doar1: 'Colabore con la herramienta, realice una pequeña donación para ayudar a la acogida de cálculo de costes y mantenimiento de la herramienta.',
      doar2: 'Problemas o mejoras, envía un mensaje a',
      add_one: 'Añadir +1 este paso',
      remove_one: 'Retire -1 este paso',
    }
  };


  archApp.factory('authIntercerptor', ['$q', '$location', function ($q, $location) {
    return {
      request: function (config) {
        //console.log('valida login...')
        config.headers = config.headers || {};
        if (localStorage.auth_token) {
          config.headers.token = localStorage.auth_token;
        }
        return config;
      },
      responseError: function (response) {
        //console.log('deslogado/erro...')
        if (response.status === 401) {
          $location.path('/login');
          //window.location.reload();
        }
        return $q.reject(response);
      }
    };
  }]);

  var numLoadings = 0;
  archApp.factory('httpInterceptor', ['$q', '$rootScope', '$log', function ($q, $rootScope, $log) {

    return {
      request: function (config) {
        numLoadings++;
        //console.log('carregando...');
        // Show loader
        $rootScope.$broadcast("loader_show");

        return config || $q.when(config);
      },
      response: function (response) {
        if ((numLoadings -= 1) === 0) {
          //console.log('carregando ok');
          //$('#erro').slideUp('600');
          $('#erro').html('');
          // Hide loader
          $rootScope.$broadcast("loader_hide");
        }

        return response || $q.when(response);
      },
      responseError: function (response) {
        if (!(numLoadings -= 1)) {
          //console.log('carregando erro');
          // Hide loader
          $rootScope.$broadcast("loader_hide");
        }

        return $q.reject(response);
      }
    };
  }]);


  archApp.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    //rotas
    $routeProvider.when('/', {
      templateUrl: 'arch-3.html',
      controller: 'ListController'
    }).when('/login', {
      templateUrl: 'login.html',
      controller: 'LoginController'
    }).when('/new-account', {
      templateUrl: 'new_account.html',
      controller: 'AccountController'
    }).when('/recover-password', {
      templateUrl: 'recover_password.html',
      controller: 'RecoverPWController'
    }).when('/new-password/:token', {
      templateUrl: 'new_password.html',
      controller: 'NewPasswordController'
    }).when('/change-password', {
      templateUrl: 'change_password.html',
      controller: 'ChangePWController'
    }).when('/config', {
      templateUrl: 'config.html',
      controller: 'ConfigController'

    }).when('/PublicList/:userID', {
      //Define a route that has a route parameter in it (:userID)
      templateUrl: 'arch-3.html',//'arch_public.html',
      controller: 'ListController'
    }).otherwise({
      //default route
      redirectTo: '/'
    });
    //interceptador
    $httpProvider.interceptors.push('authIntercerptor');

    $httpProvider.interceptors.push('httpInterceptor');

  }]);


  archApp.directive("loader", ['$rootScope', function ($rootScope) {
    return function ($scope, element, attrs) {
      $scope.$on("loader_show", function () {
        return element.show();
      });
      return $scope.$on("loader_hide", function () {
        return element.hide();
      });
    };
  }]);


  archApp.service('Quest', ['Monster', '$q', '$http', 'questFilter', 'SiteConfig', function (Monster, $q, $http, questFilter, SiteConfig) {

    var _data = [];

    this.load = function () {

      var deferred = $q.defer();

      if (_data.length > 0) {
        deferred.resolve(_data);
      } else {
        _logLOAD('loading quests');

        $http.get('/static/archmonster.min.json').success(function (response) {
          _logLOAD('loaded quests');
          _data = response;

          Monster.setQtyTotal(_data.length);

          deferred.resolve(response);

        }).error(function (response) {
          deferred.reject(response);
        });
      }
      return deferred.promise;
    };


    this.addMonsters = function () {
      if (numLoadings > 0) {
        $('#erro').html(SiteConfig.TEXT().hold_up);
        return;
      }
      var monsters = _data.filter(function (item) { return item.step == questFilter.step });

      Monster.addList(monsters);

      return monsters;
    }

    this.removeMonsters = function () {
      if (numLoadings > 0) {
        $('#erro').html(SiteConfig.TEXT().hold_up);
        return;
      }
      var monsters = _data.filter(function (item) { return item.step == questFilter.step });

      Monster.removeList(monsters);

      return monsters;
    }

    this.getSteps = function () {

      var steps = [];


      _data.forEach(function (item) {
        var _missing = questFilter.missing ?
          Monster.getQtyByID(item.id) === 0 : true;

        if (steps.indexOf(item.step) == -1 && _missing) {
          steps.push(item.step);
        }
      });

      return steps;
    };
  }]);


  function clone(obj) {
    var copy;
    // Handle the 3 simple types, and null or undefined
    if (null === obj || "object" != typeof obj) return obj;
    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }
    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (var i = 0, len = obj.length; i < len; i++) {
        copy[i] = clone(obj[i]);
      }
      return copy;
    }
    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
      }
      return copy;
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
  }


  function _logLOAD(text) {
    var loggar = true;
    if (loggar) {
      console.log(text);
    }
  }


  archApp.service('Monster', ['SiteConfig', '$http', '$q', '$location', function (SiteConfig, $http, $q, $location) {

    var _data = {};

    this.load = function (_path) {

      SiteConfig.lastToken = null;

      var deferred = $q.defer();

      _logLOAD('loading monsters');


      //    Get the name from the server.
      $http.get(url + 'archmonster' + _path).success(
        function (response) {
          _logLOAD('loaded monsters');

          _data = JSON.parse(response.data);
          var config = JSON.parse(response.config_data);

          if (null !== config) {
            SiteConfig.setConfig(config);
          }
          else {
            SiteConfig.setConfig({});
          }
          SiteConfig.lastToken = response.last;

          SiteConfig.setUserLink(response.uid);

          deferred.resolve(_data);
        }).error(
          function (response) {
            deferred.reject(response);
          });

      return deferred.promise;
    };

    var _old_data = {};

    var update = function () {

      $http.post(url + 'archmonster', JSON.stringify(_data)).success(
        function (data, status, headers, config) {
          if (data.status === false) {
            $('#erro').html(SiteConf.TEXT().occurred_an_error);
            //console.log( data.message );

            _data = clone(_old_data);
          }
        }).error(function (data, status) {
          //console.log(data);

          _data = clone(_old_data);
        });
    };
    // retorna todos monstros
    this.getData = function () {

      return _data;
    };
    // checa se existe monstro
    this.existID = function (id) {

      var d = _data[id];

      return d !== undefined && d > 0 ? true : false;
    };
    // retorna a quantidade do monstro
    this.getQtyByID = function (id) {

      var d = _data[id];

      return d === undefined || d === null || isNaN(d) ? 0 : parseInt(d);
    };
    var qtyTotal = 0;
    // seta a quantidade total de monstros
    this.setQtyTotal = function (value) {

      qtyTotal = value;
    };
    // substrai monstro
    this.removeID = function (id) {

      _old_data = clone(_data);

      var qty = this.getQtyByID(id) - 1;

      _data[id] = 0 > qty ? 0 : qty;

      update();
    };
    // verifica se existe ao menos um monstro
    this.haveLessOne = function () {

      var total = qtyTotal === 0 ? 637 : qtyTotal;

      for (var id = 1; id <= total; id++) {

        if (this.getQtyByID(id) > 0) {

          return true;
        }
      }
      return false;
    };
    // verifica se existe todos os monstros
    this.haveAll = function () {

      var total = qtyTotal === 0 ? 637 : qtyTotal;

      for (var id = 1; id <= total; id++) {

        if (this.getQtyByID(id) === 0) {

          return false;
        }
      }
      return true;
    };
    // adiciona todos os monstros
    this.addAll = function () {
      _old_data = clone(_data);

      var total = qtyTotal === 0 ? 637 : qtyTotal;

      for (var id = 1; id <= total; id++) {

        _data[id] = this.getQtyByID(id) + 1;
      }

      update();
    };
    // limpa todos os monstros
    this.clearAll = function () {

      _old_data = clone(_data);

      var total = qtyTotal === 0 ? 637 : qtyTotal;

      for (var id = 1; id <= total; id++) {

        _data[id] = 0;
      }

      update();

    };

    this.getDofus = function () {
      _old_data = clone(_data);

      var _total = qtyTotal === 0 ? 637 : qtyTotal;

      var qty = 0;

      for (var id = 1; id <= _total; id++) {

        qty = this.getQtyByID(id) - 1;

        _data[id] = 0 > qty ? 0 : qty;
      }

      update();
    };

    this.addID = function (id) {
      _old_data = clone(_data);

      _data[id] = this.getQtyByID(id) + 1;

      update();
    };

    this.addList = function (monsters) {
      _old_data = clone(_data);

      var i = 0, total = monsters.length;
      //var getQtyByID = this.getQtyByID;//monsters.map(function(item) { _data[item.id] = getQtyByID( item.id ) + 1 });
      // map é mais rapido, mas para evitar erro no ie, usando for ou while
      while (i < total) {

        var id = monsters[i].id;

        _data[id] = this.getQtyByID(id) + 1;

        i++;
      }
      update();
    }

    this.removeList = function (monsters) {
      _old_data = clone(_data);

      var i = 0, total = monsters.length;

      var qty = 0;
      //var getQtyByID = this.getQtyByID;//monsters.map(function(item) { _data[item.id] = getQtyByID( item.id ) + 1 });
      // map é mais rapido, mas para evitar erro no ie, usando for ou while
      while (i < total) {

        var id = monsters[i].id;

        qty = this.getQtyByID(id) - 1;

        _data[id] = 0 > qty ? 0 : qty;

        i++;
      }
      update();
    }

    this.setData = function (value) {
      _data = value;
    };
  }]);



  archApp.service('auth', ['$http', function ($http) {

    this.login = function (user) {
      return $http.post(url + 'login', { email: user.email, password: user.password, fid: user.fid });
    };

    this.logout = function () {
      return $http.post(url + 'logout');
    };

    this.isLoggedIn = function () {
      return (localStorage.getItem('auth_token')) ? true : false;
    };

    this.changePassword = function (new_password) {
      return $http.post(url + 'changePassword', { password: new_password });
    };
  }]);



  archApp.service('account', ['SiteConfig', '$http', function (SiteConfig, $http) {

    this.emailValid = function (email) {
      return $http.post(url + 'emailValid', { email: email });
    };

    this.create = function (email, password, server_name, hero_name) {

      SiteConfig.setServerName(server_name);
      SiteConfig.setHeroName(hero_name);

      var config = SiteConfig.getConfig();
      config = JSON.stringify(config);

      return $http.post(url + 'createAccount', { email: email, password: password, config: config });
    };

    this.recoverPassword = function (email) {
      return $http.post(url + 'recoverPassword', { email: email });
    };

    this.getEmailByToken = function (token) {
      return $http.get(url + 'getEmailByToken/' + token);
    };

    this.newPassword = function (token, password) {
      return $http.post(url + 'newPassword', { token: token, password: password });
    };
  }]);


  // filter for use in step
  archApp.value('questFilter', { step: 20, search: '' });

  function search(lang, element, questFilter) {

    return element[lang].toLowerCase().indexOf(questFilter.search.toLowerCase()) > -1;
  }

  archApp.filter('filterForQuest', ['SiteConfig', 'Monster', function (SiteConfig, Monster) {

    return function (filterForQuest, questFilter) {

      return filterForQuest.filter(function (element, index, array) {

        var _step = questFilter.step === 0 ? element.step !== 0 : element.step == questFilter.step;

        var _search = search(SiteConfig.getLanguage(), element, questFilter);
        //console.log( questFilter.search.length + '-'+ _step);

        if (questFilter.search.length >= 3) {
          _step = true;
        }

        var _missing = questFilter.missing ?
          Monster.getQtyByID(element.id) === 0 : true;

        return _step && _search && _missing;
      });
    };
  }]);

  archApp.filter('encodeURIComponent', function () { return window.encodeURIComponent; });

  // Define a new directive called 'focusMe'
  archApp.directive('focusMe', ['$timeout', '$parse', function ($timeout, $parse) {
    return {
      link: function (scope, element, attrs) {
        var model = $parse(attrs.focusMe);
        scope.$watch(model, function (value) {
          //console.log('value=',value);
          if (value === true) {
            $timeout(function () {
              element[0].focus();
            });
          }
        });
        element.bind('blur', function () {
          //console.log('blur')
          scope.$apply(model.assign(scope, false));
        });
      }
    };
  }]);



  archApp.directive('language', ['SiteConfig', function (SiteConfig) {
    return {
      link: function ($scope, $element, $attrs) {

        $scope.setLanguage = function (value) {
          SiteConfig.setLanguage(value);
        };

        $scope.showLanguage = function (value) {
          return SiteConfig.getLanguage() == value;
        };
      },
      restrict: 'A',
      template:
        '<h2>{{ TEXT().language }}</h2>' +
        '<nav>' +
        '<li ng-click="setLanguage(\'en\')" ng-class="{active: showLanguage(\'en\')}">EN</li>' +
        '<li ng-click="setLanguage(\'pt\')" ng-class="{active: showLanguage(\'pt\')}">PT</li>' +
        '<li ng-click="setLanguage(\'fr\')" ng-class="{active: showLanguage(\'fr\')}">FR</li>' +
        '<li ng-click="setLanguage(\'es\')" ng-class="{active: showLanguage(\'es\')}">ES</li>' +
        '</nav>'
    };
  }]);



  archApp.service('SiteConfig', ['$location', 'questFilter', '$rootScope', '$http', '$q',
    function ($location, questFilter, $rootScope, $http, $q) {

      var _config = {
        theme: 'a1',
        language: 'en',
        server_name: '',
        hero_name: '',
        local_theme: '',
        local_language: ''
      };
      var path = '';
      var _TEXT;


      this.init = function () {

      };

      var userLink = '';
      this.getUserLink = function () {
        return userLink;
      };

      this.setUserLink = function (value) {
        userLink = value;
      };

      this.backTo = '';

      this.setPath = function (value) {

        path = value;
      };

      this.getPath = function () {

        return path;
      };

      this.isPublic = function () {

        return $location.path().indexOf('PublicList') != -1;
      };

      this.getConfig = function () {
        return _config;
      };


      this.setConfig = function (value) {

        _config.language = value.language || 'en';
        _config.theme = value.theme || 'a1';
        _config.hero_name = value.hero_name || '';
        _config.server_name = value.server_name || '';

        if (_config.local_language !== '') { _config.language = _config.local_language; }
        if (_config.local_theme !== '') { _config.theme = _config.local_theme; }

        setText(_config.language);
      };

      this.TEXT = function () {
        return _TEXT;
      };

      var setText = function (value) {
        switch (value) {
          case 'en': _TEXT = LANG.EN; break;
          case 'pt': _TEXT = LANG.PT; break;
          case 'fr': _TEXT = LANG.FR; break;
          case 'es': _TEXT = LANG.ES; break;
          default: _TEXT = LANG.EN; break;
        }
      };

      setText(_config.language);



      this.getHeroName = function () {

        return _config.hero_name;
      };
      this.setHeroName = function (value) {

        _config.hero_name = value;
      };
      this.getServerName = function () {

        return _config.server_name;
      };
      this.setServerName = function (value) {

        _config.server_name = value;
      };
      // recupera o idioma ativo no site
      this.getLanguage = function () {

        return _config.language;
      };
      // seta um novo idioma no site
      this.setLanguage = function (value) {

        _config.language = value;
        setText(value);
        questFilter.search = '';
        _config.local_language = value;
        broad();
      };
      // retorna o tema ativo
      this.getTheme = function () {

        return _config.theme;
      };
      // seta um novo tema
      this.setTheme = function (value) {

        _config.theme = value;

        _config.local_theme = value;
      };

      this.update = function () {

        $http.post(url + 'config', JSON.stringify(_config));
      };


      var broad = function () {
        $rootScope.$broadcast('setLanguage');
      };

      this.questFilter = questFilter;

      return this;
    }]);



  archApp.controller('LoginController', ['$scope', 'auth', '$location', '$window',
    function ($scope, auth, $location, $window) {

      $scope.login = function () {

        if ($scope.loginForm.$valid) {
          var promise = auth.login($scope.user);

          promise.then(success, error);
        }

        function success(response) {
          //console.log(response);
          localStorage.setItem('auth_token', response.data.auth_token);
          $location.path('/');
        }

        function error(response) {
          //console.log(response);
          $scope.wrongCredentials = true;
        }
      };
    }]);



  //inicia ao entrar no site
  archApp.controller('SiteController', ['SiteConfig', '$scope', function (SiteConfig, $scope) {

    // retorna o tema ativo
    $scope.getTheme = function () {
      return SiteConfig.getTheme();
    };
    // retorna os textos do idioma ativo
    $scope.TEXT = function () {
      return SiteConfig.TEXT();
    };
  }]);



  archApp.controller('ConfigController', ['Monster', 'SiteConfig', 'auth', '$scope', '$location',
    function (Monster, SiteConfig, auth, $scope, $location) {

      var init = function () {
        // verifica se tem voltar preenchido
        if ('' === SiteConfig.backTo) {

          $location.path('/');
        }

        $scope.isPrivate = false;

        if (localStorage.auth_token && SiteConfig.lastToken) {

          $scope.isPrivate = localStorage.auth_token == SiteConfig.lastToken &&
            false === SiteConfig.isPublic();
        }

        $scope.voltar = SiteConfig.backTo;

        $scope.hero_name = SiteConfig.getHeroName();
        $scope.server_name = SiteConfig.getServerName();

      }();


      $scope.blurSave = function () {

        SiteConfig.setServerName($scope.server_name);
        SiteConfig.setHeroName($scope.hero_name);

        update();
      };

      var update = function () {
        if ($scope.isPrivate) {
          SiteConfig.update();
        }
      };

      $scope.TEXT = function () {
        return SiteConfig.TEXT();
      };

      //$scope.questFilter = SiteConfig.questFilter;

      // seta um novo idioma no site
      /*$scope.setLanguage = function ( value ) {


          SiteConfig.setLanguage( value );

          update();
      }*/

      // mostra o idioma se ele estiver ativo
      /*$scope.showLanguage = function ( value ) {
          return SiteConfig.getLanguage() == value;
      }*/

      // retorna o tema ativo
      $scope.getTheme = function () {
        return SiteConfig.getTheme();
      };

      // escolhe um novo tema
      $scope.setTheme = function (value) {

        switch (value) {
          case 1: SiteConfig.setTheme('a1'); break;
          case 2: SiteConfig.setTheme('a2'); break;
          case 3: SiteConfig.setTheme('a3'); break;
          case 4: SiteConfig.setTheme('a4'); break;
          case 5: SiteConfig.setTheme('a5'); break;
          case 6: SiteConfig.setTheme('a6'); break;
          case 7: SiteConfig.setTheme('a7'); break;
          case 8: SiteConfig.setTheme('a8'); break;
          default: break;
        }
        update();
      };

      $scope.$on('setLanguage', function () {

        update();

      });


      $scope.logout = function () {

        var promise = auth.logout();
        promise.then(function () {
          localStorage.removeItem('auth_token');
          $location.path('/');
          //window.location.reload();
        });
      };


      $scope.showAddMonster = false;
      $scope.showGetDofus = false;
      $scope.showClear = false;


      // #GETDOFUS bloqueia
      $scope.disableGetDofus = function () {
        return !Monster.haveAll();
      };
      // #GETDOFUS monstra/esconde
      $scope.toggleGetDofus = function () {
        $scope.showGetDofus = !$scope.showGetDofus;
      };
      // #GETDOFUS confirma
      $scope.confirmGetDofus = function () {
        Monster.getDofus();
        $scope.showGetDofus = false;
      };


      // #CLEAR bloqueia
      $scope.disableClear = function () {
        return !Monster.haveLessOne();
      };
      // #CLEAR monstra/esconde
      $scope.toggleClear = function () {
        $scope.showClear = !$scope.showClear;
      };
      // #CLEAR confirma
      $scope.confirmClear = function () {
        Monster.clearAll();
        $scope.showClear = false;
      };


      // #ADDMONSTER monstra/esconde
      $scope.toggleAddMonster = function () {
        $scope.showAddMonster = !$scope.showAddMonster;
      };
      // #ADDMONSTER confirma
      $scope.confirmAddMonster = function () {
        Monster.addAll();
        $scope.showAddMonster = false;
      };
    }]);



  var hasValue = function (field) {

    if (field != undefined && field.length > 0) {

      return true;
    }
    return false;
  };

  var isNotEqual = function (value1, value2) {

    if ((hasValue(value1) || hasValue(value2)) && value1 != value2) {

      return true;
    }
    return false;
  };


  var lengthNotValid = function (value) {

    if (hasValue(value) && value.length < 6) {

      return true;
    }
    return false;
  };

  archApp.controller('AccountController', ['account', 'SiteConfig', 'auth', '$location', '$scope',
    function (account, SiteConfig, auth, $location, $scope) {

      //var emailIndisponible = false;
      $scope.emailIndisponible = false;

      $scope.checkEmailValid = function () {

        account.emailValid($scope.email).then(
          function (response) {
            $scope.emailIndisponible = !response.data.status;
          },
          function (response) {
            $scope.emailIndisponible = true;
            $('#erro').html(SiteConfig.TEXT().occurred_an_error);
          }
        );
      };

      $scope.create = function () {

        account.create($scope.email, $scope.pw1, $scope.server_name, $scope.hero_name).then(
          function (response) {

            if (response.data.status) {
              localStorage.setItem('auth_token', response.data.auth_token);

              $location.path('/');
            }
            else {
              $('#erro').html(response.data.message);
            }
          },
          function (response) {
            //console.log(response);
          }
        );
      };

      $scope.isNotEqual = function () {

        return isNotEqual($scope.pw1, $scope.pw2);

      };

      $scope.lengthNotValid = function () {

        return lengthNotValid($scope.pw1);
      };

      $scope.isDisabled = function () {

        return $scope.emailIndisponible ||
          hasValue($scope.pw1) === false ||
          $scope.isNotEqual() ||
          $scope.lengthNotValid();
      };
    }]);

  archApp.controller('NewPasswordController', ['$location', '$routeParams', 'account', 'SiteConfig', '$scope',
    function ($location, $routeParams, account, SiteConfig, $scope) {

      $scope.messageSent = false;

      var token = $routeParams.token ? $routeParams.token : '';
      if (token !== '') {
        account.getEmailByToken(token).then(
          function (response) {
            if (response.data.status) {
              $scope.email = response.data.email;
            } else {

              $location.path('/');
            }
          },
          function (response) {

          });
      }

      $scope.isNotEqual = function () {

        return isNotEqual($scope.pw1, $scope.pw2);
      };

      $scope.lengthNotValid = function () {

        return lengthNotValid($scope.pw1);
      };

      $scope.isDisabled = function () {

        return hasValue($scope.pw1) === false ||
          $scope.isNotEqual() ||
          $scope.lengthNotValid();
      };

      $scope.newPW = function () {

        account.newPassword(token, $scope.pw1).then(
          function (response) {

            $scope.pwUpdated = true;
            $scope.message = SiteConfig.TEXT()[response.data.message];

          },
          function (response) {
            $("#erro").html(SiteConfig.TEXT().occurred_an_error);
          }
        );
      };
    }]);


  archApp.controller('RecoverPWController', ['account', 'SiteConfig', '$scope', function (account, SiteConfig, $scope) {

    $scope.recover = function () {

      account.recoverPassword($scope.email).then(
        function (response) {

          $scope.messageSent = true;

          //SiteConfig.TEXT()[response.data.message];
        },
        function (response) {
          $("#erro").html(SiteConfig.TEXT().occurred_an_error);
        }
      );
    };
  }]);


  archApp.controller('ChangePWController', ['SiteConfig', 'auth', '$location', '$scope',
    function (SiteConfig, auth, $location, $scope) {

      // nao logado ou voltar sem preenchimento
      if (false === auth.isLoggedIn() || '' === SiteConfig.backTo) {

        $location.path('/');
      }

      $scope.password1 = '';
      $scope.password2 = '';

      $scope.voltar = function () {
        $location.path('/config');
      };

      $scope.isNotEqual = function () {

        return isNotEqual($scope.password1, $scope.password2);
      };

      $scope.lengthNotValid = function () {

        return lengthNotValid($scope.pw1);
      };

      $scope.isDisabled = function () {
        return $scope.password1 === '' || $scope.isNotEqual() || $scope.lengthNotValid();
      };

      $scope.save = function () {

        auth.changePassword($scope.password1).then(function (response) {
          var data = response.data;
          if (data.status === true) {
            SiteConfig.lastToken = data.last;
            localStorage.setItem('auth_token', data.last);
            $scope.showChanged = true;
          }
          else {
            $('#erro').html(SiteConfig.TEXT()[data.message]);
          }
        }, function (response) {

          $('#erro').html(SiteConfig.TEXT().occurred_an_error);
        });
      };
    }]);



  archApp.controller('FilterController', ['SiteConfig', 'Quest', '$scope',
    function (SiteConfig, Quest, $scope) {

      // configura no escopo a variavel
      $scope.questFilter = SiteConfig.questFilter;
      // carrega os passos vindos da api de pesquisa
      $scope.steps = Quest.getSteps();//[0,20,21,22,23,24,25,26];

      $scope.showMissing = SiteConfig.questFilter.missing;

      $scope.showSteps = false;
      // seleciona um passo ativo
      $scope.selectStep = function (step) {

        SiteConfig.questFilter.step = step;

        $scope.showSteps = false;

        $scope.steps = Quest.getSteps();
      };
      // marca o passo ativo
      $scope.stepActive = function (step) {

        return SiteConfig.questFilter.step == step ? 'active' : '';
      };
      // exibe passos
      $scope.showStep = function () {

        $scope.showSteps = !$scope.showSteps;

        $scope.steps = Quest.getSteps();
      };
      // marca todos desse passo
      $scope.markAllStep = function () {

        var missing = SiteConfig.questFilter.missing;

        SiteConfig.questFilter.missing = false;

        var items = Quest.addMonsters();

        SiteConfig.questFilter.missing = missing;

        //console.log(items);
      };

      // desmarca todos desse passo
      $scope.unmarkAllStep = function () {

        var missing = SiteConfig.questFilter.missing;

        SiteConfig.questFilter.missing = false;

        var items = Quest.removeMonsters();

        SiteConfig.questFilter.missing = missing;

        //console.log(items);
      };

      // exibe os que faltam
      $scope.missing = function () {

        SiteConfig.questFilter.missing = !SiteConfig.questFilter.missing;

        $scope.showMissing = SiteConfig.questFilter.missing;

        $scope.steps = Quest.getSteps();
      };

      $scope.$on('setLanguage', function () {

        //$scope.questFilter.search = questFilter.search;
      });
    }]);



  archApp.controller('ListController', ['$routeParams', 'Monster', 'auth', '$location', 'SiteConfig', 'Quest', '$scope',
    function ($routeParams, Monster, auth, $location, SiteConfig, Quest, $scope) {


      $scope.isConectado = auth.isLoggedIn();

      $scope.link = function () {
        return $location.$$absUrl + 'PublicList/' + SiteConfig.getUserLink();
      };

      var init = function () {

        var _path = $routeParams.userID ? '/' + $routeParams.userID : '';

        if ('' === _path && false === auth.isLoggedIn()) {
          $location.path('/login');
          //window.location.reload();

        }

        //$scope.link =
        $scope.summary = 'Share%20with%20your%20friends%20your%20Archmonster%20Dofus%20list';
        $scope.title = 'Dofus%20Archmonster%20List%20';


        $scope.showSearch = false;

        $scope.showShare = false;

        $scope.isPrivate = !SiteConfig.isPublic();

        SiteConfig.backTo = '';

        $scope.questFilter = SiteConfig.questFilter;

        $scope.quests = [];

        $scope.monsters = [];
        //set o path atual
        SiteConfig.setPath($location.path());

        $scope.path = SiteConfig.getPath();

        $scope.m_img = [];
        // carrega quests
        Quest.load().then(
          function (data) { $scope.quests = data; },

          function (result) { console.log("Error to load quests, " + result); }
        );
        // carrega monstros /
        Monster.load(_path).then(
          // success function
          function (data) { $scope.monsters = data; },
          // error function
          function (result) { console.log("Error to load monsters, " + result); }
        );

      }();



      // seta botao voltar
      $scope.setBack = function () {

        SiteConfig.backTo = SiteConfig.getPath();
      };
      // exibe o nome do personagem
      $scope.personagem = function () {

        var hero = SiteConfig.getHeroName();

        var server = SiteConfig.getServerName();

        if (hero !== '') {
          return server !== '' ? ('(' + server + ') ' + hero) : '';
        }
        return '';
      };
      // mostra o total de monstros distintos
      $scope.getTotal = function () {

        var len = $scope.quests.length;

        var t = 0;

        for (var i = 0; i <= len; i++) {

          t += Monster.existID(i) > 0 ? 1 : 0;
        }
        return t + ' / ' + len;
      };
      // exibe conteudo
      $scope.show = function () {

        if (auth.isLoggedIn() && $scope.isPrivate) {
          return true;
        }
        return false;
      };
      // configura a quantidade para valor padrao 0 caso seja null
      $scope.qty = function (quest) {

        return Monster.getQtyByID(quest.id);
      };
      // marca se possui o monstro
      $scope.mark = function (quest) {

        return $scope.qty(quest) > 0 ? 'm' : '';
      };
      // mostra/esconde a area
      $scope.toggleRegion = function (quest) {

        quest.visible = !quest.visible;
      };
      // soma uma quantidade ao monstro informado
      $scope.plus = function (quest) {

        if (numLoadings > 0) {
          $('#erro').html(SiteConfig.TEXT().hold_up);
          return;
        }
        Monster.addID(quest.id);
      };
      // subtrai uma quantidade ao monstro informado
      $scope.minus = function (quest) {

        if (numLoadings > 0) {
          $('#erro').html(SiteConfig.TEXT().hold_up);
          return;
        }
        Monster.removeID(quest.id);
      };
      // exibe o texto conforme idioma
      $scope.showText = function (data) {

        switch (SiteConfig.getLanguage()) {
          case 'en': return data.en;
          case 'pt': return data.pt;
          case 'fr': return data.fr;
          case 'es': return data.es;
          default: return data.en;
        }
      };

      // mostra/esconde pesquisa
      $scope.search = function () {

        SiteConfig.questFilter.search = '';
        //$scope.questFilter.search = '';
        $scope.showSearch = !$scope.showSearch;
      };
      // mostra/esconde compartilhar
      $scope.share = function () {

        $scope.showShare = !$scope.showShare;
      };

      //var lang = SiteConfig.getLanguage()
      $scope.$on('setLanguage', function () {
        //$scope.questFilter.search = questFilter.search;
      });
    }]);



  window.onscroll = function () {
    fixOnTop();
    toggleTop();
  };

  function fixOnTop() {
    var cab = document.getElementById('cabe');
    cab.style.position = 'fixed';
    cab.style.top = '0';
    cab.style.bottom = 'auto';
    document.getElementsByTagName('body')[0].style.marginTop =
      cab.clientHeight + 'px';

  }

  function toggleTop() {
    if (
      $(window).scrollTop() > 0 &&
      $('html').height() > $(window).innerHeight()) {
      $('#top').slideDown('200'); //show
    }
    else {
      $('#top').slideUp('100'); //hide
    }
  }

  window.onresize = function () {
    toggleTop();
  };

  toggleTop();




  $('#top').click(function () {
    //$(window).scrollTop(0);
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

})();
