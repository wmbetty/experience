/**
 * Created by Lenovo on 2016/12/8.
 */
/**
 *
 项目JS主入口
 以依赖Layui的layer和form模块为例

 **/
layui.define(['layer', 'form'], function(exports){
    var layer = layui.layer
        ,form = layui.form();

    layer.msg('Hello World');

    exports('index', {});
});