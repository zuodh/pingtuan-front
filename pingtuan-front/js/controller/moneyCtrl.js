app.controller("moneyCtrl",['$scope', '$rootScope', '$stateParams','$state',function($scope, $rootScope, $stateParams,$state){
    $scope.goBack = function () {
        window.history.back();
    };
    var vm=$scope.vm={};
    vm.cityPickData  ={
            areaData: [],
            title: '请选择城市',
            hardwareBackButtonClose: false
    };
    vm.change = function () {
        console.log(vm);
    }

    $scope.homeclick = function () {
        $state.go('botton.home');
    };


}]);