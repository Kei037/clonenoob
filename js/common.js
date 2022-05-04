$(function(){
  $(window).scroll(function(){
    let windowHeight = $(this).height();
    let scTop = $(this).scrollTop();
    let slideHeight = $(".container").height();
    // console.log($(".inner").offset().top);
    // console.log(scTop);
    // console.log($(".inner").offset().top + windowHeight);
    $(".inner").each(function(i){
      let thisOffset = $(this).offset();
      if ( thisOffset.top <= scTop) {
        $(".mainTxt").addClass("on").css({opacity: "1", transform: "translateY(0)"});
        // $(".mainTxt").css({opacity: "1", transform: "translateY(0)"});
      }else if ( thisOffset.top <= scTop + 13 ) {
        $(".inner").addClass("on1").css({opacity: "1", transform: "translateY(0)"});
      }else if ( thisOffset.top <= scTop + 20 ) {
        $(".list-items ").addClass("on").css({opacity: "1", transform: "translateY(0)"});
      }else if ( thisOffset.top <= scTop + 21 ) {
        $("second-div").addClass("on").css({opacity: "1", transform: "translateY(0)"});
      }else if ( thisOffset.top <= scTop + 25 ) {
        $("third-div").addClass("on").css({opacity: "1", transform: "translateY(0)"});
      }
    });
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
  })
});
