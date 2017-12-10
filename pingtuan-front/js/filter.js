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
        .filter('toUpperCaseText', function() {
            return function(x) {
                if (x) { // 记得加判断免得初始化没值时候报错
                    return x.toUpperCase();
                }
            }
        });

})(app, angular);