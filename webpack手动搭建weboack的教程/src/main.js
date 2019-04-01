import $ from "jquery"


$(function(){ 
    $("li:odd").css("background",'red');
    $("li:even").css("background",function(){return '#'+'d97634'});
})