var AV = {
    initialize: function () {
        AV.loadEvents();
    },
    loadEvents: function () {
        $('#loader').addClass('loading');
        AV.loadNavEvents();
        AV.loadKeyboardEvents();
        AV.loadLinkEvents();
        AV.loadBGEvents();
        AV.loadMouseEvents();
    },
    loading: function () {
        $('.bg-img, .bg-overlay, .content-container').addClass('loading');
    },
    closeLoader: function () {
        setTimeout(function () {
            $('.loading').removeClass('loading');
        }, 1000);
        setTimeout(function () {
            $('#loader').remove();
        }, 1500);
    },
    loadNavImages: function () {
        $('img.nav-item-bg-img').each(function (index, img) {
            var src = $(img).attr('data-src');
            $(img).attr({ 'src': src });
        });
    },
    loadLinkEvents: function () {
        $("a[animate-link='true']").click(function (e) {
            AV.loading();
            e.preventDefault();
            setTimeout(function () {
                window.open(e.currentTarget.href, '_self');
            }, 1000);
        });
    },
    loadKeyboardEvents: function () {
        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 27: // esc
                    if ($('nav').hasClass('nav-open')) {
                        $('.nav-btn').click();
                    }
                    break;
                case 8: // delete/backspace
                    if ($('nav').hasClass('nav-open')) {
                        $('.nav-btn').click();
                    }
                    break;
                case 32: // spacebar
                    $('.nav-btn').click();
                    break;
                case 37: // left arrow
                    AV.loadNextBg(true);
                    break;
                case 38: // up arrow
                    $('.nav-btn').click();
                    break;
                case 39: // right arrow
                    AV.loadNextBg();
                    break;
                case 40: // down arrow
                    $('.nav-btn').click();
                    break;
                case 190: // right angle
                    AV.loadNextBg();
                    break;
                case 188: // left angle
                    AV.loadNextBg(true);
                    break;
            }
        };
    },
    loadBGEvents: function () {
        setInterval(function () {
            // AV.loadNextBg();
        }, 20000);
    },
    loadNextBg: function (reverse) {
        if (reverse === void 0) { reverse = false; }
        if ($('#loader').hasClass('loading') ||
            $('.page-wrap').hasClass('loading') ||
            $('.bg-loading-icon').hasClass('loading-img') ||
            $('.bg-img.left').length > 0 ||
            $('.bg-img.right').length > 0 ||
            $('nav').hasClass('nav-open')) {
            return true;
        }
        else {
            $('.bg-loading-icon, .bg-btn').toggleClass('loading-img');
            AV.parallaxDisabled = true;
        }
        AV.bgImgIndex = reverse ? --AV.bgImgIndex : ++AV.bgImgIndex;
        if (AV.bgImgIndex < 0) {
            AV.bgImgIndex = AV.bgImgList.length - 1;
        }
        else if (!AV.bgImgList[AV.bgImgIndex]) {
            AV.bgImgIndex = 0;
        }
        var imgUrl = AV.bgImgList[AV.bgImgIndex];
        var bgUrl = "url('" + imgUrl + "')";
        if ($('.page-wrap>.bg-img.center').css('background-image') === imgUrl) {
            return true;
        }
        var bgImg = new Image();
        bgImg.onload = function () {
            var direction = reverse ? 'right' : 'left';
            var selector = ".page-wrap>.bg-img." + direction;
            $('.page-wrap').prepend("<div class=\"bg-img " + direction + "\"></div>");
            $(selector).css('background-image', bgUrl);
            setTimeout(function () {
                $(selector).addClass('load-img');
            }, 500);
            setTimeout(function () {
                $('.page-wrap>.bg-img.center').css('background-image', bgUrl);
            }, 2000);
            setTimeout(function () {
                $('.bg-loading-icon, .bg-btn').toggleClass('loading-img');
            }, 2000);
            setTimeout(function () {
                $(selector).remove();
                AV.parallaxDisabled = false;
            }, 2600);
        };
        bgImg.src = imgUrl;
    },
    navToggle: function () {
        $('.nav-btn').click();
    },
    loadNavEvents: function () {
        $('.nav-btn,.nav-menu-item>.content>a,.nav-menu-grid,.copyright>a').click(function () {
            if ($('#loader').length > 0) {
                return false;
            }
            if ($('img.nav-item-bg-img').attr('src') === undefined) {
                AV.loadNavImages();
            }
            $('nav').toggleClass('nav-open');
            $('.page-wrap').toggleClass('page-wrap-disable');
            $('.page-wrap>.content-container').toggleClass('content-hidden');
        });
        $('.nav-menu-item').on('mousemove', AV.panImage);
    },
    panImage: function (e) {
        var item = e.target.parentNode;
        $(item).children('.nav-item-bg-img').css({
            'transform-origin': ((e.pageX - $(item).offset().left) / $(item).width()) * 100 + "% " + ((e.pageY - $(item).offset().top) / $(item).height()) * 100 + "%"
        });
    },
    loadMouseEvents: function () {
        $('.page-wrap').mousemove(function (e) {
            if (AV.parallaxDisabled) {
                return true;
            }
            AV.parallax(e, '.content-container', -100);
            AV.parallax(e, '.bg-img.center', -30);
        });
    },
    parallax: function (e, target, movement) {
        var $this = $('.page-wrap');
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;
        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        });
    },
    parallaxDisabled: false,
    bgImgIndex: 0,
    bgImgList: [
        'assets/img/bg/code.jpg',
        'assets/img/bg/puertorico.jpg',
        'assets/img/bg/dubrovnik.jpg',
        'assets/img/bg/eastcoastbeach.jpg',
        'assets/img/bg/phangngabay.jpg',
        'assets/img/bg/sanfrancisco.jpg',
        'assets/img/bg/positano.jpg',
        'assets/img/bg/rome.jpg',
        'assets/img/bg/varennaledge.jpg',
        'assets/img/bg/torontoniagra.jpg',
        'assets/img/bg/colorado.jpg',
        'assets/img/bg/gourdonledge.jpg',
        'assets/img/bg/moorearestaurant.jpg',
        'assets/img/bg/muaythai.jpg',
        'assets/img/bg/chicago.jpg',
        'assets/img/bg/costarica.jpg',
        'assets/img/bg/denver.jpg',
        'assets/img/bg/phuket.jpg',
        'assets/img/bg/magicmountain.jpg',
        'assets/img/bg/manava.jpg',
        'assets/img/bg/moorealagoon.jpg',
        'assets/img/bg/twobays.jpg',
        'assets/img/bg/santhiya.jpg',
        'assets/img/bg/segovialedge.jpg'
    ]
};
