/**
 * @file xxx
 * @author <liping.ye@midea.com.cn>
 * @copyright Midea Co.Ltd 1968-2015
 * @license Released under the Commercial license.
 * @since 1.0.1
 * @version 1.0.2 - 2016/6/13
 */

angular.module('myApp.services', [])
    .factory('myFactory', ['$http', '$q', 'myHttp', function ($http, $q, myHttp) {
        var factory = {};
        var storage = {};

        factory.getHomeList = function () {
            console.log(window.location.host)

            return myHttp.send({
                //url:'http://'+ window.location.host+'/ngIonicDemo/js/data/getList.json',
                url:'http://127.0.0.1:8088/home/getProductCategory',
                type: "GET",
            });

        };
        factory.storage = {
            /*
             * 获取值
             * @params name 保存数据的名称
             * @params value 需要保存数据的值
             * */
            setVal: function (name, value) {
                if (value && name) {
                    storage[name] = value;
                }
            },
            /*
             * 获取值
             * @params name 保存数据的名称
             * @params value 需要保存数据的值
             * */
            getVal: function (name) {
                if (!storage[name] || !name) {
                    return;
                }
                return storage[name];
            },
            /*
             * 删除值
             * @params name 保存数据的名称
             * @params value 需要保存数据的值
             * */
            removeVal: function (name) {
                if (name && storage[name]) {
                    delete storage[name];
                }
            }
        };

        return factory;
    }]);

