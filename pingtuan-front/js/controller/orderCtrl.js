app.controller("orderCtrl",['$scope', '$rootScope', '$stateParams', 'myFactory','$ionicSlideBoxDelegate','$timeout',
    function($scope, $rootScope, $stateParams, myFactory,$ionicSlideBoxDelegate,$timeout){
    $scope.allPage = ['待付款','待成团','待发货','待收货','待评价'];
        $scope.selectedOne = '全部';
    function SimplePubSub() {
        var events = {};
        return {
            on: function(names, handler) {
                names.split(' ').forEach(function(name) {
                    if (!events[name]) {
                        events[name] = [];
                    }
                    events[name].push(handler);
                });
                return this;
            },
            trigger: function(name, args) {
                angular.forEach(events[name], function(handler) {
                    handler.call(null, args);
                });
                return this;
            }
        };
    };
    $scope.events = new SimplePubSub();

    $scope.slideHasChanged = function(index){
        $scope.events.trigger("slideChange", {"index" : index});
        $timeout(function(){if($scope.onSlideMove) $scope.onSlideMove({"index" : eval(index)});},100);
    };

    $scope.goBack = function () {
        window.history.back();
    };


    $scope.onSlideMove = function(data){
        if(data.index == 0){
            $scope.selectedOne = '全部';
        }else{
            $scope.selectedOne = $scope.allPage[data.index-1];
        }
        $ionicSlideBoxDelegate.slide(data.index);
    }

}]);