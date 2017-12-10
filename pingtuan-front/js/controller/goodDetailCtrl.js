app.controller("goodDetailCtrl",['$scope', '$rootScope', '$state','$stateParams', 'myFactory','$ionicPopup','$timeout',function($scope,$rootScope,$state, $stateParams, myFactory,$ionicPopup,$timeout){
    $scope.goodsImg = ['./img/23.jpg'];
    $scope.showDetail = function () {
        $scope.tipDetail = true;
    };
    $scope.hiddenDetail = function () {
        $scope.tipDetail = false;
    };
    $scope.count = 1;
    $scope.down = function () {
        if($scope.count <= 1)return;
        $scope.count =  $scope.count - 1;
    };
    $scope.up = function () {
        $scope.count = $scope.count + 1;
    }

    $scope.goBack = function () {
        window.history.back();
    };
    $scope.homeclick = function () {
        $state.go('botton.home');
    };

    $scope.save = function () {
        var myPopup = $ionicPopup.show({
            title: '收藏成功',
            scope: $scope,
        });
        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
        $timeout(function() {
            myPopup.close(); // 3秒后关闭弹窗
        }, 3000);
    };


    $scope.addcarclick = function () {
        console.log('加入购物车');
        $scope.tipDetail = false;
        var myPopup = $ionicPopup.show({
            title: '已加入到购物车,请去购物车结算',
            scope: $scope,
        });
        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
        $timeout(function() {
            myPopup.close(); // 3秒后关闭弹窗
        }, 3000);
    };


    $scope.message = function () {
        var myPopup = $ionicPopup.show({
            title: '正在拨打电话',
            scope: $scope,
        });
        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });
        $timeout(function() {
            myPopup.close(); // 3秒后关闭弹窗
        }, 3000);
    };

    $scope.buy = function () {
        $state.go('money');
    };


}]);