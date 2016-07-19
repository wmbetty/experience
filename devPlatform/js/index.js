/**
 * Created by Lenovo on 2016/4/8.
 */
$(function(){

    $(".login_btn").click(function(){
        //组装登录框
        var html="";
        var form="<div class='login_box'><div><div class='login_title'><p>登录</p><span class='close_icon'></span></div>";
        var formp="<form action='' class='login_form'><div class='put_box'><div class='put_b'><span>邮箱</span><input class='put' type='text' name='mail' placeholder='请填写登录邮箱'></div>"+
            "<div class='put_b'><span>密码</span><input class='put' type='password' name='pass' placeholder='请填写密码'></div></div>"+"<div class='r_box'><input type='checkbox'>记住账号"
             +"<a href='#' class='forget_btn'>忘记密码</a></div>"+"<div class='btn_box'><a href='#'>登录</a><a href='#' class='reg_btn'>注册</a></div></form>"
        var formf="</div></div>";
        html+=form+=formp+=formf;
        $("body").append(html);
        $(".login_mask").show();

        $(".close_icon").click(function(){
            $(".login_mask").hide();
            $(".login_box").remove();
        });

    });



});