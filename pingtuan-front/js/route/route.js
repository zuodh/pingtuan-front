'use strict';


// Declare app level module which depends on filters, and services
app.config(['myProviderProvider',
    function (myProviderProvider) {
        myProviderProvider.module([]);
        myProviderProvider
            .otherwise('/home')
            .state({
                name: 'home',
                url: '/home',
                templateUrl: 'template/home.html',
                controller: "homeCtrl",
                deps: {
                    names: 'homeCtrl',
                    files: [
                        'js/controller/homeCtrl.js'
                    ]
                }
            })
            .state({
                name: 'detail',
                url: '/detail?Name&City&Country',
                templateUrl: 'template/detail.html',
                controller: "detailCtrl",
                deps: {
                    names: 'detail',
                    files: [
                        'js/controller/detailCtrl.js'
                    ]
                }
            });
}]).run(function($ionicPlatform) {
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
