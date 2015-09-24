(function () {
	var navBarSticky = new Waypoint.Sticky({
			element: $("#navi")[0]
		}),
		headers = $('img', '#header'),
		navbarHeight = $("#navi").height(),
		body = $('body,html'),
		scrollToElement = function (element) {
			body.animate({
				scrollTop: element.offset().top - navbarHeight
			}, 500);
		},
		projectSection = $('#projects'),
		projectImageIndex = function (project, index) {
			var containerWidth = $('.main-image-container', project).width(),
				mainImage = $('.main-image', project),
				thumbnails = $('.thumbnails .thumbnail', project);
			mainImage.css('transform', 'translateX(' + -1 * index * containerWidth + 'px)');
			thumbnails.removeClass('selected').eq(index).addClass('selected');

			if (index === 0) {
				$('.left-arrow', project).addClass('disabled');
			} else {
				$('.left-arrow', project).removeClass('disabled');
			}

			if (index === thumbnails.length - 1 || thumbnails.length === 0) {
				$('.right-arrow', project).addClass('disabled');
			} else {
				$('.right-arrow', project).removeClass('disabled');
			}
		};

	headers
		.addClass('instant')
		.removeClass('selected')
		.eq(Math.floor(Math.random()*headers.length))
		.addClass('selected');

	setTimeout(function () {
		headers.removeClass('instant');
	}, 100);

	setInterval(function () {
		var selected = $('img.selected', '#header').removeClass('selected');
		headers.eq((headers.index(selected) + 1) % headers.length).addClass('selected');
	}, 15000);

	$('.project.selected', projectSection).waitForImages(function () {
		projectSection.height(22+$(this).height());
	});

	$('.project', projectSection).each(function () {
		projectImageIndex($(this), 0);
	});

	if (window.location.hash.length > 1) {
		scrollToElement($(window.location.hash));
	}

	$('a[href^="#"]').on('click', function (e) {
		var self = $(this),
			target = $(self.attr('href'));
		e.preventDefault();
		scrollToElement(target);
	});

	$('#projects').on('click', '.thumbnails .thumbnail', function () {
		var self = $(this),
			project = self.parents('.project');

		projectImageIndex(project, self.index());
	});

	$('#projects').on('click', '.left-arrow', function () {
		var self = $(this),
			project = self.parents('.project'),
			selected = $('.thumbnails .thumbnail.selected', project);

		if (self.hasClass('disabled')) {
			return;
		}

		projectImageIndex(project, selected.index() - 1);
	});

	$('#projects').on('click', '.right-arrow', function () {
		var self = $(this),
			project = self.parents('.project'),
			selected = $('.thumbnails .thumbnail.selected', project);

		if (self.hasClass('disabled')) {
			return;
		}

		projectImageIndex(project, selected.index() + 1);
	});

	$('#project-select').on('click', 'img', function () {
		var self = $(this),
			projects = $('#projects .project'),
			project = projects.eq(self.index());
		projects.removeClass('selected');
		project.addClass('selected');
		projectSection.height(22+project.height());
		scrollToElement(projectSection);
	});

	$('#project-select .categories').on('click', '.category', function () {
		var self = $(this),
			categoryName = self.data('category-name'),
			categories = $('#project-select .categories .category');

		categories.removeClass('selected');
		self.addClass('selected');

		if (categoryName === 'all') {
			$('#project-select a').removeClass('hide');
		} else {
			$('#project-select a').addClass('hide');
			$('#project-select img.'+categoryName).parent().removeClass('hide');
		}
	});
}());
