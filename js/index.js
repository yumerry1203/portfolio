$(document).ready(function(){

  /*브라우저 창 사이즈 변경*/
  let wh = $(window).height();
  $(window).resize(function(){
    location.reload();
    $("html, body").stop().animate({ scrollTop:wh*page },500);
  }); 

  /* header - 메뉴 & pagination 클릭 */
  $("#dot span").click(function(){
    let idx = $(this).index();
    $("#dot span").eq(idx).addClass("active");
    $("#dot span").eq(idx).siblings().removeClass("active");
    $("html,body").stop().animate({ scrollTop:wh*idx},500); 
  });
  $(".gnb li").click(function(){
    let idx = $(this).index()+2;
    $("#dot span").eq(idx).addClass("active");
    $("#dot span").eq(idx).siblings().removeClass("active");
    $("html,body").stop().animate({ scrollTop:wh*idx},500); 
  });
  $("#career_move").click(function(){
    $("html,body").stop().animate({ scrollTop:wh*8},500); 
    $("#dot span").eq(7).addClass("active");
    $("#dot span").eq(7).siblings().removeClass("active");
  })

  /* index- color 변경 */
  const indexColor = document.querySelectorAll('.index');
    indexColor.forEach((color) => {
    color.style.backgroundColor = 'var(--' + color.dataset.color + ')';
  });

  //마우스휠
  let page = 0; 
	let section_num = $(".area").length;
	let wheel = true;

  $(".area").on("mousewheel DOMMouseScroll",function(e,delta) {
    if (wheel) {
      let n = $(this).index();
      console.log(delta);
      if(delta < 0) { 
        page = n+1;
      }else{ 
        page = n-1; 
      }
      if ( page <= 0 ) { page = 0; }
      if ( page >= section_num-1 ) { page = section_num-1; }

      if (page >= 2){
        $('header').stop().fadeIn(300);
      }else{
        $('header').stop().fadeOut(300);

      }
      if(page === 3){
        $(".airseoul .pub_mock img:nth-child(1)").animate({left:18,top:150},1000)
        $(".airseoul .pub_mock img:nth-child(2)").animate({left:100,top:247},1000)
        $(".airseoul .pub_mock img:nth-child(3)").animate({left:438,top:150},1000)
        $(".airseoul .pub_mock img:nth-child(4)").animate({left:362,top:247},1000)
      }

      $("#dot span").eq(page).addClass("active");
			$("#dot span").eq(page).siblings().removeClass("active");
      $("html,body").stop().animate({ scrollTop:wh*page },500); 
    };
  });

  /*  Web publishing */
  let pubIdx = 0;
  let pubOldIdx = 0;
  const pubNum = $('.pub_content .list>li').length;

  function pubImg(pubIdx){
    if(pubIdx!=pubOldIdx){
      $('.thumbs li').eq(pubOldIdx).css({"opacity":0.5,"box-shadow":"none"}); 
      $('.thumbs li').eq(pubIdx).css({"opacity":1,"box-shadow":"9px 9px 0px var(--brown)"}); 
      $('.list>li').eq(pubOldIdx).css({"opacity":0,"z-index":0}); 
      $('.list>li').eq(pubIdx).css({"opacity":1,"z-index":"555"});         
    };
    pubOldIdx = pubIdx;
  }

  $('.thumbs li').click(function(){
    pubIdx = $(this).index();
    pubImg(pubIdx);
  });
  $('.thumbs ul li:nth-child(2)').click(function(){
    $(".dis img").animate({
      top:-885},2000);
  })
  $('.thumbs ul li:nth-child(3)').click(function(){
    $(".mirae .pub_mock img:nth-child(1)").animate({left:200},300)
    $(".mirae .pub_mock img:nth-child(2)").animate({left:300},300)
    $(".mirae .pub_mock img:nth-child(3)").animate({left:400},300)
  })
  $('.thumbs ul li:nth-child(1)').click(function(){
    $(".airseoul .pub_mock img:nth-child(1)").animate({left:18,top:150},300)
    $(".airseoul .pub_mock img:nth-child(2)").animate({left:100,top:247},300)
    $(".airseoul .pub_mock img:nth-child(3)").animate({left:438,top:150},300)
    $(".airseoul .pub_mock img:nth-child(4)").animate({left:362,top:247},300)
  })

  $(".thumbs .pre_btn").click(function(){
    pubIdx--;
    if(pubIdx<0){
      pubIdx=pubNum-1;
    }
    pubImg(pubIdx);
  });

  $(".thumbs .next_btn").click(function(){
    pubIdx++;
    if(pubIdx>pubNum-1){
      pubIdx=0;
    }
    pubImg(pubIdx);
  });

  $(".mo_mockup").click(function(){
    $(this).siblings('.pop').show(); 
    wheel = false;
    $('header').hide();
  });

  $(".pop .close").click(function(){
    $(".pop").hide(); 
    wheel = true;
    $('header').show();
  });

  /*  UI/UX Design Banner */
  let bannerWidth = $(".banner ul li").width() + 400;  
  $(".banner ul li:last").prependTo(".banner ul");
  $(".banner ul").css({left:-bannerWidth});

  $(".ban_btn .ban_left").click(function(){
    $(".banner ul").stop().animate({left:"+="+bannerWidth+"px"},500,function(){			
			$(".banner ul li:last-child").prependTo(".banner ul"); 
      $(this).find('.active').removeClass('active');
      $(this).find('li:eq(2)').addClass('active');
			$(this).css({left:-bannerWidth}); 
		});	
  });

  $(".ban_btn .ban_right").click(function(){
    $(".banner ul").stop().animate({left:"-="+bannerWidth+"px"},500,function(){			
			$(".banner ul li:first-child").appendTo(".banner ul"); 
      $(this).find('.active').removeClass('active');
      $(this).find('li:eq(2)').addClass('active');
			$(this).css({left:-bannerWidth});
		});
  }); 
  
/* UI/UX Design 모달 창 */
  const html = document.querySelector('html');
  const aboutBtn = document.querySelectorAll('.about_btn');
  const uimodalContent = document.querySelectorAll('.ui_modal_content li');
  const uiModal =document.querySelector('.ui_modal');
  aboutBtn.forEach((btn) =>{
    btn.addEventListener('click',function(){
      let uiIndex = this.parentElement.parentElement.dataset.idx;
      uimodalContent[uiIndex].style.display = "block";
      uiModal.style.display = "block";
      wheel = false;
      html.style.overflowY = 'hidden';
    });
  });

  $(".back").click(function(){
    $("html").css({"overflow-y":"scroll"});
    $(".ui_modal").stop().fadeOut();
    wheel = true;
    $(this).parent().css({"display":"none"});
  });

  /* graphic Design 모달창*/
  $(".graphic_grid .item").click(function(){
      wheel = false;
      modal_index = $(this).index();
      $(".modal_page span:nth-child(1)").text(modal_index+1);
      $("html").css({"overflow-y":"hidden"}); 
      $(".modal-content>li").fadeOut();
      $(".modal-content>li").eq(modal_index).fadeIn(); 
      $(".modal").stop().fadeIn(); 
      $(".modal").scrollTop(0);
  });

  $(".pre").click(function(){
    if(modal_index>0){
      $(".modal-content>li").eq(modal_index).fadeOut();
      modal_index--;
      $(".modal_page span:nth-child(1)").text(modal_index+1);
      $(".modal-content>li").eq(modal_index).stop().fadeIn();
      $(".modal").scrollTop(0);

    };
  });

  $(".next").click(function(){
    if(modal_index<10){
      $(".modal-content>li").eq(modal_index).fadeOut();
      modal_index++;
      $(".modal_page span:nth-child(1)").text(modal_index+1);
      $(".modal-content>li").eq(modal_index).stop().fadeIn();
      $(".modal").scrollTop(0);

    };
  });

  $(".modal-close").click(function(){
    $(".modal").stop().fadeOut();
    wheel = true;
    $(".modal").scrollTop(0);

  });

  $('.top_btn').click(function(){
    $(".modal").stop().animate({ scrollTop:0},500); 
  })
  $('.ui_top_btn').click(function(){
    $(".ui_modal").stop().animate({ scrollTop:0},500); 
  })

  /* 웹 기획 */
  $('.file_list .item').click(function(){
    const fileNum = $(this).index();
    $(this).siblings().find('img').attr("src","image/file.png");
    $(this).find('img').attr("src","image/file-open.png");
    $('.planning_list li').removeClass('on');
    $('.planning_list li').eq(fileNum).addClass('on');
    $('.web_planning li').removeClass('open');
    $('.web_planning li').eq(fileNum).addClass('open');
    $('.web_planning li div').removeClass('fade');
    $('.web_planning li.open div').first().addClass('fade');
  })

  $('.planning_list li a').click(function(){
    const listNum = $(this).index();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.web_planning li div').removeClass('fade');
    $('.web_planning .open div').eq(listNum).addClass('fade');
  });

  /* web planning scroll */
  $('.web_planning').mouseenter(function(){
    wheel = false;
  });
  $('.web_planning').mouseleave(function(){
    wheel = true;
  })



});


const tl = gsap.timeline({defaults:{opacity:0,ease:'back'}});

function init(){
   tl.from('#intro .contents span',{ease:'linear',autoAlpha:0}) 
     .from('#intro .contents h1',{x:-50})
    .from('#intro .contents p',{x:50},'<')
    .from('.ver',{y:50},'-=0.2')
    .from('.deco > *',{scale:0, stagger:0.1},'-=0.5'); 
  
 };


 window.addEventListener('DOMContentLoaded', () => {
 init();
 });