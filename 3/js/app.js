function headReveal(){
	$('#heading').removeClass().addClass('fadeInUp' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass();
    $(this).css({opacity: 1});
  })
  $('#headList').removeClass().addClass('fadeInUp' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass();
    $(this).css({opacity: 1});
  })
  $('#newsBlock').removeClass('fadeInUp animated').addClass('fadeInUp' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass('fadeInUp animated');
    $(this).css({opacity: 1});
  })
}
function mainReveal(){
  $('#mainBlock').removeClass().addClass('fadeInLeft' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass();
    $(this).css({opacity: 1});
  })
}
function headlineReveal(){
    $('#headline').removeClass('fadeInLeft animated').addClass('fadeInLeft' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('fadeInLeft animated');
      $(this).css({opacity: 1});
    })
}
function descrReveal(){
  $('#descr').removeClass('fadeInLeft animated').addClass('fadeInLeft' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass('fadeInLeft animated');
    $(this).css({opacity: 1});
  })
}
function list(){
  $('#list').removeClass('fadeInRight animated').addClass('fadeInRight' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass('fadeInRight animated');
    $(this).css({opacity: 1});
  })
}
function dots(){
	$('#points').removeClass('fadeInUp animated').addClass('fadeInUp' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass('fadeInUp animated');
		$(this).css({opacity: 1});
	})
}
function year(){
    var b = $(".fc-left h2").html();
    var d = b.substr(0,4);
    $(".fc-left h2").html(d);
}
function month(){
	var a = $(".fc-right h2").html();
	var c = a.substr(4);
	$(".fc-right h2").html(c);
}
function heads(){
	$("#heads").clone().appendTo("#beforeHeads");
    $("#heads").clone().appendTo("#beforeHeads");
}
jQuery(document).ready(function($) {
  $("#heads").clone().appendTo("#beforeHeads");
  $("#heads").clone().appendTo("#beforeHeads");
  setTimeout(headReveal, 1);
  setTimeout(mainReveal, 1);
  setTimeout(headlineReveal, 1000);
  setTimeout(descrReveal, 1000);
  setTimeout(list, 1000);
  setTimeout(dots, 2000);
  $('.bread').click(function(event) {
    $('.sidebar').addClass('show');
    $('html').addClass('sidbropn');
  });
  $('#closeSide, .closeSide').click(function(event) {
    $('.sidebar').removeClass('show');
    $('html').removeClass('sidbropn');
  });
  $('main').click(function(event) {
    if ($('.sidebar').hasClass('show')){
    	$('.sidebar').removeClass('show');
	    $('html').removeClass('sidbropn');
    }
  });
	$('#comment').click(function(event) {
		$('#cmntpp').addClass('show').delay(50).queue(function(next){
		    $(this).addClass("ani");
		    next();
		});
		$('html').addClass('sidbropn');
	});
	$('#closepopup').click(function(event) {
		$('#cmntpp').removeClass('ani').delay(50).queue(function(next){
		    $(this).removeClass("show");
		    next();
		});
		$('html').removeClass('sidbropn');
	});
	$('.popup').click(function(event) {
		$('#cmntpp').removeClass('ani').delay(50).queue(function(next){
				$(this).removeClass("show");
				next();
		});
		$('html').removeClass('sidbropn');
	});
	$('#popupcont').click(function(event){
    event.stopPropagation();
	});
});
$(window).bind('scroll', function () {
	if ($('.navigation').length){
	    if ($(window).scrollTop() > 100) {
	        $('.navigation').addClass('fixed');
	        $('main').addClass('placeholder');
	    } else {
	        $('.navigation').removeClass('fixed');
	        $('main').removeClass('placeholder');
	    }
	}
});

	if ($('.js-fancybox').length > 0) {
        $('.js-fancybox').fancybox({
            src  : '#hidden-content',
            type : 'inline',
            opts : {
                afterShow : function( instance, current ) {
                    console.info( 'done!' );
                }
            }
        });

        $('body').on('click', '.js-fancybox', function(){
            $.fancybox.open({
                margin : [90, 0],
                src  : '#hidden-content',
                type : 'inline',
                opts : {
                    afterShow : function( instance, current ) {
                        console.info( 'done!' );
                    }
                }
            });
        });
    }

$(document).ready(function(e) {
    if ($('.indic-select select').length > 0) {
        $('.indic-select select').chosen({disable_search: true, placeholder_text_multiple: ' ', no_results_text: 'Нет результатов'});
    }
    $(window).on('resize', drawChart);
});