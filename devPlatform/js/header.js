/**
 * Created by Administrator on 2016年4月8日 0008.
 */
$(function(){
    $(".o_nav ul li").each(function(){
        $(this).click(function(){
            $(this).find("a").addClass("n_active");
            $(this).siblings().find("a").removeClass("n_active");
        });
    });
});