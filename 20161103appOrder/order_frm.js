/**
 * Created by Lenovo on 2016/11/3.
 * 订单查询
 */


function dg_show(){
    $api.append($api.dom("body"),'<div class="aui-mask"></div>');
    $api.removeCls($api.dom(".aui-dialog.aui-hidden"),"aui-hidden");
}

function dg_cancel(){
    $api.remove($api.dom(".aui-mask"));
    $api.addCls($api.dom(".aui-dialog"),"aui-hidden");
    $('.code-put').val(''); //确认码清空
}

//订单列表数据请求
//
$('#queryBtn').on('click',function(){

    $('.aui-dialog-header').text('请输入确认码');
    var code = $('.code-put').val(); //确认码
//		alert(code)
    if(code.length == 0){
        dg_show();
        setTimeout(function () {
            dg_cancel();
        },1500);
    }else {
        $.ajax({
            type : "get",
            url:"/Public/App/script/order_datas", //请求的假数据
//				url : "/index.php?s=/App/Index/query_order_by_ms",
            data :{
                code:code,
                //last_id:0
            },
//				dataType : "json",
            error : function() {
                $api.css($api.byId("loading"),"display:block");
            },
            success : function(data) {
                var odatas = eval('('+ data +')'); //转json
                console.log(odatas);
                var datalists = odatas.data; //订单数据
                $api.css($api.byId("loading"),"display:block");

                if(odatas.errcode == '0'){ //查询成功
                    setTimeout(function(){
                        $api.css($api.byId("loading"),"display:none");
                        $(datalists).each(function (odi,odlist) {
                            var od_chd = '<div class="od-list"><p><span class="o-title">订单号：</span>' +
                                '<span>'+odlist.orderNo+'</span></p><p><span class="o-title">订单时间：</span>' +
                                '<span>'+odlist.orderDate+'</span></p><p><span class="o-title">订单金额：</span>' +
                                '<span>￥'+odlist.trans_amt+'</span></p><p><span class="o-title">订单信息：</span>' +
                                '<span>'+odlist.respDesc+'</span></p></div>';
                            $('.od-cont').append(od_chd); //页面插入订单数据
                        });
                    },1500);

                }else {
                    setTimeout(function(){ //查询没有结果
                        $api.css($api.byId("loading"),"display:none");
                        dg_show();
                        $('.aui-dialog-header').text(''+data.errmsg+'');
                    },1500);
                    setTimeout(function(){ //查询没有结果
                        dg_cancel();
                    },3500);
                }

            }
        });
    }

});