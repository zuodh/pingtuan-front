
angular.module('myApp.http', [])
    .factory('myHttp', ['$http', '$q', function ($http, $q) {
        return {
            send: function (option) {
                var that = this;
                if (!option) {
                    return "The option is error!";
                }

                var opt = {
                    method: option.type || "post",
                    url: option.url,
                    timeout: 20000, //10秒后请求超时
                    data: option.data,
                    dataType: option.dataType || "json",
                    contextType: option.contextType || "application/json"
                };
                var retMsg = $q.defer();
                $http(opt).success(function (rep) {
                    console.info("Ajax Success Response:" + JSON.stringify(rep));
                    if (rep) {
                        switch (rep.code || rep.code) {
                            /*返回-1时，登录超时，重新登录*/
                            case '-1':
                                that.reLogin(option);
                                return;
                        }
                        if (rep.code == 200) {
                            retMsg.resolve(rep.data);

                        } else {
                            retMsg.reject(rep);
                        }
                    } else {
                        retMsg.reject(rep);
                        console.log("系统繁忙,请稍后重试!")
                    }


                }).error(function (rep) {
                    retMsg.reject(rep);
                    console.info("请求异常，错误等")
                });
                return retMsg.promise;
            },
        }
    }]);
