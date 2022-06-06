$(function(){
  $(window).scroll(function(){
    let windowHeight = $(this).height();
    let slideHeight = $(".inner").height();
    let scTop = $(this).scrollTop();
    console.log($(".inner").offset().top);
    console.log(scTop);
    console.log($(".inner").offset().top + windowHeight);
    $(".inner").each(function(i){
      let thisOffset = $(this).offset();
      if ( thisOffset.top <= scTop) {
        $(".mainTxt").addClass("opc");
        // $(".mainTxt").css("opacity","1")
      }
    })
  });
});
