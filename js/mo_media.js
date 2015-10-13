$(document).ready(function() {


	function onMenuItemClick(elem) {
		
		//Collapses the current expanded section
		$(".menu-item-expanded").removeClass("menu-item-expanded").addClass("menu-item").on("click", function(event) {

			onMenuItemClick(this);	
		});

		//Expands the clicked item
		$(elem).removeClass("menu-item").addClass("menu-item-expanded").off("click");
	} 

	$(".menu-item-expanded").html()

	$(".menu-item").on("click", function(event) {
		onMenuItemClick(this);
	});
});

