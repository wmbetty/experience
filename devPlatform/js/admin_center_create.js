/**
 * Created by Lenovo on 2016/4/11.
 */
$(function(){
   $(".pt.web_name").bind("click keyup",function(){
       $(".put_infos.err_info").show();
       if($(this).val().length>0){
           $(".put_infos.err_info").hide();
       }else {
           $(".put_infos.err_info").show();
       }
   });

    $(".website_info").bind("click keyup",function(){
        $(".put_infos.err_a_info").show();
        if($(this).val().length>0){
            $(".put_infos.err_a_info").hide();
        }else {
            $(".put_infos.err_a_info").show();
        }
    });

    $(".next_btn").click(function(){
        if($(".pt.web_name").val()=="" && $(".website_info").val()==""){
            $(".put_infos.err_info").show();
            $(".put_infos.err_a_info").show();
        }else if($(".website_info").val()==""){
            $(".put_infos.err_a_info").show();
        }else if($(".pt.web_name").val()==""){
            $(".put_infos.err_info").show();
        }else {
            $(".put_infos.err_info").hide();
            $(".put_infos.err_a_info").hide();
        }
    });

});