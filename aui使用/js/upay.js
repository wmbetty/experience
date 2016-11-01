/**
 * Created by Lenovo on 2016/10/21.
 */

//确定按钮高度计算
var n_h = $('.calcu-num').height();
var mt = $('.calcu-num').css('margin-bottom');
var l_h = $('.calcu-num-cont').height();
$('.num-confirm').height(l_h - n_h - 19);

//表格数据插入
function order_datas(odatas){

    $(odatas).each(function(i,od){
        var transAamt = od.trans_amt;
        transAamt = transAamt / 100; //金额 toDecimal
        var pay_status = od.respCode; ///收款状态
        var chk_code = od.order_no;
        var pay_time = od.order_date; //收款时间
        var arr = pay_time.split(" "); //用空格去掉年月日
        pay_time = arr[1];

        chk_code = chk_code.substr(chk_code.length-5); //核对码：取订单号后五位

        if(pay_status == '0'){
            pay_status = '<i class="aui-iconfont pay_succ">&#xe645;</i>';
        } else {
            pay_status = '<i class="aui-iconfont pay_err">&#xe646;</i>';
        }

        var order_chd = '<tr class="sub-tr" data-id="'+od.id+'"><td>'+od.order_no+'</td><td>'+pay_time+'</td>' +
            '<td>'+chk_code+'</td><td>'+transAamt+'</td><td>'+pay_status+'</td></tr>';
        $('.o_datas').append(order_chd);
    });
}

//订单列表数据请求
//query_order
// $.ajax({
//     type : "post",
//     url : "/index.php?s=/PC/Index/query_order",
//     //data :{
//     //    user_id:1,
//     //    //last_id:0
//     //},
//     dataType : "json",
//     error : function() {
//         console.log('出错了！')
//     },
//     success : function(data) {
//         console.log(data);
//         var od_datas = data;
//
//         if(od_datas.length == 0){ //没有收款数据
//             $('.no_datas').show();
//
//         }else {
//             $('.no_datas').hide();
//
//             order_datas(od_datas);
//         }
//
//     }
// });


//刷新操作
// $('.rfresh').on('click',function(){
//     var o_id = $('.o_datas .sub-tr').eq(0).attr('data-id'); //订单id
//     console.log(o_id)
//
//     $.ajax({
//         type : "post",
//         url : "/index.php?s=/PC/Index/query_order",
//         data :{
//             last_id:o_id,
//             //last_id:0
//         },
//         dataType : "json",
//         error : function() {
//             console.log('出错了！')
//         },
//         success : function(data) {
//             console.log(data);
//             var order_datas = data;
//
//             $api.css($api.byId("loading"),"display:block");
//             setTimeout(function(){
//                 $api.css($api.byId("loading"),"display:none");
//             },1500);
//
//             if(order_datas.length == 0){
//                 //$('.no_datas').show();
//             }else {
//                 $('.no_datas').hide();
//                 $(order_datas).each(function(i,od){
//                     var transAamt = od.trans_amt;
//                     transAamt = transAamt / 100; //金额 toDecimal
//                     var pay_status = od.respCode; ///支付状态
//                     var chk_code = od.order_no;
//                     chk_code = chk_code.substr(chk_code.length-5); //核对码：取订单号后五位
//                     var pay_time = od.order_date; //收款时间
//                     var arr = pay_time.split(" "); //用空格去掉年月日
//                     pay_time = arr[1];
//
//                     if(pay_status == '0000'){
//                         pay_status = '<i class="aui-iconfont pay_succ">&#xe645;</i>'; //收款成功状态
//                     } else if (pay_status == 'P000') {
//                         pay_status = '等待确认';
//                     } else {
//                         pay_status = '<i class="aui-iconfont pay_err">&#xe646;</i>';
//                     }
//
//                     var order_chd = '<tr class="sub-tr" data-id="'+od.id+'"><td>'+od.order_no+'</td><td>'+pay_time+'</td>' +
//                         '<td>'+chk_code+'</td><td>'+transAamt+'</td><td>'+pay_status+'</td></tr>';
//                     $('.o_datas').prepend(order_chd);
//                 });
//             }
//
//         }
//     });
//
// });


//计算器相关计算
// 1\ 监听 page.key
// 2\ page number
// 2\ 单独money

// 1


function order_amount(){
    $(document).on("keyup", function(event) {
        event.stopPropagation();
        var key = event.keyCode;

        if(key == 13 && $('#moneyPut').val()!=''){
            var temp= $("#dialog").is(":visible");//是否可见

            show();
            if(temp && key == 13){
                cancel();
                $('.aui-mask').hide();
            }

        }
        if((key>=96 && key<=105) || (key>=48 && key<=57) || key == 110 || key == 190 || key == 8 || key == 46){
            dealMoney(key,$('#moneyPut'));
        }

        // if(key == 96 || key == 48){
        //     $('#moneyPut').val('');
        //     $('#moneyPut').val('0.');// 判断第一次输入的值 如果等于0 就0后面加小数点
        //     dealMoney(key,$('#moneyPut'));
        // }

        if(key == 110 || key == 190){
            $('#moneyPut').val('0.');// 判断第一次输入的值 如果等于小数点 就小数点前加0
            dealMoney(key,$('#moneyPut'));
        }

    });
}

//扫码确定后插入数据
// function code_put(fd_data){
//     var transAamt = fd_data.transAamt;
//     transAamt = transAamt / 100; //金额
//     var pay_status = fd_data.respCode; ///支付状态  alert("abcdefg".slice(-4));
//     var chk_code = fd_data.orderNo;
//     chk_code = chk_code.slice(-5); //核对码：取订单号后五位
//     var pay_time = fd_data.orderDate; //收款时间
//     var arr = pay_time.split(" "); //用空格去掉年月日
//     pay_time = arr[1];
//
//
//     if(pay_status == '0000'){
//         pay_status = '<i class="aui-iconfont pay_succ">&#xe645;</i>';
//         $('.pay_after_succ').show();
//         $('.succ-cont').show();
//         // $('.aui-dialog-footer').show();
//
//         setTimeout(function () {
//             cancel();
//         },2000);
//
//     } else if (pay_status == 'P000') {
//         pay_status = '等待确认';
//     } else {
//         pay_status = '<i class="aui-iconfont pay_err">&#xe646;</i>';
//         $('.sao_after').show();
//         $('.err-cont').show();
//         // $('.aui-dialog-footer').show();
//     }
//
//     var order_chd = '<tr class="sub-tr"><td>'+fd_data.orderNo+'</td><td>'+pay_time+'</td>' +
//         '<td>'+chk_code+'</td><td>'+transAamt+'</td><td>'+pay_status+'</td></tr>';
//     $('.o_datas').prepend(order_chd);
//
//     // confirm();
//     // $('.no_datas').hide();
// }

$('.m-put').on("keyup", function(event) {
    event.stopPropagation();
    var k = event.keyCode;
    if(k == 13 && $('.m-put').val() != ''){

        $('.code-container').hide();

        var m_amount = $('#moneyPut').val();
        var pay_code = $('.m-put').val();
        console.log(pay_code)

        // $.ajax({
        //     type : "post",
        //     url : "/index.php?s=/PC/Index/payment",
        //     data :{
        //         "code":pay_code,
        //         "amount":m_amount
        //     },
        //     dataType : "json",
        //     error : function() {
        //         // $('.sao_after').show();
        //         $('.paying-cont').show(); //正在收款。。。
        //         // $('.aui-dialog-footer').hide();
        //         $('.close-btn').text('关闭');
        //     },
        //
        //     beforeSend:function () {
        //         $('.paying-cont').show(); //正在收款。。。
        //         // $('.aui-dialog-footer').hide();
        //         $('.close-btn').text('关闭');
        //     },
        //
        //     success : function(data) {
        //         $('.paying-cont').hide();
        //         console.log(data);
        //         console.log(11);
        //         $('.close-btn').text('关闭');
        //         code_put(data);
        //     }
        // });

    }
});
//
// 3
function dealMoney(key,num_put)
{
    var num;
    var money_num = num_put.val();
    //var money_num = $('#moneyPut').val();
    //
    var str_len = money_num.length;
    var pos = money_num.indexOf('.');

    if (key == 110 || key == 190) {
        num = ".";
        if (pos > 0) {
            num = "";
        }

        if (money_num == "")
            num = "0.";
    } else if ((key>=96 && key<=105) || (key>=48 && key<=57)) {
        if (key>=96 && key<=105) {
            num = key - 96;
        } else {
            num = key - 48;
        }
        if (pos >= 0) {
            if (pos < str_len - 2) {
                num = "";
            }
        } else {
            if (str_len > 6) {
                num = "";
            }
        }
    }

    if (key == 8 || key == 46) {
        money_num = money_num.substring(0, str_len - 1)
    } else {
        money_num += num;
    }


    num_put.val(money_num);
}

// 2
// 0--9, . return, delete

$(".calcu-num").on("click", function(key){

    //    //数字键盘按下状态
    $(this).addClass('active').siblings().removeClass('active');


    var key = $(this).attr("data-key");
    if (key == "##") {
        // $("#moneyPut").val('0.')
        dealMoney(96,$('#moneyPut'));
        dealMoney(96,$('#moneyPut'));
    } else {
        dealMoney(key,$('#moneyPut'));
    }

    if(key == 110 && $("#moneyPut").val() == ''){
        $("#moneyPut").val('0.');// 判断第一次输入的值 如果等于.
        dealMoney(key,$('#moneyPut'));
    }

    setTimeout(function(){
        $('.calcu-num').removeClass('active');
    },500);

    var p_money = $('#moneyPut').val();
    var pos = p_money.indexOf('.');
    var first_num = p_money.substr(0, 1);
    if(first_num == 0 && pos < 0){ //如果第一个数是0且没有小数点，就去掉0
        var rst_money = p_money.substring(1);
        $('#moneyPut').val(rst_money);
    }

});

function show(){
    $api.append($api.dom("body"),'<div class="aui-mask"></div>');
    $api.removeCls($api.dom(".aui-dialog.aui-hidden"),"aui-hidden");
    $('.m-put').focus();
    // $('.pay-err').hide();

}
function cancel(){
    $api.remove($api.dom(".aui-mask"));
    $api.addCls($api.dom(".aui-dialog"),"aui-hidden");
    $('.code-container').show();
    $('.pay_after_succ').hide();
    $('.succ-cont').hide();
    $('.sao_after').hide();
    $('.err-cont').hide();
    // $('.aui-dialog-footer').show();

}
function confirm(){
    $api.remove($api.dom(".aui-mask"));
    $api.addCls($api.dom(".aui-dialog"),"aui-hidden");
    $('#moneyPut').val('');
}

//
////删除一个数
$('.num-clear').on("click",function(e){
    var money_num = $('#moneyPut').val();
    var str_len = money_num.length;
    money_num = money_num.substring(0, str_len - 1)
    $('#moneyPut').val(money_num);
});
//
//

$('.num-confirm').on('touchstart',function(){
    show();

});

////输入码弹出
$('.num-confirm').click(function(e){
    e.preventDefault();
    var money_num = $('#moneyPut').val();
    if(money_num != ''){
        show();
        $('.m-put').val('');
    }
});
//
$('.close-btn').click(function(){
    cancel();
    $('#moneyPut').val('');
    $('.m-put').val('');
    $('.close-btn').text('取消');
    $('.code-container').show();
    $('.pay_after_succ').hide();
    $('.succ-cont').hide();
    $('.sao_after').hide();
    $('.err-cont').hide();
});
//
//支付确定提交
$('#dlogConfirm').on('click',function(){
    var m_amount = $('#moneyPut').val();
    var pay_code = $('.m-put').val();

    if(pay_code != ''){
        // $.ajax({
        //     type : "post",
        //     url : "/index.php?s=/PC/Index/payment",
        //     data :{
        //         "code":pay_code,
        //         "amount":m_amount
        //     },
        //     dataType : "json",
        //     error : function() {
        //         alert('出错了！')
        //     },
        //     success : function(data) {
        //         console.log(data);
        //         code_put(data);
        //
        //     }
        // });
    }else {

    }

});

//表格显示
$('.d-title').on('click',function(){
    $('.bd-rt').slideToggle();
});

$('.h-border').height($('.sd-cont').height()-70);

$('#dialog').on('click',function(){
    // $('.m-put').focus();
});

$(document).on('click',function(){
    var temp= $("#dialog").is(":visible");//是否可见
    if(temp){
        $('.m-put').focus();
    }

});