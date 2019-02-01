var AV = {
    initialize: function () {
        AV.loadEvents();
    },
    loadEvents: function () {
        AV.loadNavEvents();
        AV.loadKeyboardEvents();
        // AV.loadBGEvents();
    },
    closeLoader: function () {
        setTimeout(function () {
            $('.loading').removeClass('loading');
            // AV.loadInitialBG();
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
    loadInitialBG: function () {
        var imgUrl = AV.bgImgList[AV.bgImgIndex];
        var bgUrl = "url('" + imgUrl + "')";
        var bgImg = new Image();
        bgImg.onload = function () {
            $('.page-wrap>.bg-img').css('background-image', bgUrl);
            $('.page-wrap>.bg-img').removeClass('loading');
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
            AV.loadNextBg();
        }, 20000);
    },
    loadNextBg: function (reverse) {
        if (reverse === void 0) { reverse = false; }
        if ($('.bg-loading-icon, .page-wrap').hasClass('loading')) {
            return true;
        }
        else {
            $('.bg-loading-icon').toggleClass('loading');
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
        if ($('.page-wrap>.bg-img').attr('src') === imgUrl) {
            return true;
        }
        var bgImg = new Image();
        bgImg.onload = function () {
            $('.page-wrap>.bg-img').css('background-image', bgUrl);
            setTimeout(function () {
                $('.bg-loading-icon').toggleClass('loading');
            }, 200);
        };
        bgImg.src = imgUrl;
    },
    navToggle: function () {
        $('.nav-btn').click();
    },
    loadNavEvents: function () {
        $('.nav-btn,.nav-menu-item>.content>a,.nav-menu-grid').click(function () {
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
    bgImgIndex: 0,
    bgImgList: [
        'assets/img/bg/code-lq.png'
    ]
};
