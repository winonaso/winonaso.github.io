(function () {
	var navi = document.getElementById('navi'),
		addPreloadLink = function(element) {
			var link = document.createElement('link');
			link.setAttribute('rel', 'preload');
			link.setAttribute('href', element.getAttribute('href'));
			document.head.appendChild(link);
		};

	if (document.body.style.transition === undefined || document.body.classList === undefined) {
		return;
	}

	[].slice.call(document.getElementsByTagName('a'))
		.filter(function(element) {
			return element.getAttribute('class') !== 'logo';
		}).forEach(function(element) {
			element.addEventListener('click', function(event) {
				event.preventDefault();

				navi.addEventListener('transitionend', function () {
					window.location.href = element.getAttribute('href');
				}, false);

				addPreloadLink(element);
				navi.classList.add('top');
			}, false);
		});
}());
