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
      if(delta < 0) { 
        page = n+1;
      }else{ 
        page = n-1; 
      }

      if ( page <= 0 ) { page = 0; }
      if ( page >= section_num-1 ) { page = section_num-1; }
      $("#dot span").eq(page).addClass("active");
			$("#dot span").eq(page).siblings().removeClass("active");
      $("html,body").stop().animate({ scrollTop:wh*page },500); 
    };
  });

  /*  Web publishing */
  let pubIdx = 0;
  let pubOldIdx = 0;

  function pubImg(pubIdx){
    if(pubIdx!=pubOldIdx){
      $('.thumbs li').eq(pubOldIdx).css({"opacity":0.5,"box-shadow":"none"}); 
      $('.thumbs li').eq(pubIdx).css({"opacity":1,"box-shadow":"9px 9px 0px var(--brown)"}); 
      $('.list>li').eq(pubOldIdx).css({"opacity":0}); 
      $('.list>li').eq(pubIdx).css({"opacity":1}); 
     /*  if(pubIdx === 1){
        $(this).find(h3).css({"color":"#FF7C98"}); 
      } */
    };
    pubOldIdx = pubIdx;
  }

  $('.thumbs li').click(function(){
    pubIdx = $(this).index();
    pubImg(pubIdx);
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
      $(".modal-content>li").eq(modal_index).fadeIn(); 
      $(".modal").stop().fadeIn(); 
  });

  $(".pre").click(function(){
    if(modal_index>0){
      $(".modal-content>li").eq(modal_index).fadeOut();
      modal_index--;
      $(".modal_page span:nth-child(1)").text(modal_index+1);
      $(".modal-content>li").eq(modal_index).stop().fadeIn();
    };
  });

  $(".next").click(function(){
    if(modal_index<10){
      $(".modal-content>li").eq(modal_index).fadeOut();
      modal_index++;
      $(".modal_page span:nth-child(1)").text(modal_index+1);
      $(".modal-content>li").eq(modal_index).stop().fadeIn();
    };
  });

  $(".modal-close").click(function(){
    $("html").css({"overflow-y":"scroll"});
    $(".modal").stop().fadeOut();
    wheel = true;
  });

  $('.top_btn').click(function(){
    $(".modal").stop().animate({ scrollTop:0},500); 
  })
  $('.ui_top_btn').click(function(){
    $(".ui_modal").stop().animate({ scrollTop:0},500); 
  })

});