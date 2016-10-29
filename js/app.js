/**
 * Created by Administrator on 2016/10/23.
 */
(function(){
    //创建模块doubanapp
    var doubanapp=angular.module('doubanapp',['ngRoute','doubanappHot','doubanappWill','doubanappTop']);
    //配置路由
    doubanapp.config(['$routeProvider',function($routeProvider){
        $routeProvider.
            when('/hot/:page?',{
            templateUrl:'hotingmovie/hoting.html',
            controller:'hotCtrl'
        }).
            when('/will',{
            templateUrl:'willmovie/will.html',
            controller:'willCtrl'
        }).
            when('/top',{
            templateUrl:'topmovie/top.html',
            controller:'topCtrl'
        }).
            otherwise({
            redirectTo:'/hot/1'
        })
    }]);
})();