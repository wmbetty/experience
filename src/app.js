/**
 * Created by Lenovo on 2016/7/27.
 */
require ('babel-polyfill');
//require ('src/cats.js');
require('jquery') ;
//require('test.js') ;


//var $ = window.jQuery;

$('<h1>Cats</h1>').appendTo('body');
 ul = $('<ul></ul>').appendTo('body');
for (var i=0;i<3;i++) {
    $('<li></li>').text("hello").appendTo(ul);
}