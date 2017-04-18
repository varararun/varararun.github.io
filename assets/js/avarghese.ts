let AV = {
  initialize: () => {
    AV.loadEvents();
  },
  loadEvents: () => {
    AV.loadMusicBtnEvents();
    AV.loadNavEvents();
    AV.loadTypedJS();
    AV.loadBGEvents();
    AV.loadTooltips();
    AV.loadVREvents();
    AV.loadKeyboardEvents();
    // AV.loadScrollEvents();
    console.info('All events loaded.');
  },
  loadKeyboardEvents: () => {
    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 40: // spacebar
          if ($('nav').hasClass('nav-open')) {
            if ($('nav')[0].scrollHeight - $('nav').scrollTop() < $('nav').outerHeight() + 5) {
              $('.nav-btn').click();
            }
          }
          break;
        case 27: // esc
          if ($('nav').hasClass('nav-open')) {
            $('.nav-btn').click();
          } else if ($('.bg-vr').hasClass('bg-vr-visible')) {
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
      }
    };
  },
  loadVREvents: () => {
    $('.vr-btn').click(() => {
      $('.vr-btn').toggleClass('vr-close');
      $('.vr-btn>.vr-icon>.close-btn,.vr-btn>.vr-icon>.open-btn').addClass('animated bounceIn');
      $('.bg-vr').toggleClass('bg-vr-visible');
      if ($('.vr-btn').hasClass('vr-close')) {
        $('.vr-drag-demo').addClass('demo');
        $('.shuffle-vr-btn').show();
      } else {
        $('.vr-drag-demo').removeClass('demo');
        $('.shuffle-vr-btn').hide();
      }
    });
    $('.vr-drag-demo').click(() => {
      $('.vr-drag-demo').removeClass('demo');
    });
    $('.shuffle-vr-btn').click(() => {
      AV.loadNextVR();
    });
  },
  loadScrollEvents: () => {
    $('body').bind('mousewheel DOMMouseScroll', (e) => {
      let delta = ((<WheelEvent>e.originalEvent).wheelDelta || -(<WheelEvent>e.originalEvent).detail);
      let conditions = delta < 0 && !$('.nav').hasClass('nav-open') && ($('.page-wrap>.content')[0].scrollHeight - $('.page-wrap>.content').scrollTop() === $('.page-wrap>.content').outerHeight());
      if (conditions) {
        $('.nav-btn').click();
      }
    });
  },
  loadTooltips: () => {
    $('[data-toggle="tooltip"]').tooltip();
  },
  loadBGEvents: () => {
    $('.shuffle-bg-btn').click(() => {
      AV.loadNextBg();
    });
    setInterval(() => {
      AV.loadNextBg();
    }, 10000);
  },
  loadNextBg: () => {
    let imgUrl = AV.bgImgList[~~(Math.random() * AV.bgImgList.length)];
    let bgUrl = `url('${imgUrl}')`;
    if ($('.page-wrap>.bg-img').css('background').includes('puertorico-h.jpg') || $('.bg-vr.bg-vr-visible').css('visibility') === 'visible') {
      return;
    }
    if ($('.page-wrap>.bg-img').attr('src') === imgUrl) {
      return;
    }
    $('.shuffle-bg-btn').hide();
    let bgImg = new Image();
    bgImg.onload = () => {
      $('.page-wrap>.bg-img').css('background', bgUrl);
      $('.shuffle-bg-btn').show();
    };
    bgImg.src = imgUrl;
  },
  loadNextVR: () => {
    let imgUrl = AV.vrImgList[~~(Math.random() * AV.vrImgList.length)];
    if ($('.page-wrap>.bg-img').css('background').includes('puertorico-h.jpg') || !($('.bg-vr.bg-vr-visible').css('visibility') === 'visible')) {
      return;
    }
    if ($('a-sky').attr('src') === imgUrl) {
      return;
    }
    $('.bg-vr').addClass('bg-vr-loading');
    $('.shuffle-vr-btn').hide();
    let bgImg = new Image();
    bgImg.onload = () => {
      $('a-sky').attr('src', imgUrl);
      $('.bg-vr').removeClass('bg-vr-loading');
      $('.shuffle-vr-btn').show();
    };
    bgImg.src = imgUrl;
  },
  loadTypedJS: () => {
    $('.typed-hashtags').typed({
      strings: ['#engineer', '#traveler', '#husband', '#engineer&nbsp;#traveler\n#husband'],
      contentType: 'html',
      startDelay: 1000,
      backDelay: 1000,
      typeSpeed: 50,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|'
    });
  },
  loadNavEvents: () => {
    $('.nav-btn,.nav-menu-item>.content>a,.nav-menu-grid').click(() => {
      $('.nav-btn').toggleClass('nav-close');
      $('.nav-btn>.nav-icon>.close-btn,.nav-btn>.nav-icon>.open-btn').addClass('animated bounceIn');
      $('nav').toggleClass('nav-open');
      $('.page-wrap').toggleClass('page-wrap-disable');
      $('.page-wrap>.content').toggleClass('content-hidden');
    });
    $('.nav-menu-item').on('mousemove', AV.panImage);
    $('.open-nav-btn').click(() => {
      $('.nav-btn').click();
    });
  },
  loadMusicBtnEvents: () => {
    $('.music-btn').click(() => {
      $('.music-btn').toggleClass('music-play');
      $('.play-btn,.pause-btn').addClass('animated bounceIn');
      try {
        if ($('.music-btn').hasClass('music-play')) {
          $('#bg-audio').play();
        } else {
          $('#bg-audio').pause();
        }
      } catch (err) { }
    });
  },
  panImage: (e) => {
    let item = e.target.parentNode;
    $(item).children('.bg-img').css({
      'transform-origin': `${((e.pageX - $(item).offset().left) / $(item).width()) * 100}% ${((e.pageY - $(item).offset().top) / $(item).height()) * 100}%`
    });
  },
  bgImgList: [
    'assets/img/bg/muaythai.jpg',
    'assets/img/bg/phangngabay.jpg',
    'assets/img/bg/chicago.jpg',
    'assets/img/bg/colorado.jpg',
    'assets/img/bg/costarica.jpg',
    'assets/img/bg/denver.jpg',
    'assets/img/bg/eastcoastbeach.jpg',
    'assets/img/bg/parcguell.jpg',
    'assets/img/bg/phuket.jpg',
    'assets/img/bg/positano.jpg',
    'assets/img/bg/puertorico.jpg',
    'assets/img/bg/rome.jpg',
    'assets/img/bg/magicmountain.jpg',
    'assets/img/bg/manava.jpg',
    'assets/img/bg/moorea.jpg',
    'assets/img/bg/moorealagoon.jpg',
    'assets/img/bg/twobays.jpg',
    'assets/img/bg/santhiya.jpg',
    'assets/img/bg/sanfrancisco.jpg'
  ],
  vrImgList: [
    'assets/img/vr/example.jpg'
  ]
};

