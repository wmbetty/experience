/**
 * Created by Lenovo on 2016/12/26.
 */
function autoScroll(obj){
    $(obj).find("ul").animate({
        marginTop : "-40px"
    },500,function(){
        $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
    })
}
$(function(){
    setInterval('autoScroll(".notice-box")',2000);

}) ;