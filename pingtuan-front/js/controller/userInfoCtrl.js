app.controller("userInfoCtrl",['$scope', '$rootScope', '$stateParams', 'myFactory','$state',function($scope, $rootScope, $stateParams, myFactory,$state){



    $scope.gotoLogin = function () {
        $state.go('botton.login');
    };

    $scope.gotoOrder = function () {
        $state.go('botton.order');
    };

}]);