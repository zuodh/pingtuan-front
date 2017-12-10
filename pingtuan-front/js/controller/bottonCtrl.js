app.controller("bottonCtrl",['$scope', '$rootScope', '$stateParams', 'myFactory','$timeout','$ionicSlideBoxDelegate','$state',function($scope, $rootScope, $stateParams, myFactory,$timeout,$ionicSlideBoxDelegate,$state){
    $scope.bottomImg = './img/12.png';
    $scope.bottomImgSecond = './img/14.png';
    $scope.bottomImgThird = './img/17.png';
    $scope.bottomImgFour = './img/19.png';
    $scope.css1={'color': 'black','font-size': '12px','margin-top': '-10px'};
    $scope.css2={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
    $scope.css3={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
    $scope.css4={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};

    $scope.bottomClick = function () {
        $scope.bottomImg = './img/12.png';
        $scope.bottomImgSecond = './img/14.png';
        $scope.bottomImgThird = './img/17.png';
        $scope.bottomImgFour = './img/19.png';



    };

    $scope.gotoHome = function () {
        $scope.bottomImg = './img/12.png';
        $scope.bottomImgSecond = './img/14.png';
        $scope.bottomImgThird = './img/17.png';
        $scope.bottomImgFour = './img/19.png';
        $state.go('botton.home');

        $scope.css1={'color': 'black','font-size': '12px','margin-top': '-10px'};
        $scope.css2={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
        $scope.css3={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
        $scope.css4={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
    };

    $scope.goToUserInfo = function () {
        $state.go('botton.userInfo');

        $scope.css1={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
        $scope.css2={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
        $scope.css3={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
        $scope.css4={'color': 'black','font-size': '12px','margin-top': '-10px'};
    };
    $scope.bottomClickSecond = function () {
        $scope.bottomImgSecond = './img/15.png';
        $scope.bottomImg = './img/13.png';
        $scope.bottomImgThird = './img/17.png';
        $scope.bottomImgFour = './img/19.png';


        $scope.css1={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
        $scope.css2={'color': 'black','font-size': '12px','margin-top': '-10px'};
        $scope.css3={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
        $scope.css4={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};

        $state.go('botton.newproduct');

    };
    $scope.bottomClickThird = function () {

        $scope.bottomImgThird = './img/16.png';
        $scope.bottomImg = './img/13.png';
        $scope.bottomImgSecond = './img/14.png';
        $scope.bottomImgFour = './img/19.png';


        $scope.css1={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
        $scope.css2={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
        $scope.css3={'color': 'black','font-size': '12px','margin-top': '-10px'};
        $scope.css4={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
        $state.go('botton.car');

    };
    $scope.bottomClickFour = function () {

        $scope.bottomImg = './img/13.png';
        $scope.bottomImgSecond = './img/14.png';
        $scope.bottomImgThird = './img/17.png';
        $scope.bottomImgFour = './img/18.png';

        $scope.css1={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
        $scope.css2={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
        $scope.css3={'color': 'darkgray','font-size': '12px','margin-top': '-10px'};
        $scope.css4={'color': 'black','font-size': '12px','margin-top': '-10px'};

    };
}]);