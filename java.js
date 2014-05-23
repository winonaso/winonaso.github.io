$(document).ready(function(){ 
		 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#bottom').fadeIn();
        } else {
            $('#bottom').fadeOut();
        }
    }); 

    $('#bottom').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    $('.slider').each(function () {
		$(this).leanSlider({
	        directionNav: '#' + $(this).siblings('.slider-direction-nav').attr('id'),
	        pauseTime: false,
	        controlNav: '#' + $(this).siblings('.slider-control-nav').attr('id')
	    });
	});
});

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-44417801-1', 'winonaso.com');
  ga('send', 'pageview');