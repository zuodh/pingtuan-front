/**
 * Created by Administrator on 2017/6/30.
 */
app.provider('myProvider', ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    this.module = function (modules) {
        $ocLazyLoadProvider.config({ modules: modules });
    }
    this.otherwise = function (url) {
        $urlRouterProvider.otherwise(url);
        return this;
    }

    this.state = function (stateObj) {
        var deps = [];
        if (stateObj.deps) {
            deps = stateObj.deps.names;
            if (!deps)
                deps = [];

            if (stateObj.deps.files && stateObj.deps.files.length)
                deps.push(
                    {
                        files: stateObj.deps.files
                    });
        }
        $stateProvider.state(stateObj.name, {
            url: stateObj.url,
            templateUrl: stateObj.templateUrl || 'views/' + stateObj.name + '.html',
            controller: stateObj.controller,
            controllerAs:stateObj.name,
            resolve: {
                loadFiles: ['$injector','$ocLazyLoad', function ($injector,$ocLazyLoad) {
                    return $ocLazyLoad.load(deps);
                }]
            }
        })
        return this;
    }
    this.$get = function () {
        return null;
    }
}]);