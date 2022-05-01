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
        // $(".mainTxt").addClass("on");
        $(".mainTxt").css({opacity: "1", transform: "translateY(0)"});
      }else if ( thisOffset.top <= scTop + 13 ) {
        $(".inner").children('p').css({opacity: "1", transform: "translateY(0)"});
      }else if ( thisOffset.top <= scTop + 20 ) {
        $(".list-items ").css({opacity: "1", transform: "translateY(0)"});
      }else if ( thisOffset.top <= scTop + 23 ) {
        $("second-div").css({opacity: "1", transform: "translateY(0)"});
      }
    });
  });
});
