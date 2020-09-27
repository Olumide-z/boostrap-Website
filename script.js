// Sticky nav bar

$(document).ready(function() {
  
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
      if ($(window).scrollTop() > 280) {
        $('#nav-B').addClass('navbar-fixed');
        $(".link").addClass("fixed-color");
        $("#desk").addClass("new-brand");
        $(".nav-div").addClass("new-div");
      }
      if ($(window).scrollTop() < 281) {
        $('#nav-B').removeClass('navbar-fixed');
        $(".link").removeClass("fixed-color");
        $("#desk").removeClass("new-brand");
        $(".nav-div").removeClass("new-div");
      }
    });
  });

// link dropdowns


var fre = $(".newLink1");
var paragraph = $(".para1");
var ic = $(".fre-icon");

fre.click(function(){
    paragraph.css("display", "block")
    console.log("clicked")
 });

 fre.dblclick(function(){
     paragraph.css("display", "none")
 }); 

var fre1 = $(".newLink2");
var paragraph1 = $(".para2");

fre1.click(function(){
    paragraph1.css("display", "block")
    console.log("clicked")
 });

 fre1.dblclick(function(){
     paragraph1.css("display", "none")
 }); 

 var fre2 = $(".newLink3");
var paragraph2 = $(".para3");

fre2.click(function(){
    paragraph2.css("display", "block")
    console.log("clicked")
 });

 fre2.dblclick(function(){
     paragraph2.css("display", "none")
 }); 

 var fre3 = $(".newLink4");
var paragraph3 = $(".para4");

fre3.click(function(){
    paragraph3.css("display", "block")
    console.log("clicked")
 });

 fre3.dblclick(function(){
     paragraph3.css("display", "none")
 }); 

 var fre4 = $(".newLink5");
var paragraph4 = $(".para5");

fre4.click(function(){
    paragraph4.css("display", "block")
    console.log("clicked")
 });

 fre4.dblclick(function(){
     paragraph4.css("display", "none")
 }); 

