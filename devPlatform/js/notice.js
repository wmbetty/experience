/**
 * Created by Administrator on 2016年4月12日 0012.
 */
$(function(){
    $('.not_ul li').each(function(){
        $(this).click(function(){
            $(this).addClass("nl_active").siblings().removeClass("nl_active");
            $(this).find(".arrow_icon").addClass("a_up");
            $(this).siblings().find(".arrow_icon").removeClass("a_up")
        });
    });

    $(".fist_no").click(function(){
        $('.n_conts').slideToggle();
        $(this).find(".arrow_icon").removeClass("up");
    });
});