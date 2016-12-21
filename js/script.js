// google analytics
// <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-52757098-1', 'auto');
  ga('send', 'pageview');

// </script>

$(document).ready(function(){

	$('.desc').slideUp(0);
	var $entry = $('.entry'),
					navHeight;

	function navpush(){
		navHeight = $('nav').height();
		// console.log('navHeight= '+navHeight);
		$('#content').css({
			paddingTop: navHeight
		});
	}

	navpush();


	// button scrolling effect:
 $('nav a.btn').on('click',function(event){
     var $anchor = $(this);
		// console.log($anchor);
		if( window.innerWidth >= 920 ){
			$('html, body').stop().animate({
    scrollTop: ( $( $anchor.attr('href') ).offset().top ) - navHeight
      }, 1000,'easeInOutExpo');
		}else{
      $('html, body').stop().animate({
         scrollTop: ( $( $anchor.attr('href') ).offset().top) - 10
      }, 1000,'easeInOutExpo');
		}
		if( window.innerWidth >= 700 ){
			$('html, body').stop().animate({
    scrollTop: ( $( $anchor.attr('href') ).offset().top ) - navHeight - 20
   }, 1000,'easeInOutExpo');
  }
  event.preventDefault();
 });

 // $entry.each(function(){
 $entry.on('click',function(){
 	if( $(this).children('.desc').css('display') == 'none' ){
	 	$(this).children('.desc').slideDown();
	 	$(this).find('.plus').text('-');
 	}else{
			$(this).children('.desc').slideUp(); 		
	 	$(this).find('.plus').text('+');
 	}
 });

 $(window).resize(function(){
 	navpush();
 	// console.log('change registered');
 });

});