/**
 * Created by Lenovo on 2016/11/17.
 */
//Model
var data = {
    rows: [
        { Id: 1, Name: '小明', Age: 18, School: '光明小学', Remark: '三好学生' },
        { Id: 2, Name: '小刚', Age: 20, School: '复兴中学', Remark: '优秀班干部' },
        { Id: 3, Name: '吉姆格林', Age: 19, School: '光明小学', Remark: '吉姆做了汽车公司经理' },
        { Id: 4, Name: '李雷', Age: 25, School: '复兴中学', Remark: '不老实的家伙' },
        { Id: 5, Name: '韩梅梅', Age: 22, School: '光明小学', Remark: '在一起' },
    ],
    pagesize: 2,
    curpage:1,//当前页的页码
};
//ViewModel
var vue = new Vue({
    el: '#app',
    data: data,
    methods: {
        //上一页方法
        PrePage: function (event) {
            $(".pagination .active").prev().trigger("click");
        },
        //下一页方法
        NextPage: function (event) {
            $(".pagination .active").next().trigger("click");
        },
        //点击页码的方法
        NumPage: function (num, event) {
            if (this.curpage == num) {
                return;
            }
            this.curpage = num;
            $(".pagination li").removeClass("active");
            if (event.target.tagName.toUpperCase() == "LI") {
                $(event.target).addClass("active");
            }
            else {
                $(event.target).parent().addClass("active");
            }
            if (this.curpage == 1) {
                $("#prepage").addClass("disabled");
            }
            else {
                $("#prepage").removeClass("disabled");
            }
            if (this.curpage == Math.ceil(this.rows.length / this.pagesize)) {
                $("#nextpage").addClass("disabled");
            }
            else {
                $("#nextpage").removeClass("disabled");
            }
        }
    }
});