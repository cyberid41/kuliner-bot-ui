$(document).ready(function(){function a(){function l(){k.activeIndex>0>k.isEnd?($(".mobileui-home-footer").addClass("show-mobileui-home-footer"),$(".header-homescreen").addClass("show-mobileui-home-header")):($(".mobileui-home-footer").removeClass("show-mobileui-home-footer"),$(".header-homescreen").removeClass("show-mobileui-home-header"))}function x(){var a=$(window).width(),b=$(window).height(),c=$(".content-center").outerWidth(),d=$(".content-center").outerHeight(),e=$(".page-fullscreen-content").outerWidth(),f=$(".page-fullscreen-content").outerHeight(),g=$(".coverpage-center").outerHeight(),h=$(".coverpage-center").outerWidth();$(".content-center").css({left:"50%",top:"50%","margin-left":c/2*-1,"margin-top":d/2*-1}),$(".page-fullscreen").css({width:a,height:b}),$(".page-fullscreen-content").css({left:"50%",top:"50%","margin-left":e/2*-1,"margin-top":f/2*-1}),$(".coverpage-clear").css({height:b}),$(".coverpage-center").css({left:"50%",top:"50%","margin-left":h/2*-1,"margin-top":g/2*-1}),$(".map-fullscreen iframe").css("width",a),$(".map-fullscreen iframe").css("height",b);var i=b-100;$(".mobileui-home").css("height",i),$(".mobileui-home-5 a").css("height",i/5),$(".mobileui-home-4 a").css("height",i/4),$(".mobileui-home-3 a").css("height",i/3)}function H(){var a=$(".mobileui-lockscreen-header").height(),b=$(".mobileui-lockscreen-home").height(),c=$(window).height()-0,d=c-(b+a);$(".mobileui-lockscreen-notifications").css("height",d-160)}$(".open-scrolling-menu").click(function(){$(".header-icon-1, header-icon-3, .header-icon-4").toggleClass("no-pointer-events opacity-25"),$(".scrolling-menu").toggleClass("scrolling-menu-hidden"),$(this).toggleClass("rotate-icon"),$(this).addClass("transition-icon")}),$(".scrolling-menu").hasClass("scrolling-menu-hidden")&&$(".open-scrolling-menu").addClass("rotate-icon"),$(".scrolling-menu").hasClass("scrolling-menu-static")&&$(".open-scrolling-menu").hide(0),$(".open-header-menu").click(function(){$(".header-icon-2, header-icon-3, .header-icon-4").addClass("no-pointer-events opacity-25"),$(".header-menu").addClass("pointer-events"),$(this).stop(0,0).hide(0),$(".close-header-menu").addClass("no-pointer-events"),$(".close-header-menu").stop(0,0).show(0),$(".close-header-menu .line-1").addClass("line-1-active"),$(".close-header-menu .line-2").addClass("line-2-active"),$(".close-header-menu .line-3").addClass("line-3-active"),setTimeout(function(){$(".close-header-menu").removeClass("no-pointer-events")},400);var a=$(window).height();$(".header-menu-background").css({height:a,transform:"translateY("+2*a+"px) scale(1, 1)","-webkit-transform":"translateY("+2*a+"px) scale(1, 1)","-moz-transform":"translateY("+2*a+"px) scale(1, 1)","-o-transform":"translateY("+2*a+"px) scale(1, 1)","-ms-transform":"ranslateY("+2*a+"px) scale(1, 1)",opacity:"1"}),$(".header-menu a").each(function(a){var b=$(this);setTimeout(function(){b.css({transform:"translateX(0px) translateY(0px) scale(1, 1)","-webkit-transform":"translateX(0px) translateY(0px) scale(1, 1)","-moz-transform":"translateX(0px) translateY(0px) scale(1, 1)","-o-transform":"translateX(0px) translateY(0px) scale(1, 1)","-ms-transform":"translateX(0px) translateY(0px) scale(1, 1)",opacity:"1"})},50*a)}),$(".header-menu-background").addClass("active-header-background"),$(".header-menu-close").addClass("pointer-events")}),$(".close-header-menu").click(function(){$(".header-icon-2, header-icon-3, .header-icon-4").removeClass("no-pointer-events opacity-25"),$(".header-menu").removeClass("pointer-events"),$(this).stop(0,0).delay(250).hide(0),$(".open-header-menu").addClass("no-pointer-events"),$(".open-header-menu").stop(0,0).delay(250).show(0),$(".close-header-menu .line-1").removeClass("line-1-active"),$(".close-header-menu .line-2").removeClass("line-2-active"),$(".close-header-menu .line-3").removeClass("line-3-active"),setTimeout(function(){$(".open-header-menu").removeClass("no-pointer-events")},400);var a=-1*$(window).height();setTimeout(function(){$(".header-menu-background").css({height:a,transform:"translateY("+2*a+"px) scale(1, 1)","-webkit-transform":"translateY("+2*a+"px) scale(1, 1)","-moz-transform":"translateY("+2*a+"px) scale(1, 1)","-o-transform":"translateY("+2*a+"px) scale(1, 1)","-ms-transform":"ranslateY("+2*a+"px) scale(1, 1)",opacity:"1"})},120),$(".header-menu a").each(function(a){var b=$(this);setTimeout(function(){b.css({transform:"translateX("+-3*a+"px) translateY("+-4*a+"px) scale(1.05, 1.05)","-webkit-transform":"translateX("+-3*a+"px) translateY("+-4*a+"px) scale(1.05, 1.05)","-moz-transform":"translateX("+-3*a+"px) translateY("+-4*a+"px) scale(1.05, 1.05)","-o-transform":"translateX("+-3*a+"px) translateY("+-4*a+"px) scale(1.05, 1.05)","-ms-transform":"translateX("+-3*a+"px) translateY("+-4*a+"px) scale(1.05, 1.05)",opacity:"0"})},10*a)}),$(".header-menu-close").removeClass("pointer-events")}),$(".header-menu-close").click(function(){$(".header-menu a").each(function(a){var b=$(this);setTimeout(function(){b.removeClass("header-menu-inactive-"+a)},40*a)}),$(this).removeClass("pointer-events")}),$("tabs a").click(function(){return preventDefault(),!1}),$(function(){FastClick.attach(document.body)}),$(function(){$(".preload-image").lazyload({threshold:4e3,effect:"fadeIn",container:$("#page-content-scroll")})}),$(".hide-notification").click(function(){return $(this).parent().slideUp(),!1}),$(".tap-hide").click(function(){return $(this).slideUp(),!1}),$(".activate-toggle").click(function(){return $(this).parent().find(".toggle-content").slideToggle(250),$(this).parent().find("input").each(function(){this.checked=!this.checked}),$(this).parent().find(".toggle-45").toggleClass("rotate-45 color-red-dark"),$(this).parent().find(".toggle-180").toggleClass("rotate-180 color-red-dark"),!1}),$(".accordion-item").click(function(){return $(this).find(".accordion-content").slideToggle(250),$(this).find("i").toggleClass("rotate-135 color-red-dark"),!1}),$(".dropdown-toggle").click(function(){return $(this).parent().find(".dropdown-content").slideToggle(250),$(this).find("i:last-child").toggleClass("rotate-135"),!1}),$(".portfolio-wide-caption a").click(function(){return $(this).parent().parent().find(".portfolio-wide-content").slideToggle(250),!1}),function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){for(d=a.target;!f.test(d.nodeName);)d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}}(document,window.navigator,"standalone");var a={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return a.Android()||a.BlackBerry()||a.iOS()||a.Opera()||a.Windows()}};a.any()||($(".show-blackberry, .show-ios, .show-windows, .show-android").addClass("disabled"),$(".show-no-detection").removeClass("disabled"),$("#page-content-scroll").css("right","0px")),a.Android()&&($("head").append('<meta name="theme-color" content="#000000"> />'),$(".show-android").removeClass("disabled"),$(".show-blackberry, .show-ios, .show-windows, .show-download").addClass("disabled"),$("#page-content-scroll, .sidebar-scroll").css("right","0px"),$(".set-today").addClass("mobile-date-correction")),a.BlackBerry()&&($(".show-blackberry").removeClass("disabled"),$(".show-android, .show-ios, .show-windows, .show-download").addClass("disabled"),$("#page-content-scroll, .sidebar-scroll").css("right","0px")),a.iOS()&&($(".show-ios").removeClass("disabled"),$(".show-blackberry, .show-android, .show-windows, .show-download").addClass("disabled"),$("#page-content-scroll, .sidebar-scroll").css("right","0px"),$(".set-today").addClass("mobile-date-correction")),a.Windows()&&($(".show-windows").removeClass("disabled"),$(".show-blackberry, .show-ios, .show-android, .show-download").addClass("disabled"),$("#page-content-scroll, .sidebar-scroll").css("right","0px")),$(".gallery a, .show-gallery").swipebox(),$(".adaptive-one").click(function(){return $(".portfolio-switch").removeClass("active-adaptive"),$(this).addClass("active-adaptive"),$(".portfolio-adaptive").removeClass("portfolio-adaptive-two portfolio-adaptive-three"),$(".portfolio-adaptive").addClass("portfolio-adaptive-one"),!1}),$(".adaptive-two").click(function(){return $(".portfolio-switch").removeClass("active-adaptive"),$(this).addClass("active-adaptive"),$(".portfolio-adaptive").removeClass("portfolio-adaptive-one portfolio-adaptive-three"),$(".portfolio-adaptive").addClass("portfolio-adaptive-two"),!1}),$(".adaptive-three").click(function(){return $(".portfolio-switch").removeClass("active-adaptive"),$(this).addClass("active-adaptive"),$(".portfolio-adaptive").removeClass("portfolio-adaptive-two portfolio-adaptive-one"),$(".portfolio-adaptive").addClass("portfolio-adaptive-three"),!1}),$("#page-content-scroll").on("scroll",function(){var a=$("#page-content-scroll")[0].scrollHeight,b=$(this).scrollTop()<=200,c=$(this).scrollTop()>=0,d=$(this).scrollTop()>=a-($(window).height()+100);1==b?$(".back-to-top-badge").removeClass("back-to-top-badge-visible"):1==c&&$(".back-to-top-badge").addClass("back-to-top-badge-visible"),1==d&&$(".back-to-top-badge").removeClass("back-to-top-badge-visible")}),$(".back-to-top-badge, .back-to-top").click(function(a){a.preventDefault(),$("#page-content-scroll").animate({scrollTop:0},250)}),$("body").append('<div class="share-bottom-tap-close"></div>'),$(".show-share-bottom, .show-share-box").click(function(){return $(".share-bottom-tap-close").addClass("share-bottom-tap-close-active"),$(".share-bottom").toggleClass("active-share-bottom"),!1}),$(".close-share-bottom, .share-bottom-tap-close").click(function(){return $(".share-bottom-tap-close").removeClass("share-bottom-tap-close-active"),$(".share-bottom").removeClass("active-share-bottom"),!1});var b=new Date,c=b.getMonth()+1,d=b.getDate();c<10&&(c="0"+c),d<10&&(d="0"+d);var e=b.getFullYear()+"-"+c+"-"+d;$(".set-today").val(e),$(function(){$(".countdown-class").countdown({date:"June 7, 2087 15:03:26"})}),$("#copyright-year")[0]&&document.getElementById("copyright-year").appendChild(document.createTextNode((new Date).getFullYear()));var f="false";jQuery(document).ready(function(a){function b(b,c){f="true";var d=a("#"+b).serialize();a.post(a("#"+b).attr("action"),d,function(c){a("#"+b).hide(),a("#formSuccessMessageWrap").fadeIn(500)})}function c(c,d){a(".formValidationError").hide(),a(".fieldHasError").removeClass("fieldHasError"),a("#"+c+" .requiredField").each(function(e){if(""==a(this).val()||a(this).val()==a(this).attr("data-dummy"))return a(this).val(a(this).attr("data-dummy")),a(this).focus(),a(this).addClass("fieldHasError"),a("#"+a(this).attr("id")+"Error").fadeIn(300),!1;if(a(this).hasClass("requiredEmailField")){var g=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,h="#"+a(this).attr("id");if(!g.test(a(h).val()))return a(h).focus(),a(h).addClass("fieldHasError"),a(h+"Error2").fadeIn(300),!1}"false"==f&&e==a("#"+c+" .requiredField").length-1&&b(c,d)})}a("#formSuccessMessageWrap").hide(0),a(".formValidationError").fadeOut(0),a('input[type="text"], input[type="password"], textarea').focus(function(){a(this).val()==a(this).attr("data-dummy")&&a(this).val("")}),a("input, textarea").blur(function(){""==a(this).val()&&a(this).val(a(this).attr("data-dummy"))}),a("#contactSubmitButton").click(function(){return c(a(this).attr("data-formId")),!1})});var h=(new Swiper(".pricing-table-slider",{pagination:".swiper-pagination",paginationClickable:!0,slidesPerView:3,nextButton:".pricing-table-next",prevButton:".pricing-table-prev",spaceBetween:50,breakpoints:{1024:{slidesPerView:2,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:1,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}}),new Swiper(".scrolling-menu",{scrollbarHide:!0,freeMode:!0,freeModeMomentum:!0,freeModeMomentumRatio:1,slidesPerView:11,spaceBetween:0,grabCursor:!0,breakpoints:{1024:{slidesPerView:8,spaceBetween:40},768:{slidesPerView:6,spaceBetween:30},640:{slidesPerView:5,spaceBetween:20},350:{slidesPerView:4,spaceBetween:10},320:{slidesPerView:3,spaceBetween:10}}}));if($(".scrolling-menu a").hasClass("active-menu-item")){var i=$(".active-menu-item").index();h.slideTo(i,250)}var k=(new Swiper(".coverpage-cube",{pagination:".coverpage-slider .swiper-pagination",paginationClickable:!0,loop:!0,effect:"cube",grabCursor:!0,cube:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.94}}),new Swiper(".coverpage-classic",{onSlideChangeStart:l,pagination:".coverpage-slider .swiper-pagination",nextButton:".flashing-arrows-1",prevButton:".flashing-arrows-2",paginationClickable:!0}));new Swiper(".category-slider",{pagination:".swiper-pagination",paginationClickable:!0,slidesPerView:5,spaceBetween:20,breakpoints:{1024:{slidesPerView:6,spaceBetween:20},768:{slidesPerView:5,spaceBetween:10},640:{slidesPerView:3,spaceBetween:5},320:{slidesPerView:3,spaceBetween:5}}}),new Swiper(".store-thumbnails",{pagination:".swiper-pagination",paginationClickable:!0,slidesPerView:5,spaceBetween:20,breakpoints:{1024:{slidesPerView:6,spaceBetween:20},768:{slidesPerView:5,spaceBetween:10},640:{slidesPerView:2,spaceBetween:5},320:{slidesPerView:2,spaceBetween:5}}}),new Swiper(".home-round-slider",{pagination:".swiper-pagination",paginationClickable:!0,slidesPerView:3,spaceBetween:20,breakpoints:{1024:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:2,spaceBetween:10},660:{slidesPerView:1,spaceBetween:5},320:{slidesPerView:1,spaceBetween:5}}});setTimeout(function(){new Swiper(".coverflow-thumbnails",{pagination:".swiper-pagination",effect:"coverflow",autoplay:3e3,autoplayDisableOnInteraction:!1,spaceBetween:-30,loop:!0,grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflow:{rotate:35,stretch:-50,depth:-190,modifier:1,slideShadows:!0}})},300);new Swiper(".coverflow-slider",{pagination:".swiper-pagination",effect:"coverflow",autoplay:3e3,autoplayDisableOnInteraction:!1,loop:!0,grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflow:{rotate:60,stretch:-60,depth:400,modifier:1,slideShadows:!1}}),new Swiper(".staff-slider",{nextButton:".next-staff-slider",prevButton:".prev-staff-slider",autoplay:5e3,loop:!0,autoplayDisableOnInteraction:!1,slidesPerView:3,spaceBetween:20,breakpoints:{1024:{slidesPerView:3,spaceBetween:20},768:{slidesPerView:2,spaceBetween:10},640:{slidesPerView:1,spaceBetween:5}}}),new Swiper(".expanding-slider",{autoplay:3e3,autoplayDisableOnInteraction:!1,slidesPerView:4,spaceBetween:20,breakpoints:{1024:{slidesPerView:4,spaceBetween:20},768:{slidesPerView:3,spaceBetween:10},640:{slidesPerView:1,spaceBetween:5},0:{slidesPerView:1,spaceBetween:5}}}),new Swiper(".home-slider",{autoplay:4e3,loop:!0}),new Swiper(".news-slider",{autoplay:4e3,loop:!0}),new Swiper(".single-item",{autoplay:4e3,loop:!0}),new Swiper(".quote-slider",{autoplay:4e3,loop:!0}),new Swiper(".store-slider",{autoplay:3e3,loop:!0}),new Swiper(".store-slider-2",{autoplay:3e3,loop:!0}),new Swiper(".text-slider",{autoplay:2e3,loop:!0});x(),$(window).resize(function(){x(),H()}),$(".map-text, .overlay").click(function(){return $(".map-text, .map-fullscreen .overlay").addClass("hide-map"),$(".deactivate-map").removeClass("hide-map"),!1}),$(".deactivate-map").click(function(){return $(".map-text, .map-fullscreen .overlay").removeClass("hide-map"),$(".deactivate-map").addClass("hide-map"),!1}),$(".toggle-title").click(function(){return $(this).parent().find(".toggle-content").slideToggle(250),$(this).find("i").toggleClass("rotate-toggle"),!1}),$(".checklist-item").click(function(){$(this).find(".ion-ios-circle-outline").toggle(250),$(this).find("strong").toggleClass("completed-checklist"),$(this).find(".ion-checkmark, .ion-android-close, .ion-ios-checkmark-outline, .ion-checkmark-circled, .ion-close-circled, .ion-ios-close-outline").toggle(250)}),$(".checklist-item").hasClass("checklist-item-complete")&&($(".checklist-item-complete").find(".ion-ios-circle-outline").toggle(250),$(".checklist-item-complete").find("strong").toggleClass("completed-checklist"),$(".checklist-item-complete").find(".ion-checkmark, .ion-android-close, .ion-ios-checkmark-outline, .ion-checkmark-circled, .ion-close-circled, .ion-ios-close-outline").toggle(250)),$(".tasklist-incomplete").click(function(){return $(this).removeClass("tasklist-incomplete"),$(this).addClass("tasklist-completed"),!1}),$(".tasklist-item").click(function(){return $(this).toggleClass("tasklist-completed"),!1}),$(".interest-box").click(function(){return $(this).toggleClass("transparent-background"),$(this).find(".interest-first-icon, .interest-second-icon").toggleClass("hide-interest-icon"),!1}),$(function(){$(".thumb-layout-page a").slice(0,5).show(),$(".load-more-thumbs").click(function(a){a.preventDefault(),$(".thumb-layout-page a:hidden").slice(0,5).show(0),0==$(".thumb-layout-page a:hidden").length&&$(this).hide()})}),$(function(){$(".card-large-layout-page .card-large-layout").slice(0,2).show(),$(".load-more-large-cards").click(function(a){a.preventDefault(),$(".card-large-layout-page .card-large-layout:hidden").slice(0,2).show(0),0==$(".card-large-layout-page div:hidden").length&&$(this).hide()})}),$(function(){$(".card-small-layout-page .card-small-layout").slice(0,3).show(),$(".load-more-small-cards").click(function(a){a.preventDefault(),$(".card-small-layout-page .card-small-layout:hidden").slice(0,3).show(0),0==$(".card-small-layout-page a:hidden").length&&$(this).hide()})}),$(".activate-tab-1").click(function(){return $("#tab-2, #tab-3").slideUp(250),$("#tab-1").slideDown(250),$(".home-tabs a").removeClass("active-home-tab"),$(".activate-tab-1").addClass("active-home-tab"),!1}),$(".activate-tab-2").click(function(){return $("#tab-1, #tab-3").slideUp(250),$("#tab-2").slideDown(250),$(".home-tabs a").removeClass("active-home-tab"),$(".activate-tab-2").addClass("active-home-tab"),!1}),$(".activate-tab-3").click(function(){return $("#tab-1, #tab-2").slideUp(250),$("#tab-3").slideDown(250),$(".home-tabs a").removeClass("active-home-tab"),$(".activate-tab-3").addClass("active-home-tab"),!1}),$("ul.tabs li").click(function(){var a=$(this).attr("data-tab");$(this).parent().parent().find("ul.tabs li").removeClass("current"),$(this).parent().parent().find(".tab-content").removeClass("current"),$(this).addClass("current"),$("#"+a).addClass("current")}),$(function(){$(".add-qty").on("click",function(){var a=$(this).closest("div").find(".qty"),b=parseInt(a.val());return isNaN(b)||a.val(b+1),!1}),$(".substract-qty").on("click",function(){var a=$(this).closest("div").find(".qty"),b=parseInt(a.val());return!isNaN(b)&&b>0&&a.val(b-1),!1})}),$(".remove-cart-item").click(function(){return $(this).parent().parent().slideUp(250),!1}),$(".phone-pad-1").click(function(){var a=$(".mobileui-dialpad input").val();$(".mobileui-dialpad input").val(a+"1")}),$(".phone-pad-2").click(function(){var a=$(".mobileui-dialpad input").val();$(".mobileui-dialpad input").val(a+"2")}),$(".phone-pad-3").click(function(){var a=$(".mobileui-dialpad input").val();$(".mobileui-dialpad input").val(a+"3")}),$(".phone-pad-4").click(function(){var a=$(".mobileui-dialpad input").val();$(".mobileui-dialpad input").val(a+"4")}),$(".phone-pad-5").click(function(){var a=$(".mobileui-dialpad input").val();$(".mobileui-dialpad input").val(a+"5")}),$(".phone-pad-6").click(function(){var a=$(".mobileui-dialpad input").val();$(".mobileui-dialpad input").val(a+"6")}),$(".phone-pad-7").click(function(){var a=$(".mobileui-dialpad input").val();$(".mobileui-dialpad input").val(a+"7")}),$(".phone-pad-8").click(function(){var a=$(".mobileui-dialpad input").val();$(".mobileui-dialpad input").val(a+"8")}),$(".phone-pad-9").click(function(){var a=$(".mobileui-dialpad input").val();$(".mobileui-dialpad input").val(a+"9")}),$(".phone-pad-0").click(function(){var a=$(".mobileui-dialpad input").val();$(".mobileui-dialpad input").val(a+"0")}),$(".phone-pad-star").click(function(){var a=$(".mobileui-dialpad input").val();$(".mobileui-dialpad input").val(a+"*")}),$(".phone-pad-hash").click(function(){var a=$(".mobileui-dialpad input").val();$(".mobileui-dialpad input").val(a+"#")}),$(".call-dial").click(function(){$(this).toggleClass("bg-red-dark"),$(this).find("i").toggleClass("rotate-135"),$(".mobileui-dialpad-numbers").slideToggle(250),$(".mobileui-dialpad-controls").slideToggle(250)}),new Date($.now());var y=new Date,z=y.getHours()+":"+("0"+y.getMinutes()).substr(-2);$(".mobileui-lockscreen-header h3").html(z);var A=["January","February","March","April","May","June","July","August","September","October","November","December"],B=new Date,C=B.getDate(),D=B.getFullYear(),E=C,F=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),G=F[new Date(E).getDay()];$(".mobileui-lockscreen-header p").html(G+", "+C+"  "+A[B.getMonth()]+"  "+D),H()}setTimeout(a,0),$(function(){"use strict";var b={prefetch:!1,cacheLength:0,blacklist:".default-link",forms:"contactForm",onStart:{duration:50,render:function(a){a.addClass("is-exiting"),c.restartCSSAnimations(),$(".page-preloader").addClass("show-preloader"),$("#page-content, .header, .footer-menu-open, .scrolling-menu-fixed").css({transform:"translateX("+1*$(window).width()+"px)","-webkit-transform":"translateX("+1*$(window).width()+"px)","-moz-transform":"translateX("+1*$(window).width()+"px)","-o-transform":"translateX("+1*$(window).width()+"px)","-ms-transform":"translateX("+1*$(window).width()+"px)",transition:"all 50ms ease"}),$(".header-menu, .header-menu-background, .scrolling-menu-fixed").css({opacity:"0",transition:"all 20ms ease"})}},onReady:{duration:0,render:function(a,b){a.removeClass("is-exiting"),a.html(b),$(".page-preloader").addClass("show-preloader"),$("#page-content, .header, .footer-menu-open").css({transform:"translateX("+-1*$(window).width()+"px)","-webkit-transform":"translateX("+-1*$(window).width()+"px)","-moz-transform":"translateX("+-1*$(window).width()+"px)","-o-transform":"translateX("+-1*$(window).width()+"px)","-ms-transform":"translateX("+-1*$(window).width()+"px)",transition:"all 0ms ease"}),$(".header-menu, .header-menu-background, .scrolling-menu-fixed").css({opacity:"0",transition:"all 20ms ease"})}},onAfter:function(b,c){setTimeout(a,0),$(".page-preloader").removeClass("show-preloader"),setTimeout(function(){$("#page-content, .header, .footer-menu-open").css({transform:"translateX(0px)","-webkit-transform":"translateX(0px)","-moz-transform":"translateX(0px)","-o-transform":"translateX(0px)","-ms-transform":"translateX(0px)",transition:"all 50ms ease"})},250),$(".header-menu, .header-menu-background, .scrolling-menu-fixed").css({opacity:"1",transition:"all 20ms ease"})}},c=$("#page-transitions").smoothState(b).data("smoothState")})});