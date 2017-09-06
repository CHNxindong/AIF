var app = angular.module('aif',['ngRoute',$scope]);

app.config(['$routeProvider',function($routeProvider,$scope) {
    $scope.a="1";
    $routeProvider.when('/index',{
        templateUrl:'views/index.html',
        controller:'indexCtrl'
    })
        .when('/project',{
            templateUrl:'views/category.html',
            controller:'shehuiCtrl'
        })
        .when('/guonei',{
            templateUrl:'views/guonei.html',
            controller:'guoneiCtrl'
        })
        .when('/guoji',{
            templateUrl:'views/guoji.html',
            controller:'guojiCtrl'
        })
        .when('/yule',{
            templateUrl:'views/yule.html',
            controller:'yuleCtrl'
        })
        .when('/tiyu',{
            templateUrl:'views/tiyu.html',
            controller:'tiyuCtrl'
        })
        .when('/junshi',{
            templateUrl:'views/junshi.html',
            controller:'junshiCtrl'
        })
        .when('/keji',{
            templateUrl:'views/keji.html',
            controller:'kejiCtrl'
        })
        .when('/caijing',{
            templateUrl:'views/caijing.html',
            controller:'caijingCtrl'
        })
        .when('/shishang',{
            templateUrl:'views/shishang.html',
            controller:'shishangCtrl'
        })
        .otherwise({
            redirectTo:'/index',
        })
}])

app.run(function(){
    (function(doc, win) {
        var docEl = doc.documentElement,
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if (clientWidth >= 740) {
                    clientWidth = 740;
                }
                if (clientWidth <= 320) {
                    clientWidth = 320;
                }
                docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
            };
        if (!doc.addEventListener) return;
        win.addEventListener('resize', recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
})


app.controller('indexCtrl',function($scope,$http){
    //请求新闻数据
    $scope.loading = true;
    $http.jsonp('news.php',{
        params:{
            type: 'top',
            callback:'JSON_CALLBACK'

        }
    }).success(function(data){
        $scope.loading = false;
        $scope.news = data.result.data;
        // console.log($scope.news);
    })
})
//做分类点击
app.controller('shehuiCtrl',function($scope,$http,$routeParams){
    $scope.loading = true;
    $http.jsonp('news.php',{
        params:{
            type: 'shehui',
            callback:'JSON_CALLBACK',

        }
    }).success(function(data){
        $scope.loading = false;
        // console.log(data);
        $scope.news = data.result.data;
        // console.log($scope.news);
    })
})

app.controller('guoneiCtrl',function($scope,$http,$routeParams){
    $scope.loading = true;
    $http.jsonp('news.php',{
        params:{
            type: 'guonei',
            callback:'JSON_CALLBACK',

        }
    }).success(function(data){
        $scope.loading = false;
        $scope.news = data.result.data;

    })
})

app.controller('guojiCtrl',function($scope,$http,$routeParams){
    $scope.loading = true;
    $http.jsonp('news.php',{
        params:{
            type: 'guoji',
            callback:'JSON_CALLBACK',

        }
    }).success(function(data){
        $scope.loading = false;
        $scope.news = data.result.data;

    })
})

app.controller('yuleCtrl',function($scope,$http,$routeParams){
    $scope.loading = true;
    $http.jsonp('news.php',{
        params:{
            type: 'yule',
            callback:'JSON_CALLBACK',

        }
    }).success(function(data){
        $scope.loading = false;
        $scope.news = data.result.data;

    })
})

app.controller('tiyuCtrl',function($scope,$http,$routeParams){
    $scope.loading = true;
    $http.jsonp('news.php',{
        params:{
            type: 'tiyu',
            callback:'JSON_CALLBACK',

        }
    }).success(function(data){
        $scope.loading = false;
        $scope.news = data.result.data;

    })
})

app.controller('junshiCtrl',function($scope,$http,$routeParams){
    $scope.loading = true;
    $http.jsonp('news.php',{
        params:{
            type: 'junshi',
            callback:'JSON_CALLBACK',

        }
    }).success(function(data){
        $scope.loading = false;
        $scope.news = data.result.data;

    })
})

app.controller('kejiCtrl',function($scope,$http,$routeParams){
    $scope.loading = true;
    $http.jsonp('news.php',{
        params:{
            type: 'keji',
            callback:'JSON_CALLBACK',

        }
    }).success(function(data){
        $scope.loading = false;
        $scope.news = data.result.data;

    })
})

app.controller('caijingCtrl',function($scope,$http,$routeParams){
    $scope.loading = true;
    $http.jsonp('news.php',{
        params:{
            type: 'caijing',
            callback:'JSON_CALLBACK',

        }
    }).success(function(data){
        $scope.loading = false;
        $scope.news = data.result.data;

    })
})

app.controller('shishangCtrl',function($scope,$http,$routeParams){
    $scope.loading = true;
    $http.jsonp('news.php',{
        params:{
            type: 'shishang',
            callback:'JSON_CALLBACK',

        }
    }).success(function(data){
        $scope.loading = false;
        $scope.news = data.result.data;

    })
})

app.directive('load',function(){
    return{
        templateUrl: 'directive/load.html'
    }

})
