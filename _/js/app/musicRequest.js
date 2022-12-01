angular.module('musicRequest', [])
  .directive('musicRequest', ['$http','$timeout', function($http, $timeout){
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '_/templates/musicRequest.html',
      link: function(scope, element, attrs){
        var canShow = false;

        function setCookie(cname, cvalue, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + (exdays*24*60*60*1000));
          var expires = "expires="+ d.toUTCString();
          document.cookie = cname + "=" + cvalue + "; " + expires;
        }

        function getCookie(cname) {
          var name = cname + "=";
          var ca = document.cookie.split(';');
          for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length,c.length);
            }
          }
          return "";
        }

        if(getCookie('musicRequest') === '1'){
          element.remove();
        }

        scope.canShow = function() {
          return canShow;
        };

        scope.toggleShow = function() {
          canShow = !canShow;
          return this;
        };

        scope.submit = function(form) {
          if(form.$valid){
            var data = {
              name: form.userName.$viewValue,
              email: form.userEmail.$viewValue,
              song: form.userSong.$viewValue,
		ip: window.GLOBAL_CONST_USER_IP
            };
            $http.post('/songrequestpost.php', data).then(function successCallback(response) {
                scope.successMessage = "Thanks for the request!";
                scope.user = {};
                form.$setPristine();
                form.$setUntouched();
                $timeout(function() {
                  setCookie('musicRequest', '1', 9999);
                  element.remove();
                },1000);
              }, function errorCallback(response) {
              });
          }
        };
      }
    };
  }]);
