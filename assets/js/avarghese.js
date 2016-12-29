var AV = {
	initialize: function() {
		AV.loadEvents();
	},
	loadEvents: function() {
		new WOW().init();
		AV.loadMusicBtnEvents();
		AV.loadNavEvents();
		AV.loadTypedJS();
		AV.loadBGEvents();
		AV.loadTooltips();		
		AV.loadScrollEvents();
		AV.loadVREvents();
		AV.loadKeybaordEvents();
		console.info('all events loaded');
	},
	loadKeybaordEvents: function(){
		document.onkeydown = function(e) {			
		    switch (e.keyCode) {
		        case 38:
		            if(!$('nav').hasClass('nav-open')){
		            	$('.nav-btn').click();
		            }
		            break;
		        case 40:
		            if($('nav').hasClass('nav-open')){						
		            	if($('nav')[0].scrollHeight - $('nav').scrollTop() < $('nav').outerHeight() + 5 ){
		            		$('.nav-btn').click();	
		            	}		            	
		            }
		            break;
		        case 27:
		            if($('nav').hasClass('nav-open')){
		            	$('.nav-btn').click();
		            } else if($('.bg-vr').hasClass('bg-vr-visible')){
		            	$('.vr-btn').click();
		            }
		            break;
		          case 8:
		            if($('nav').hasClass('nav-open')){
		            	$('.nav-btn').click();
		            } else if($('.bg-vr').hasClass('bg-vr-visible')){
		            	$('.vr-btn').click();
		            }
		            break;
		        case 32:
		            $('.nav-btn').click();
		            break;
		    }
		};
	},
	loadVREvents: function(){
		$('.vr-btn').click(function() {
			$('.vr-btn').toggleClass('vr-close');
			$('.vr-btn>.vr-icon>.close-btn,.vr-btn>.vr-icon>.open-btn').addClass('animated bounceIn');			
			$('.bg-vr').toggleClass('bg-vr-visible');
			if($('.vr-btn').hasClass('vr-close')){
				$('.vr-drag-demo').addClass('demo');
				$('.shuffle-vr-btn').show();
			} else {
				$('.vr-drag-demo').removeClass('demo');
				$('.shuffle-vr-btn').hide();
			}
		});
		$('.vr-drag-demo').click(function(){
			$('.vr-drag-demo').removeClass('demo');			
		});
		$('.shuffle-vr-btn').click(function(){
			$('.shuffle-vr-btn').hide();
			setTimeout(function(){
				$('.shuffle-vr-btn').show();
			},1000);
			AV.loadNextVR();
		});
	},
	loadScrollEvents: function(){
		$('body').bind('mousewheel DOMMouseScroll', function (e) {
		    var delta = (e.originalEvent.wheelDelta || -e.originalEvent.detail);
		    var conditions = delta < 0 && !$('.nav').hasClass('nav-open') && ($('.page-wrap>.content')[0].scrollHeight - $('.page-wrap>.content').scrollTop() === $('.page-wrap>.content').outerHeight());
		    if (conditions) {
		    	$('.nav-btn').click();
		    }
		});
	},
	loadTooltips: function(){
		$('[data-toggle="tooltip"]').tooltip(); 
	},
	loadBGEvents: function(){
		$('.shuffle-bg-btn').click(function(){
			$('.shuffle-bg-btn').hide();
			setTimeout(function(){
				$('.shuffle-bg-btn').show();
			},1000);
			AV.loadNextBg();
		});
		setInterval(function(){			
			AV.loadNextBg();			
		},10000);
	},
	loadNextBg: function(){
		if($('.page-wrap>.bg-img').css('background').includes('puertorico-h.jpg') || $('.bg-vr.bg-vr-visible').css('visibility') === 'visible'){			
			return;
		}
		var imgUrl = AV.bgImgList[~~(Math.random() * AV.bgImgList.length)];
		var bgUrl = "url('" + imgUrl +"')";
		var bgImg = new Image();
		bgImg.onload = function(){
		   $('.page-wrap>.bg-img').css("background", bgUrl);
		};
		bgImg.src = imgUrl;
	},
	loadNextVR: function(){
		if($('.page-wrap>.bg-img').css('background').includes('puertorico-h.jpg') || !($('.bg-vr.bg-vr-visible').css('visibility') === 'visible')){			
			return;
		}
		$('.bg-vr').addClass('bg-vr-loading');
		var imgUrl = AV.vrImgList[~~(Math.random() * AV.vrImgList.length)];		
		var bgImg = new Image();
		bgImg.onload = function(){
		   $('a-sky').attr('src',imgUrl);
		   $('.bg-vr').removeClass('bg-vr-loading');
		};
		bgImg.src = imgUrl;
	},
	loadTypedJS: function() {
		$(".typed-hashtags").typed({
			strings: ["#engineer", "#traveler", "#husband", "#engineer&nbsp;#traveler\n#husband"],
			contentType: 'html',
			startDelay: 1000,
			backDelay: 1000,
			typeSpeed: 50,
			backSpeed: 100,
			showCursor: true,
			cursorChar: '|'
		});
	},
	loadNavEvents: function() {
		$('.nav-btn,.nav-menu-item>.content>a,.nav-menu-grid').click(function() {
			$('.nav-btn').toggleClass('nav-close');
			$('.nav-btn>.nav-icon>.close-btn,.nav-btn>.nav-icon>.open-btn').addClass('animated bounceIn');
			$('nav').toggleClass('nav-open');
		});
		$('.nav-menu-item').on('mousemove', AV.panImage);
		$('.open-nav-btn').click(function(){
			$('.nav-btn').click();
		});		
	},
	loadMusicBtnEvents: function() {
		$('.music-btn').click(function() {
			$('.music-btn').toggleClass('music-play');
			$('.play-btn,.pause-btn').addClass('animated bounceIn');
			try {
				if ($('.music-btn').hasClass('music-play')) {
					$('#bg-audio').play();
				} else {
					$('#bg-audio').pause();
				}
			} catch (err) {}
		});
	},
	panImage: function(e) {
		$(this).children('.bg-img').css({
			'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
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
		'assets/img/bg/santhiya.jpg'
	],
	vrImgList: [
		'assets/img/vr/example.jpg',
		'assets/img/vr/home.jpg',
		'assets/img/vr/zhabuki.jpg'
	]
};
AV.initialize();