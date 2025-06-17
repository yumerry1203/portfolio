  /* swiper */
    var swiper1 = new Swiper(".mySwiper1", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });

    var swiper2 = new Swiper(".mySwiper2", {
      effect: "cards",
      grabCursor: true,
    });
    /* //swiper */

    let funcObj={
      f_0:function(){
        const tl = gsap.timeline();
        tl.to("#menu > *", {
          opacity: 1,
          stagger: 0.3,
          y: -30,
        });
        tl.to("#menu .menu_list li", {
          opacity: 1,
          stagger: 0.3,
        });
      },
      f_1:function(){
        const t1 = gsap.timeline();
        t1.to("#event > *", {
          opacity: 1,
          stagger: 0.3,
          y: -30,
        })
      },
      f_3:function(){
        const t1 = gsap.timeline();
        t1.to("#link .link_box > div", {
          opacity: 1,
          stagger: 0.3,
        })
      }
    }

    let section = document.querySelectorAll('section');
    window.addEventListener('scroll', function(){
    
      let scroll = document.scrollingElement.scrollTop;
      let outHeight = this.window.outerHeight; 

      for(let i =0; i<section.length;i++){
        //스크롤이 되었을때 섹션이 뷰포트에 들어왔으면 그때 섹션함수를 실행함
        if(scroll > section[i].offsetTop - outHeight &&
          scroll < section[i].offsetTop - outHeight + section[i].offsetHeight){
            funcObj['f_'+i]();
            console.log(i);
        }
      };
    
    });


    $(document).ready(function(){

      /* notice */
      function slideupTop(){
        $(".notice_list ul").stop(true,true).animate({"margin-top":"-=2rem"},800,function(){ 		
          $(".notice_list ul li:first-child").appendTo(".notice_list ul"); 	
          $(this).css({"margin-top":"0"}); 
        });
      } setInterval(slideupTop,4000);
      /* // notice */

      $(".menu_btn").click(function(){  //header-menu button
        $(".mo_menu").stop(true,true).animate({"right":0});
        $(".back").stop(true,true).fadeIn();
      });

      $(".close_btn").click(function(){  //close button
        $(".mo_menu").stop(true,true).animate({"right":"-75%"});
        $(".back").stop(true,true).fadeOut(); 
      });

      $(window).on("scroll", function () { //scroll-header style
        let scroll = $(this).scrollTop();
        if (scroll > 50) {
          $('header').addClass('scroll');
          $('header .menu_btn a img').attr({"src":"img/menuBtn_scroll.png"});
        }else{
          $('header').removeClass('scroll');
          $('header .menu_btn a img').attr({"src":"img/menuBtn.png"});
        }
      });

    });
    