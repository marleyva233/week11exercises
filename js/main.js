//in jQuery the $ indicates to the browser that the code is jQuery

//the first button shows the image
$("#btn1").click(function(){
	$("#image").show();
	});

//second button hides the image
$("#btn2").click(function(){
	$("#image").hide();
});


//the third button toggles between show/hide
$("#btn3").click(function(){
	$("#image").toggle();
});


//fourth button that toggles the "fade" class
$("#btn4").click(function(){
	$("#image").toggleClass("fade");
	if( $("#image").css("opacity")=='0'){
		$("#fadeText").text("fade is off");
	}else{
		$("#fadeText").text("fade is on");
	}
});


//hover method to change the img src
$("#image").hover(function(){
	$("#image").attr("src", "http://i66.tinypic.com/2qcj7er.jpg");
},
function(){
	$("#image").attr("src", "https://www.intrepidtravel.com/sites/intrepid/files/styles/low-quality/public/elements/product/map/zmrf_2017.gif");
});


//the 5th button adds another list item

$("#btn5").click(function(){
	$("ul").append("<li>appended item</li>");
});

$("li").hover(function() {
        $(this).css({"font-size" : "20px", "color": "teal"})
      }, function() {
        $(this).css({"font-size" : "initial", "color": "initial"})
      })

//when clicking this button the div will cover the full page
$("#btn6").click(function(){
	$("body").append("<div id='overlay'></div>");
});
