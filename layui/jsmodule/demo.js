/**
 * Created by Lenovo on 2016/12/8.
 */
/*
 Demo1.js
 使用Layui的form和upload组件
 */
layui.use(['form', 'upload'], function(){  //如果只加载一个组件，可以不填数组。如：layui.use('form')
    var form = layui.form(); //获取form组件
    var upload = layui.uplaod; //获取upload组件

    //监听提交按钮
    form.on('submit(test)', function(data){
        console.log(data);
    });

    //实例化一个上传控件
    upload({
        url: 'order_data.js'
        ,success: function(data){
            console.log(data);
        }
    })
});