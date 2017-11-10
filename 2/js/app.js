function headReveal() {
    $('#heading').removeClass().addClass('fadeInUp' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
        $(this).css({
            opacity: 1
        });
    })
    $('#headList').removeClass().addClass('fadeInUp' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
        $(this).css({
            opacity: 1
        });
    })
    $('#newsBlock').removeClass('fadeInUp animated').addClass('fadeInUp' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('fadeInUp animated');
        $(this).css({
            opacity: 1
        });
    })
}

function mainReveal() {
    $('#mainBlock').removeClass().addClass('fadeInLeft' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
        $(this).css({
            opacity: 1
        });
    })
}

function headlineReveal() {
    $('#headline').removeClass('fadeInLeft animated').addClass('fadeInLeft' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('fadeInLeft animated');
        $(this).css({
            opacity: 1
        });
    })
}

function descrReveal() {
    $('#descr').removeClass('fadeInLeft animated').addClass('fadeInLeft' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('fadeInLeft animated');
        $(this).css({
            opacity: 1
        });
    })
}

function list() {
    $('#list').removeClass('fadeInRight animated').addClass('fadeInRight' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('fadeInRight animated');
        $(this).css({
            opacity: 1
        });
    })
}

function dots() {
    $('#points').removeClass('fadeInUp animated').addClass('fadeInUp' + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('fadeInUp animated');
        $(this).css({
            opacity: 1
        });
    })
}

function year() {
    var b = $(".fc-left h2").html();
    var d = b.substr(0, 4);
    $(".fc-left h2").html(d);
}

function month() {
    var a = $(".fc-right h2").html();
    var c = a.substr(4);
    $(".fc-right h2").html(c);
}

function heads() {
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
    $('#closeSide').click(function(event) {
        $('.sidebar').removeClass('show');
        $('html').removeClass('sidbropn');
    });
    $('main').click(function(event) {
        if ($('.sidebar').hasClass('show')) {
            $('.sidebar').removeClass('show');
            $('html').removeClass('sidbropn');
        }
    });


    $('.years-container__column').off('click').on('click', function() {
        if (!$(this).hasClass('active')) {
            $('.years-container__column').removeClass('active');
            $(this).addClass('active');
        } else {
            $('.years-container__column').removeClass('active');
        }
        return false;
    });
 $('.accordion-information-row-title').off('click').on('click', function() {
            if (!$(this).hasClass('active')) {
                $('.accordion-information-row-title').removeClass('active').next('.accordion-information-row-description').slideUp(400);
                $(this).addClass('active').next('.accordion-information-row-description').slideDown(400);
            } else {
                $('.accordion-information-row-title').removeClass('active').next('.accordion-information-row-description').slideUp(400);
            }
             return false;
        });

         $('.ridges-list-row-title').off('click').on('click', function() {
                    if (!$(this).hasClass('active')) {
                        $('.ridges-list-row-title').removeClass('active').next('.ridges-list-row-description').slideUp(400);
                        $(this).addClass('active').next('.ridges-list-row-description').slideDown(400);
                    } else {
                        $('.ridges-list-row-title').removeClass('active').next('.ridges-list-row-description').slideUp(400);
                    }
                     return false;
                });

    $('.tabs-project-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.tabs-project-navigation-slider'
    });
    $('.tabs-project-navigation-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.tabs-project-main-slider',
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        arrows: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


 $('.stages-list-navigation').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        arrows: false,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.stages-list-navigation-prev').click(function() {
        $(this).parents().find("..stages-list-navigation").slick("slickPrev");
        return false;
    });
    
	$('.stages-list-navigation-next').click(function() {
        $(this).parents().find(".stages-list-navigation").slick("slickNext");
        return false;
    });
	
	$('.years-container-point__circle').hover(function(){
		$('.years-container-drop-selected').toggle();
	});

});

$(window).bind('scroll', function() {
    if ($('.navigation').length) {
        if ($(window).scrollTop() > 100) {
            $('.navigation').addClass('fixed');
            $('main').addClass('placeholder');
        } else {
            $('.navigation').removeClass('fixed');
            $('main').removeClass('placeholder');
        }
    }
});