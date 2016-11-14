/**
 * Created by Lenovo on 2016/11/11.
 */

    $('.main-cont').hide();

//js预加载一堆图片
var img_arr = [
    "images/sign_in/sign_bg.png",
    "images/sign_in/first_sign.png",
    "images/sign_in/second_sign.png",
    "images/sign_in/third_sign.png",
    "images/sign_in/forth_sign.png",
    "images/sign_in/fifth_sign.png",
    "images/sign_in/sixth_sign.png",
    "images/sign_in/seventh_sign.png"
];
var img_objs = new Array();
var loaded_image_count = 0;

$(function(){
    function load_img(){
        for(var i = 0;i<img_arr.length;i++){
            img_objs[i] = new Image();
            img_objs[i].src = img_arr[i];
            img_objs[i].onload = function () {
                loaded_image_count ++;
                if (loaded_image_count == img_arr.length) {
                    // show page, before this loading...
                    $('.loading').show(); //页面loading
                    $('.loading_cont').show();
                }
            }

        }
    }

    load_img();

});

setTimeout(function(){
    $('.loading').hide(); //
    $('.loading_cont').hide();
    $('.main-cont').show(); //show page

    var bd_h = $(window).height();
    $('.sign-body').height(bd_h); //body高度等于窗口高度

// 签到石抖动动画
    var s_w = $('.s-stone').width(); //签到石宽度
    var shake_timer = setInterval(function(){
        $('.s-stone').animate({
            width: s_w + s_w*0.2,
            opacity:0.8
        }, 100 ).animate({
            width: s_w,
            opacity:0.9
        }, 100 ).animate({
            width: s_w + s_w*0.2,
            opacity:1
        }, 100 )

    },1000);

    setTimeout(function(){
        clearInterval(shake_timer); //清除动画的定时器
        $('.s-stone').width(s_w)
    },4000);

},1800);

// 签到石点击
var sign_i = 0; //是否已签到
$('.s-stone').on('touchstart',function(){
    sign_i ++;
    $(this).attr('src','images/sign_in/had_sign.png'); //更换成已签到图片

    if(sign_i > 1){ //签到一次就不再签到
        $('.s-mask').show();
        $('.had-sign-info').show();
        setTimeout(function () {
            $('.s-mask').hide();
            $('.had-sign-info').hide();
        },1500);
        return false;
    }else {
        //签到后改变页面状态
        $('body').css('background',' url("'+img_objs[1].src+'") no-repeat'); //签到一次更换背景图片
        $('body').css('background-size','100% 100%'); //背景大小，必选

        $('.talk-cont').css('background',' url("images/sign_in/sign_once.png") no-repeat'); //签到一次乌鸦说话内容改变
        $('.talk-cont').css('background-size','100%'); //背景大小，必选

        $('.bird-img').attr('src','images/sign_in/open_raven.png'); //乌鸦图片更换

        setTimeout(function(){
            $('.bird-img').attr('src','images/sign_in/close_raven.png'); //乌鸦图片还原
        },3000);

        var credits =  parseInt($('.sign_credits').text());
        $('.sign_credits').text(credits+1); //签到积分

        var sign_day = parseInt($('.sign-day').text());
        $('.sign-day').text(sign_day+1); //签到天数
        //
    }

});

$('.bird-container').on('touchstart',function(){
    $('.bird-img').attr('src','images/sign_in/open_raven.png'); //乌鸦图片更换
    setTimeout(function(){
        $('.bird-img').attr('src','images/sign_in/close_raven.png'); //乌鸦图片还原
    },1500);
});

