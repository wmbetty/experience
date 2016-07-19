/**
 * Created by Administrator on 2016年4月8日 0008.
 */
$(function(){
    $(".tab_nav li").each(function(){
        $(this).click(function(){
            var index = $(this).index();
            $(this).addClass("l_actived").siblings().removeClass("l_actived");
            $('.tab_cont').eq(index).show().siblings('.tab_cont').hide();
        });
    });

});