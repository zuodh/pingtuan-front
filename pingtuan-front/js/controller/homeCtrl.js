app.controller("homeCtrl", ['$scope', 'myFactory', '$state', '$rootScope', function ($scope, myFactory, $state, $rootScope) {

    $scope.views = {
        slideData: [
            {
                img: './img/01.jpg'
            },
            {
                img: './img/02.jpg'
            },
            {
                img: './img/03.jpg'
            }
        ],
        listData: [], // �б�����
        /*
         * name ��ȡ�����б�
         * */
        getHomeList: function () {
            myFactory.getHomeList().then(function(data){
                $scope.lists=data;
            },function(err){
                console.log(err)
            })
        },
        /*
         * name ��ȡ�����б�
         * @params {obj} �б�����
         * */
        goDetail: function (item) {
            $state.go('botton.detail'); // ��ת detail ·��
            // $rootScope.detail = item;
            myFactory.storage.setVal('detail', item); // ��������
        }
    };

    $scope.goToShopping = function () {
        $state.go('botton.shopping');
    };
    $scope.goToUserInfo = function () {
        $state.go('botton.userInfo');
    };
    $scope.gotoAllGoods = function () {
        $state.go('botton.allGoods');
    };


    $scope.bottomImg = './img/12.png';
    $scope.bottomImgSecond = './img/14.png';
    $scope.bottomImgThird = './img/17.png';
    $scope.bottomImgFour = './img/19.png';
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


        $state.go('botton.newproduct');

    };
    $scope.bottomClickThird = function () {

        $scope.bottomImgThird = './img/16.png';
        $scope.bottomImg = './img/13.png';
        $scope.bottomImgSecond = './img/14.png';
        $scope.bottomImgFour = './img/19.png';

    };
    $scope.bottomClickFour = function () {

        $scope.bottomImg = './img/13.png';
        $scope.bottomImgSecond = './img/14.png';
        $scope.bottomImgThird = './img/17.png';
        $scope.bottomImgFour = './img/18.png';
    };
    $scope.views.getHomeList(); // ִ�з���

}]);