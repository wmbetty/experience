/**
 * Created by Lenovo on 2016/12/5.
 */
$(document).on('click','.nav-tabs li',function(){
    $(this).addClass('active');
    $(this).find('a').addClass('active');

    $(this).siblings().removeClass('active');
    $(this).siblings().find('a').addClass('active');

});


//右侧高度等于左侧高度
$('.main-intro-cont').height($('.siderbar').height());

//        显示活动掠影
$('.acti-li').on('click', function () {
    $('#cpanyCont').hide();
    $('#actiCont').show();
    $('#cpanyCont').hide();
    $('#yquShe').hide();

});

//        显示企业中心
$('.cpany-center').on('click', function () {
    $('#cpanyCont').hide();
    $('#cpanyCont').show();
    $('#actiCont').hide();
    $('#yquShe').hide();
});

//        显示园区设施
$('.yshe').on('click', function () {
    $('#cpanyCont').hide();
    $('#cpanyCont').hide();
    $('#actiCont').hide();
    $('#yquShe').show();
});
