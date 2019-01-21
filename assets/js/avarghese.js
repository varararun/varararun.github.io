var AV = {
    initialize: function () {
        AV.loadEvents();
    },
    loadEvents: function () {
        AV.loadNavEvents();
        AV.loadKeyboardEvents();
        AV.loadBGEvents();
        AV.loadScrollEvents();
    },
    loadInitialBG: function () {
        var imgUrl = AV.bgImgList[AV.bgImgIndex];
        var bgUrl = "url('" + imgUrl + "')";
        var bgImg = new Image();
        bgImg.onload = function () {
            $('.page-wrap>.bg-img').css('background-image', bgUrl);
            $('.page-wrap>.bg-img').removeClass('loading');
            $('.shuffle-bg-btn>i').toggleClass('fa-cog fa-spin').toggleClass('fa-retweet');
        };
        bgImg.src = imgUrl;
    },
    loadKeyboardEvents: function () {
        document.onkeydown = function (e) {
            switch (e.keyCode) {
                case 27: // esc
                    if ($('nav').hasClass('nav-open')) {
                        $('.nav-btn').click();
                    }
                    if ($('.bg-vr').hasClass('bg-vr-visible')) {
                        $('.vr-btn').click();
                    }
                    break;
                case 8: // delete/backspace
                    if ($('nav').hasClass('nav-open')) {
                        $('.nav-btn').click();
                    }
                    else if ($('.bg-vr').hasClass('bg-vr-visible')) {
                        $('.vr-btn').click();
                    }
                    break;
                case 32: // spacebar
                    $('.nav-btn').click();
                    break;
                case 37: // left arrow
                    AV.loadNextBg(true);
                    break;
                case 38: // up arrow
                    break;
                case 39: // right arrow
                    AV.loadNextBg();
                    break;
                case 40: // down arrow
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
        $('.shuffle-bg-btn').click(function () {
            AV.loadNextBg();
        });
        setInterval(function () {
            AV.loadNextBg();
        }, 20000);
        AV.loadInitialBG();
        $('.page-wrap').removeClass('loading');
    },
    loadNextBg: function (previous) {
        if (previous === void 0) { previous = false; }
        if ($('.shuffle-bg-btn>i').hasClass('fa-cog')) {
            return true;
        }
        AV.bgImgIndex = previous ? --AV.bgImgIndex : ++AV.bgImgIndex;
        if (AV.bgImgIndex < 0) {
            AV.bgImgIndex = AV.bgImgList.length - 1;
        }
        else if (!AV.bgImgList[AV.bgImgIndex]) {
            AV.bgImgIndex = 0;
        }
        var imgUrl = AV.bgImgList[AV.bgImgIndex];
        var bgUrl = "url('" + imgUrl + "')";
        if ($('.shuffle-bg-btn').css('display') === 'none') {
            return true;
        }
        if ($('.page-wrap>.bg-img').attr('src') === imgUrl) {
            return true;
        }
        $('.shuffle-bg-btn>i').toggleClass('fa-retweet').toggleClass('fa-cog fa-spin');
        var bgImg = new Image();
        bgImg.onload = function () {
            $('.page-wrap>.bg-img').css('background-image', bgUrl);
            setTimeout(function () {
                $('.shuffle-bg-btn>i').toggleClass('fa-retweet').toggleClass('fa-cog fa-spin');
            }, 200);
        };
        bgImg.src = imgUrl;
    },
    navToggle: function () {
        $('.nav-btn').click();
    },
    loadNavEvents: function () {
        $('.nav-btn,.nav-menu-item>.content>a,.nav-menu-grid').click(function () {
            $('.info-bar').addClass('hidden');
            if ($('.bg-vr').hasClass('bg-vr-visible')) {
                $('.vr-btn').click();
            }
            $('.nav-btn').toggleClass('nav-close');
            $('.nav-btn>.nav-icon>.close-btn,.nav-btn>.nav-icon>.open-btn').addClass('animated bounceIn');
            $('nav').toggleClass('nav-open');
            $('.page-wrap').toggleClass('page-wrap-disable');
            $('.page-wrap>.content').toggleClass('content-hidden');
        });
        $('.nav-menu-item').on('mousemove', AV.panImage);
        $('.open-nav-btn').click(function () {
            if ($('.bg-vr').hasClass('bg-vr-visible')) {
                $('.vr-btn').click();
            }
            $('.nav-btn').click();
        });
    },
    loadScrollEvents: function () {
        $("body").bind("mousewheel DOMMouseScroll", function (e) {
            var delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);
            if (delta < 0) {
                // scroll up
                if (!$('.nav').hasClass('nav-open')) {
                    $('.info-bar').removeClass('hidden');
                }
            }
            else if (delta > 0) {
                // scroll down
                $('.info-bar').addClass('hidden');
            }
        });
    },
    panImage: function (e) {
        var item = e.target.parentNode;
        $(item).children('.bg-img').css({
            'transform-origin': ((e.pageX - $(item).offset().left) / $(item).width()) * 100 + "% " + ((e.pageY - $(item).offset().top) / $(item).height()) * 100 + "%"
        });
    },
    bgImgIndex: 0,
    bgImgList: [
        'https://i.imgur.com/R1KRe85h.jpg',
        // 'assets/img/bg/puertorico.jpg',
        'assets/img/bg/eastcoastbeach.jpg',
        'assets/img/bg/rome.jpg',
        'assets/img/bg/phangngabay.jpg',
        'assets/img/bg/sanfrancisco.jpg',
        'assets/img/bg/positano.jpg',
        'assets/img/bg/varennaledge.jpg',
        'assets/img/bg/torontoniagra.jpg',
        'assets/img/bg/colorado.jpg',
        'assets/img/bg/gourdonledge.jpg',
        'assets/img/bg/moorearestaurant.jpg',
        'assets/img/bg/muaythai.jpg',
        'assets/img/bg/chicago.jpg',
        'assets/img/bg/costarica.jpg',
        'assets/img/bg/denver.jpg',
        'assets/img/bg/parcguell.jpg',
        'assets/img/bg/phuket.jpg',
        'assets/img/bg/magicmountain.jpg',
        'assets/img/bg/manava.jpg',
        'assets/img/bg/moorea.jpg',
        'assets/img/bg/moorealagoon.jpg',
        'assets/img/bg/twobays.jpg',
        'assets/img/bg/santhiya.jpg',
        'assets/img/bg/segovialedge.jpg'
    ],
    vrImgList: [
        'https://i.imgur.com/PLBWJHx.jpg',
        'assets/img/vr/example.jpg'
    ]
};
