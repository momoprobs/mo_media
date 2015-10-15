$(document).ready(function() {

	//Create static data
	var avatechProject = {title: "Avatech", subtitle: "website", category: "mobile", images: ["avatech-probe.png", "avatech-comp.png"], info: {goal: "Avatech goal description", outcome: "Avatech outcome text", learnings: "Avatech learnings", critique: "Avatech critique"}};
	var senseProject = {title: "Sense", subtitle: "mobile application", catergoy: "mobile", images: ["sense-app.png", "sense.jpeg"], info: {goal: "Sense goal description", outcome: "Sense outcome text", learnings: "Sense learnings", critique: "Sense critique"}};
	var dummyProject1 ={title: "Dummy1", subtitle: "website", catergoy: "web", images: ["dummy1.jpg", "dummy1.jpg"], info: {goal: "Dummy1 goal description", outcome: "Dummy1 outcome text", learnings: "Dummy1 learnings", critique: "Dummy1 critique"}}; 
	var dummyProject2 ={title: "Dummy2", subtitle: "firepit", catergoy: "web", images: ["dummy2.jpg", "dummy2.jpg"], info: {goal: "Dummy2 goal description", outcome: "Dummy2 outcome text", learnings: "Dummy2 learnings", critique: "Dummy2 critique"}}; 
	var dummyProject3 ={title: "Dummy3", subtitle: "color project", catergoy: "art", images: ["dummy3.jpg", "dummy3.jpg"], info: {goal: "Dummy3 goal description", outcome: "Dummy3 outcome text", learnings: "Dummy3 learnings", critique: "Dummy3 critique"}}; 

	var projects = [avatechProject, senseProject, dummyProject1, dummyProject2, dummyProject3];

	var HandlebarTemplates = {

		thumbnailTemplate: 				Handlebars.compile($('#project-thumbnail-template').html()),
		emptyThumbnailTemplate: 		Handlebars.compile($('#empty-thumbnail-template').html()),
		projectCarouselItemTemplate: 	Handlebars.compile($('#project-carousel-item').html())
	};

	function setUpProjectCarousel() {

		var numThumbnailsPerItem = 4;
		var numItems = Math.ceil(projects.length / numThumbnailsPerItem);
		
		for (var itemCount = 0; itemCount < numItems; itemCount++) {


			var itemTemplate = $(HandlebarTemplates.projectCarouselItemTemplate()).addClass("item" + itemCount);

			if (itemCount == 0) {
				$(itemTemplate).addClass("active");
			}

			$(".project-picker .carousel-inner").append(itemTemplate);

			for (var thumbNailCount = 0; thumbNailCount < numThumbnailsPerItem; thumbNailCount++) {

				//$(".thumbnail" + thumbNailCount )

				var projectIndex = thumbNailCount + (itemCount * numThumbnailsPerItem);


				//If an empty space
				if (projectIndex < projects.length) {

					var newThumbnail = $(HandlebarTemplates.thumbnailTemplate({image_name: projects[projectIndex].images[0]}));
					$(".item" + itemCount + " .thumbnail" + thumbNailCount + "-holder").append(newThumbnail);
				}
			}
		}
	}

	function onMenuItemClick(elem) {
		

		//Collapses the current expanded section

		//Animation code
		// $(".menu-item-expanded").animate({
		// 	height: "30px"
		// }, 300, function() {
			
		// });
		$(".menu-item-expanded").removeClass("menu-item-expanded").addClass("menu-item").on("click", function(event) {

				onMenuItemClick(this);	
			});	

		//Expands the clicked item
		$(elem).removeClass("menu-item").addClass("menu-item-expanded").off("click");
		
		//Animation code
		// $(elem).animate({
		// 	height: "634px",
		// }, 300, function() {
			
		// });

		$('div.project-info a').click(function (e) {
	  		e.preventDefault()
	  		$(this).tab('show')
		});
	} 

	var menuShimmer = window.setTimeout(function() {
		
		$(".menu-item.green").addClass("hovered");
		window.setTimeout(function() {
			$(".menu-item.green").removeClass("hovered");
			$(".menu-item.blue").addClass("hovered");
			window.setTimeout(function() {
				$(".menu-item.blue").removeClass("hovered");
				$(".menu-item.pink").addClass("hovered");
				window.setTimeout(function() {
					$(".menu-item.pink").removeClass("hovered");
				}, 300);
			}, 300);
		}, 300);
	}, 1000);

	$(".menu-item").on("click", function(event) {
		window.clearTimeout(menuShimmer);
		$(".hovered").removeClass(".hovered");
		onMenuItemClick(this);
	});

	setUpProjectCarousel();

});

