angular.module('app')
    .directive('login', function() {
        return {
            restrict: 'E',
            templateUrl: '/js/directives/login/login.html',
            link: function($scope, element, attrs) {
                $scope.logUserIn = function logUserIn(){
                    $scope.user = true;
                }
                $scope.isLoggedIn = function isLoggedIn() {
                    return $scope.user;
                }
            }
        };
    });
