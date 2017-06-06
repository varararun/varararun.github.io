let AV = {
  initialize: () => {
    AV.loadEvents();
  },
  loadEvents: () => {
    AV.loadNavEvents();
    AV.loadVREvents();
    AV.loadKeyboardEvents();
    AV.loadBGEvents();
    AV.loadScrollEvents();
    console.info('All events loaded.');
  },
  loadInitialBG: () => {
    let imgUrl = AV.bgImgList[AV.bgImgIndex];
    let bgUrl = `url('${imgUrl}')`;
    let bgImg = new Image();
    bgImg.onload = () => {
      $('.page-wrap>.bg-img').css('background-image', bgUrl);
      $('.page-wrap>.bg-img').removeClass('loading');
      $('.shuffle-bg-btn>i').toggleClass('fa-cog fa-spin').toggleClass('fa-retweet');
    };
    bgImg.src = imgUrl;
  },
  loadKeyboardEvents: () => {
    document.onkeydown = (e) => {
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
          } else if ($('.bg-vr').hasClass('bg-vr-visible')) {
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
  loadVREvents: () => {
    $('.vr-btn').hide();
    let imgUrl = AV.vrImgList[0];
    let bgUrl = `url('${imgUrl}')`;
    let bgImg = new Image();
    bgImg.onload = () => {
      $('.vr-btn').show();
    };
    bgImg.src = imgUrl;
    $('.vr-btn').click(() => {
      $('.vr-content').empty();
      if (!$('.vr-btn').hasClass('vr-close')) {
        $('.vr-content').append('<a-scene class="bg-vr"><a-sky class="vr-img" src="' + AV.vrImgList[0] + '" rotation="0 -130 0"></a-sky></a-scene>');
      };
      $('.vr-btn').toggleClass('vr-close');
      $('.vr-btn>.vr-icon>.close-btn,.vr-btn>.vr-icon>.open-btn').addClass('animated bounceIn');
      $('.bg-vr').toggleClass('bg-vr-visible');
      if ($('.vr-btn').hasClass('vr-close')) {
        $('.vr-drag-demo').addClass('demo');
      } else {
        $('.vr-drag-demo').removeClass('demo');
      }
    });
    $('.vr-drag-demo').click(() => {
      $('.vr-drag-demo').removeClass('demo');
    });
  },
  loadBGEvents: () => {
    $('.shuffle-bg-btn').click(() => {
      AV.loadNextBg();
    });
    setInterval(() => {
      AV.loadNextBg();
    }, 20000);
    AV.loadInitialBG();
    $('.page-wrap').removeClass('loading');
  },
  loadNextBg: (previous: boolean = false) => {
    if ($('.shuffle-bg-btn>i').hasClass('fa-cog')) {
      return true;
    }
    AV.bgImgIndex = previous ? --AV.bgImgIndex : ++AV.bgImgIndex;
    if (AV.bgImgIndex < 0) {
      AV.bgImgIndex = AV.bgImgList.length - 1;
    } else if (!AV.bgImgList[AV.bgImgIndex]) {
      AV.bgImgIndex = 0;
    }
    let imgUrl = AV.bgImgList[AV.bgImgIndex];
    let bgUrl = `url('${imgUrl}')`;
    if ($('.shuffle-bg-btn').css('display') === 'none') {
      return true;
    }
    if ($('.page-wrap>.bg-img').attr('src') === imgUrl) {
      return true;
    }
    $('.shuffle-bg-btn>i').toggleClass('fa-retweet').toggleClass('fa-cog fa-spin');
    let bgImg = new Image();
    bgImg.onload = () => {
      $('.page-wrap>.bg-img').css('background-image', bgUrl);
      setTimeout(() => {
        $('.shuffle-bg-btn>i').toggleClass('fa-retweet').toggleClass('fa-cog fa-spin');
      }, 200)
    };
    bgImg.src = imgUrl;
  },
  navToggle: () => {
    $('.nav-btn').click();
  },
  loadNavEvents: () => {
    $('.nav-btn,.nav-menu-item>.content>a,.nav-menu-grid').click(() => {
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
    $('.open-nav-btn').click(() => {
      if ($('.bg-vr').hasClass('bg-vr-visible')) {
        $('.vr-btn').click();
      }
      $('.nav-btn').click();
    });
  },
  loadScrollEvents: function () {
    $("body").bind("mousewheel DOMMouseScroll", function (e: any) {
      var delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);
      if (delta < 0) {
        // scroll up
        if (!$('.nav').hasClass('nav-open')) {
          $('.info-bar').removeClass('hidden');
        }
      } else if (delta > 0) {
        // scroll down
        $('.info-bar').addClass('hidden');
      }
    });
  },
  panImage: (e: any) => {
    let item = e.target.parentNode;
    $(item).children('.bg-img').css({
      'transform-origin': `${((e.pageX - $(item).offset().left) / $(item).width()) * 100}% ${((e.pageY - $(item).offset().top) / $(item).height()) * 100}%`
    });
  },
  bgImgIndex: 0,
  bgImgList: [
    'http://i.imgur.com/R1KRe85h.jpg',
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
    'http://i.imgur.com/PLBWJHx.jpg',
    'assets/img/vr/example.jpg'
  ]
};

