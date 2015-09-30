'use strict';

(function($) {
    $(window).load(function() {
        $("body").removeClass("no-trans");
    });

    // Fixed header
    //-----------------------------------------------
    var headerTopHeight = $(".header-top").outerHeight(),
        headerHeight = $("header.header.fixed").outerHeight();
    $(window).resize(function() {
        if(($(this).scrollTop() < headerTopHeight + headerHeight -5 ) && ($(window).width() > 767)) {
            headerTopHeight = $(".header-top").outerHeight(),
                headerHeight = $("header.header.fixed").outerHeight();
        }
    });

    $(window).scroll(function() {
        if (($(".header.fixed").length > 0)  && !($(".transparent-header .slideshow").length>0)) {
            if (($(this).scrollTop() > headerTopHeight + headerHeight) && ($(window).width() > 767)) {
                $("body").addClass("fixed-header-on");
                $(".header.fixed").addClass('animated object-visible fadeInDown');
                $(".header-container").css("paddingBottom", (headerHeight)+"px");
            } else {
                $("body").removeClass("fixed-header-on");
                $(".header-container").css("paddingBottom", (0)+"px");
                $(".header.fixed").removeClass('animated object-visible fadeInDown');
            }
        } else if ($(".header.fixed").length > 0) {
            if (($(this).scrollTop() > headerTopHeight + headerHeight) && ($(window).width() > 767)) {
                $("body").addClass("fixed-header-on");
                $(".header.fixed").addClass('animated object-visible fadeInDown');
            } else {
                $("body").removeClass("fixed-header-on");
                $(".header.fixed").removeClass('animated object-visible fadeInDown');
            }
        };
    });


    //Scroll Spy
    //-----------------------------------------------
    if($(".scrollspy").length>0) {
        $("body").addClass("scroll-spy");
        if($(".fixed.header").length>0) {
            $('body').scrollspy({
                target: '.scrollspy',
                offset: 85
            });
        } else {
            $('body').scrollspy({
                target: '.scrollspy',
                offset: 20
            });
        }
    }

    //Smooth Scroll
    //-----------------------------------------------
    if ($(".smooth-scroll").length>0) {
        if(($(".header.fixed").length>0) && (Modernizr.mq('only all and (min-width: 768px)'))) {
            $('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top-64
                        }, 1000);
                        return false;
                    }
                }
            });
        } else {
            $('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        }
    }


    // Map
    //-----------------------------------------------
    var coords = [56.9086, 24.0829];
    var map = L.map('map').setView(coords, 15);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker(coords).addTo(map)
        .bindPopup('Vienības gatve 109, Rīga, LV-1058 <br> 6th floor, office 6.11.')
        .openPopup();
})(this.jQuery);

