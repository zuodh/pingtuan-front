app.controller("CarCtrl", ['$scope', 'myFactory', '$state', '$rootScope', function ($scope, myFactory, $state, $rootScope) {

    $scope.gotoGoodDetail = function () {
        $state.go('goodDetail');
    };

    $scope.buy = function () {
        $state.go('money');
    };



}]);