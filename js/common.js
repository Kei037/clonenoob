$(function(){
  $(window).scroll(function(){
    let windowHeight = $(this).height();
    let windowTop = $(this).scrollTop();
    // console.log($(".inner").offset().top);
    // console.log(scTop);
    // console.log($(".inner").offset().top + windowHeight);
    $(".inner").each(function(){
      let thisOffset = $(this).offset();
      if ( thisOffset.top <= scTop) {
        $(".mainTxt").addClass("opc");
        // $(".mainTxt").css("opacity","1")
      }
    });

    if ( windowTop == 0 ) {
      $("#go-to-top").css("transform", "rotate(0deg)");
    }else {
      $("#go-to-top").css("transform", "rotate(180deg)");
    }
  });

/*---------------슬라이드 영역---------------*/
  let marginLeftNum = $(".slide-list").css("margin-left");
  console.log(parseInt(marginLeftNum));
  const marginNumber = 450;
  let pwElem = $(".slide-list");
  let pageLeng = $(".slide-list .news").length;
  $(pwElem).css("width", marginNumber*(pageLeng))

  function slideFunc(el){
    el.click(function(){
      marginLeftNum= parseInt(pwElem.css("margin-left"));
      let isAni = pwElem.is(":animated");
      if ( !isAni ) {
        if ( $(el).hasClass("next") && marginLeftNum > -(marginNumber*(pageLeng-1)) ) {
          pwElem.animate({marginLeft: marginLeftNum - marginNumber}, "fast", function(){});
        }else if ( $(el).hasClass("prev") && marginLeftNum < 0 ) {
          pwElem.animate({marginLeft: marginLeftNum + marginNumber}, "fast", function(){});
        }else if ( marginLeftNum == -(marginNumber*(pageLeng-1)) || marginLeftNum == 0 ) {
          alert("더 이상 이미지가 없습니다.");
        }
      }
    });
  }
  $(".btn").each(function(){
    slideFunc($(this));
  });

});
