app.controller("loginCtrl",['$scope', '$rootScope', '$stateParams', 'myFactory',function($scope, $rootScope, $stateParams, myFactory){

    $scope.goBack = function () {
        window.history.back();
    };
    $scope.yes = true;
}]);