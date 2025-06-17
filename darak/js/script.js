$(document).ready(function(){

  /* top버튼 생성 */
  $(window).scroll(function(){
    let scrollTop = $(this).scrollTop();
    let topBtn = $('.scrollTop_btn');

    if(scrollTop > 200){
      topBtn.show();
    }else{
      topBtn.hide();
    }

  });

  /* 햄버거버튼 클릭 - 메뉴 노출 */
  $('.mo_menu_btn').click(function(){
    $("body").toggleClass("mo_open");
  });

  $('.guide_con').mouseover(function(){
    $(this).next().addClass('active');
  })
  $('.guide_con').mouseout(function(){
    $(this).next().removeClass('active');
  })
});