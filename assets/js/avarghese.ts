let AV = {
  initialize: () => {
    AV.loadEvents();
  },
  loadEvents: () => {
    AV.loadNavEvents();
    AV.loadKeyboardEvents();
    AV.loadBGEvents();
  },
  closeLoader: () => {
    setTimeout(()=> {
      $('#loader').addClass('hide');    
    },2000);    
    setTimeout(()=> {
      $('#loader').remove();    
    },3000);    
  },
  loadInitialBG: () => {
    let imgUrl = AV.bgImgList[AV.bgImgIndex];
    let bgUrl = `url('${imgUrl}')`;
    let bgImg = new Image();
    bgImg.onload = () => {
      $('.page-wrap>.bg-img').css('background-image', bgUrl);
      $('.page-wrap>.bg-img').removeClass('loading');
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
  loadBGEvents: () => {
    setInterval(() => {
      AV.loadNextBg();
    }, 20000);
    AV.loadInitialBG();
    $('.page-wrap').removeClass('loading');
  },
  loadNextBg: (reverse: boolean = false) => {
    AV.bgImgIndex = reverse ? --AV.bgImgIndex : ++AV.bgImgIndex;
    if (AV.bgImgIndex < 0) {
      AV.bgImgIndex = AV.bgImgList.length - 1;
    } else if (!AV.bgImgList[AV.bgImgIndex]) {
      AV.bgImgIndex = 0;
    }
    let imgUrl = AV.bgImgList[AV.bgImgIndex];
    let bgUrl = `url('${imgUrl}')`;
    if ($('.page-wrap>.bg-img').attr('src') === imgUrl) {
      return true;
    }
    let bgImg = new Image();
    bgImg.onload = () => {
      $('.page-wrap>.bg-img').css('background-image', bgUrl);
    };
    bgImg.src = imgUrl;
  },
  navToggle: () => {
    $('.nav-btn').click();
  },
  loadNavEvents: () => {
    $('.nav-btn,.nav-menu-item>.content>a,.nav-menu-grid').click(() => {
      $('.nav-btn').toggleClass('nav-close');
      $('.nav-btn>.nav-icon>.close-btn').addClass('animated bounceIn');
      $('nav').toggleClass('nav-open');
      $('.page-wrap').toggleClass('page-wrap-disable');
      $('.page-wrap>.content').toggleClass('content-hidden');
    });
    $('.nav-menu-item').on('mousemove', AV.panImage);
  },
  panImage: (e: any) => {
    let item = e.target.parentNode;
    $(item).children('.bg-img').css({
      'transform-origin': `${((e.pageX - $(item).offset().left) / $(item).width()) * 100}% ${((e.pageY - $(item).offset().top) / $(item).height()) * 100}%`
    });
  },
  bgImgIndex: 0,
  bgImgList: [
    'https://i.imgur.com/R1KRe85h.jpg',
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
  ]
};

