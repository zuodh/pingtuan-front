app.controller("detailCtrl",['$scope', '$rootScope', '$stateParams', 'myFactory','selectCitySvc',function($scope, $rootScope, $stateParams, myFactory,selectCitySvc){
    console.log($stateParams);
    $scope.views = {
        detail: myFactory.storage.getVal('detail'), // ��������

        /*detail: {
         Name: $stateParams.Name,
         City: $stateParams.City,
         Country: $stateParams.City
         },*/
        //detail: $rootScope.detail,
        /*
         * name ����
         * */
        goBack: function() {
            window.history.back();
        },
        age: 20 // ����
    };

    var a = selectCitySvc;

}]);