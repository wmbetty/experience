/**
 * Created by Lenovo on 2016/4/14.
 */
$(function(){
    $(".acct li").each(function(){
        $(this).click(function(){

            var index = $(this).index();
            $(this).addClass("acct_l_actived").siblings().removeClass("acct_l_actived");
            $('.info_main').eq(index).show().siblings('.info_main').hide();
        });
    });

    $(".current_pwd").bind("click keyup",function(){
        $(".pwd_err.len_err").show();
        if($(this).val().length>=6){
            $(".pwd_err.len_err").hide();
        }
    });

    $(".new_pwd").bind("click keyup",function(){
        $(".pwd_err.new_err").show();
        if($(this).val().length>=6){
            $(".pwd_err.new_err").hide();
        }
    });

    $(".again_put").bind("keyup",function(){
        if($(this).val()!= $(".new_pwd").val()){
            $(".pwd_err.err_again").show();
        }else {
            $(".pwd_err.err_again").hide();
        }
    });

});