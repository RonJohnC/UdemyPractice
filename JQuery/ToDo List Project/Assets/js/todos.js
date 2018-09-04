// if (jQuery) {
// 	alert("jQuery ACTIVATED!!!");
// } else {
// 	alert("Javascript linked, but no jQuery");
// };

//Check off specific items by clicking them

// $("li").click(function(){
// 	//if li is gray
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		//turn it black
// 		$(this).css({color: "black",
// 				 	 textDecoration: "none"
// 				});
// 	}
// 	//else
// 	else {
// 		//turn it gray	
// 	$(this).css({color: "gray",
// 				 textDecoration: "line-through"
// 				});
// 	};
// });

//Simplified version
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Start with "add New Item" hidden
$("input").css("display", "none");

//click on X to delete item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//adding new list item
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new item text from input
		var todoText = $(this).val();
		//clear input text
		$(this).val("");
		//create a new li, and add to ul
		$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>");
	};
});

$(".cartIcon").click(function(){
	$("input[type='text']").fadeToggle();
	$(this).find('i').toggleClass('fa-cart-plus fa-minus-square');
});