$(document).ready(function(){

  //헤더 드롭다운메뉴
  $(".gnb li").hover(function(){
    $(this).find(".sub_menu").stop().slideDown();
  },function(){
    $(this).find(".sub_menu").stop().slideUp();

  });

  //항공권 예약 - 왕복,편도 선택
  $(".way a").click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

  //여행지추천 - 자동 슬라이드
  let bannerWidth= $(".ban ul li").width()+15;
  $(".ban ul li:last").prependTo(".ban ul");
  $(".ban ul").css({left:-bannerWidth});

  function bannerAuto(){
    $(".ban ul").stop().animate({left:"-="+bannerWidth+"px"},500,function(){			
			$(".ban ul li:first-child").appendTo(".ban ul");
			$(this).css({left:-bannerWidth});
		});
  };
  bannerTimer = setInterval(bannerAuto,3500);

  $(".ban_btn .ban_left").click(function(){
    $(".ban ul").stop().animate({left:"+="+bannerWidth+"px"},500,function(){			
			$(".ban ul li:last-child").prependTo(".ban ul");
			$(this).css({left:-bannerWidth}); 
		});	
  });

  $(".ban_btn .ban_right").click(function(){
    $(".ban ul").stop().animate({left:"-="+bannerWidth+"px"},500,function(){			
			$(".ban ul li:first-child").appendTo(".ban ul"); 
			$(this).css({left:-bannerWidth}); 
		});
  }); 

  $(".banner").hover(function(){ 
    clearInterval(bannerTimer);
  }, function(){
    bannerTimer = setInterval(bannerAuto,4000);
  });

  //공지사항 게시글
  $('#notice .title').click(function(){
    $(this).siblings("#notice .content").stop().hide("fast");
    $(this).next().stop().toggle("fast");
  });

  //제휴사 tabmenu
  $(".btn li").click(function(){  
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    let result = $(this).attr("data-alt");
      $(".tab_contents div").removeClass("active");
      $("#"+result).addClass("active").hide().fadeIn();
  });

  // footer-사이트맵
  $(".group_com>a").click(function(){
    $(".group_link").slideToggle();
  });

  $("#inquiry").click(function(){
    $('#main_result').fadeIn();
  })

  //출발지,도착지 선택시 텍스트 노출
  const selectDep = document.querySelector('#dep');
  const selectDes = document.querySelector('#des');
  const resultDep = document.querySelector('#result_dep');
  const resultDes = document.querySelector('#result_des');

  selectDep.addEventListener('change', () => {
    resultDep.textContent = selectDep.value.toUpperCase();
    document.querySelector('.airplane').style.opacity=0.8;
  });

  selectDes.addEventListener('change', () => {
    resultDes.textContent = selectDes.value.toUpperCase();
  });
  

});
  