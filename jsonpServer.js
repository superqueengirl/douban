/**
 * Created by Administrator on 2016/10/24.
 */
(function(){
    var doubanappService=angular.module('dobanappService',[]);
    doubanappService.service('jsonpService',['$window',function($window){
        this.jsonp=function(url,params,fn){
            //拼接参数
            jqueryString='?';
            for(key in params){
                jqueryString+=key+'='+params[key]+'&';
            }
            //生成函数名称
            var funname='jsonp'+new Date().getTime();
            jqueryString+='callback'+'='+funname;
            //挂载函数
            $window[funname]=function(data){
                fn(data);
            }
            //添加script标签添加数据
            var script=$window.document.createElement('script');
            script.src=url+jqueryString;
            $window.document.body.appendChild(script);
        }
    }]);
})();