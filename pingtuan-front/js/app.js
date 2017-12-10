// 创建一个叫myApp的应用，后边的数组什么意思？就是说这个应用依赖注入“ionic”
// 等会会用到ionic里面的组件功能等等
var app = angular.module('myApp', ['ionic', 'myApp.services', 'ngAnimate', 'ui.router', 'ngSanitize','ionic-citypicker','myApp.http']);

    app.config(function ($stateProvider, $urlRouterProvider) {
        // 凡是你输入的路由不正确或者是错的，都会给你跳转到home页
        // $urlRouterProvider.when('', '/home');
        $urlRouterProvider.otherwise('/botton/home');
        $stateProvider.state('botton',{
            url:'/botton',
            templateUrl:'template/botton.html',
            controller: 'bottonCtrl'
        })
            .state('botton.home', { // 这个是路由名称
                url: '/home',  // 这个是url
                templateUrl: 'template/home.html', // 这个是模板位置
                controller: 'homeCtrl' // 这个是对应模板的controller名称！记住是名称不是位置
            })

            .state('botton.newproduct', { // 这个是路由名称
                url: '/newproduct',  // 这个是url
                templateUrl: 'template/NewProduct.html', // 这个是模板位置
                controller: 'NewProductCtrl' // 这个是对应模板的controller名称！记住是名称不是位置
            })

            .state('botton.car', { // 这个是路由名称
                url: '/car',  // 这个是url
                templateUrl: 'template/carlist.html', // 这个是模板位置
                controller: 'CarCtrl' // 这个是对应模板的controller名称！记住是名称不是位置
            })
            .state('botton.shopping', { // 这个是路由名称
                url: '/shopping',  // 这个是url
                templateUrl: 'template/shopping.html', // 这个是模板位置
                controller: 'shoppingCtrl' // 这个是对应模板的controller名称！记住是名称不是位置
            })
            .state('botton.allGoods', { // 这个是路由名称
                url: '/allGoods',  // 这个是url
                templateUrl: 'template/allGoods.html', // 这个是模板位置
                controller: 'allGoodsCtrl' // 这个是对应模板的controller名称！记住是名称不是位置
            })
            .state('botton.userInfo', { // 这个是路由名称
                url: '/userInfo',  // 这个是url
                templateUrl: 'template/userInfo.html', // 这个是模板位置
                controller: 'userInfoCtrl' // 这个是对应模板的controller名称！记住是名称不是位置
            })
            .state('botton.login', { // 这个是路由名称
                url: '/login',  // 这个是url
                templateUrl: 'template/login.html', // 这个是模板位置
                controller: 'loginCtrl' // 这个是对应模板的controller名称！记住是名称不是位置
            })
            .state('botton.order', { // 这个是路由名称
                url: '/order',  // 这个是url
                templateUrl: 'template/order.html', // 这个是模板位置
                controller: 'orderCtrl' // 这个是对应模板的controller名称！记住是名称不是位置
            })
            .state('goodDetail', { // 这个是路由名称
                url: '/goodDetail',  // 这个是url
                templateUrl: 'template/goodDetail.html', // 这个是模板位置
                controller: 'goodDetailCtrl' // 这个是对应模板的controller名称！记住是名称不是位置
            })
            .state('money', { // 这个是路由名称
                url: '/money',  // 这个是url
                templateUrl: 'template/money.html', // 这个是模板位置
                controller: 'moneyCtrl' // 这个是对应模板的controller名称！记住是名称不是位置
            })
            .state('botton.detail', {
                url: '/detail?Name&City&Country',
                templateUrl: 'template/detail.html',
                controller: 'detailCtrl' // 这个是对应模板的controller名称！记住是名称不是位置
            })
    })
        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs).
                // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
                // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
                // useful especially with forms, though we would prefer giving the user a little more room
                // to interact with the app.
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    // Set the statusbar to use the default style, tweak this to
                    // remove the status bar on iOS or change it to use white instead of dark colors.
                    StatusBar.styleDefault();
                }
            });
        });
