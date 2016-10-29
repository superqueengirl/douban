/**
 * Created by Administrator on 2016/10/23.
 */
(function(){
    //创建模块
    var doubanappHot=angular.module('doubanappHot',['dobanappService']);
    doubanappHot.controller('hotCtrl',['$scope','$http','jsonpService','$routeParams','$route',function($scope,$http,jsonpService,$routeParams,$route){
        $scope.subjects=[];
        $scope.total='';
        //$http.get('hotdata.json').then(function(success){
        //    //console.log(success);
        //    $scope.subjects=success.data.subjects;
        //},function(error){
        //    console.log('出错了');
        //});


    ////存在跨域的问题
    //    $http.jsonp('https://api.douban.com/v2/movie/in_theaters').then(function(success){
    //        //console.log(success);
    //        $scope.subjects=success.data.subjects;
    //    },function(error){
    //        console.log('出错了');
    //    });

        //分页
        var count=8;
        var currentPage=parseInt($routeParams.page||1);
        $scope.currentPage=currentPage;
        var start=parseInt((currentPage-1)*count);






        jsonpService.jsonp('https://api.douban.com/v2/movie/in_theaters',{count:count,start:start},function(data){
            $scope.subjects=data.subjects;
            $scope.total=data.total;
            $scope.totalPage=Math.ceil($scope.total/count);

            $scope.$apply();
            $scope.hundlePage=function(page){
                if(page<1||page>$scope.totalPage){
                    return;
                }
                $route.updateParams({page:page});
            };
            console.log(data);
        });

    }]);
})();