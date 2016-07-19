/**
 * Created by Lenovo on 2016/4/9.
 */
$(function(){
   $(".silder_cont ul li").each(function(){
       $(this).click(function(){
           $(this).find(".info_title").addClass("actived");
           $(this).siblings().find(".info_title").removeClass("actived");
       });
   });

    $(".mobile_cont li").each(function(){
        $(this).click(function(){
            $(this).addClass("actived");
            $(this).siblings().removeClass("actived");
        });
    });

    $(".guide_cont li").each(function(){
        $(this).click(function(){
            $(this).addClass("actived");
            $(this).siblings().removeClass("actived");
        });
    });

    $(".info_title.mobile_appli").click(function(){
        $(this).toggleClass("m_actived");
        $(".mobile_cont").slideToggle(600);
    });

    $(".guide_infos").click(function(){
        $(".guide_cont").slideToggle(600);
    });

    $(".h_cont a").each(function(){
        $(this).click(function(){
            $(this).addClass("del_active").siblings().removeClass("del_active");
        });
    });

    $(".img_recog").click(function(){
        $(".main.img_main").show().siblings(".main").hide();
    });

    $(".dev_res").click(function(){
        $(".main.dev_main").show().siblings(".main").hide();
    });

});