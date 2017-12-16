app.controller("allGoodsCtrl",['$scope', '$rootScope', '$stateParams', 'myFactory','$timeout','$ionicSlideBoxDelegate','$state',function($scope, $rootScope, $stateParams, myFactory,$timeout,$ionicSlideBoxDelegate,$state){
        $scope.selectedOne = '全部';
        $scope.allPage = ['进口水果','时令水果','新鲜蔬菜','精选肉类','鸡蛋','鸭蛋','鹅蛋','鸟蛋'];
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

        $scope.gotoGoodDetail = function () {
                $state.go('goodDetail');
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