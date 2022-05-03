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
        $(".mainTxt").addClass("on");
        // $(".mainTxt").css({opacity: "1", transform: "translateY(0)"});
      }else if ( thisOffset.top <= scTop + 13 ) {
        $(".inner").addClass("on");
      }else if ( thisOffset.top <= scTop + 20 ) {
        $(".list-items ").addClass("on").css({opacity: "1", transform: "translateY(0)"});
      }else if ( thisOffset.top <= scTop + 21 ) {
        $("second-div").addClass("on");
      }else if ( thisOffset.top <= scTop + 25 ) {
        $("third-div").addClass("on");
      }
    });
  });
});
