/**
 * Created by Lenovo on 2016/4/13.
 */
$(function(){
    $(".pt.web_name").bind("click keyup",function(){
        $(".err_info.mail").show();
    });

    $(".pt.pwd").bind("click keyup",function(){
        $(".err_info.epwd").show();
    });

    $(".next_btn.first").click(function(){
        $(".main_c.first").hide();
        $(".main_c.second").show();
    });

    $(".pt.p_no").bind("click keyup",function(){
        $(".err_info.phone_err").show();
        var reg= /^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;
        if(reg.test($(this).val())){
            $(".err_info.phone_err").hide();
        }else {
            $(".err_info.phone_err").show();
        }
    });

});