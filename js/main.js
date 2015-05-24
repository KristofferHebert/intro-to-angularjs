angular.module('app', [])
    .controller('MainCtrl', ['$scope', function($scope) {
        $scope.user = false;
        $scope.isLoggedIn = function() {
            return $scope.user;
        }
}]);