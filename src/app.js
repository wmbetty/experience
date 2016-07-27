/**
 * Created by Lenovo on 2016/7/27.
 */
require ('babel-polyfill');
require ('./cats.js');
require('jquery') ;

var $ = window.jQuery;

$('<h1>Cats</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (cat in cats) {
    $('<li></li>').text(cat).appendTo(ul);
}