app.controller("detailCtrl",['$scope', '$rootScope', '$stateParams', 'myFactory','selectCitySvc',function($scope, $rootScope, $stateParams, myFactory,selectCitySvc){
    console.log($stateParams);
    $scope.views = {
        detail: myFactory.storage.getVal('detail'), // 保存数据

        /*detail: {
         Name: $stateParams.Name,
         City: $stateParams.City,
         Country: $stateParams.City
         },*/
        //detail: $rootScope.detail,
        /*
         * name 返回
         * */
        goBack: function() {
            window.history.back();
        },
        age: 20 // 年龄
    };

    var a = selectCitySvc;

}]);