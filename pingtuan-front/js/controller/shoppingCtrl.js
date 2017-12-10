app.controller("shoppingCtrl",['$scope', '$rootScope', '$stateParams', 'myFactory',function($scope, $rootScope, $stateParams, myFactory){
    $scope.goBack = function () {
        window.history.back();
    };
    $scope.bottomImg = './img/13.png';
    $scope.bottomImgSecond = './img/14.png';
    $scope.bottomImgThird = './img/17.png';
    $scope.bottomImgFour = './img/18.png';
    $scope.bottomClick = function () {
        $scope.bottomImg = './img/12.png';
        $scope.bottomImgSecond = './img/14.png';
        $scope.bottomImgThird = './img/17.png';
        $scope.bottomImgFour = './img/19.png';

    };
    $scope.bottomClickSecond = function () {
        $scope.bottomImgSecond = './img/15.png';
        $scope.bottomImg = './img/13.png';
        $scope.bottomImgThird = './img/17.png';
        $scope.bottomImgFour = './img/19.png';

    };
    $scope.bottomClickThird = function () {

        $scope.bottomImgThird = './img/16.png';
        $scope.bottomImg = './img/13.png';
        $scope.bottomImgSecond = './img/14.png';
        $scope.bottomImgFour = './img/19.png';

    };
    $scope.bottomClickFour = function () {

        $scope.bottomImgFour = './img/18.png'
        $scope.bottomImg = './img/13.png';
        $scope.bottomImgSecond = './img/14.png';
        $scope.bottomImgThird = './img/17.png';
    };

}]);