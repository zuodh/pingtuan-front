app.controller("NewProductCtrl", ['$scope', 'myFactory', '$state', '$rootScope', function ($scope, myFactory, $state, $rootScope) {

    $scope.gotoGoodDetail = function () {
        $state.go('goodDetail');
    };

}]);