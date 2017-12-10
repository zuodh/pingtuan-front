/**
 * @file xxx
 * @author <liping.ye@midea.com.cn>
 * @copyright Midea Co.Ltd 1968-2015
 * @license Released under the Commercial license.
 * @since 1.0.1
 * @version 1.0.2 - 2016/6/13
 */
(function(app, angular) {
    app
        .directives('twToggle', function() {
            return {
                restrict: 'A',
                scope: true,
                controller: function($scope) {
                    $scope.folded = false;
                    $scope.toggle = function() {
                        $scope.folded = !$scope.folded;
                    };
                }
            };
        });
})(app, angular);