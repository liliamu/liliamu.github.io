window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-119145034-2');
    $(document).ready(function(){
  var rotation = 0, 
    scrollLoc = $(document).scrollTop();
  $(window).scroll(function() {
    var newLoc = $(document).scrollTop();
    var diff = newLoc -  scrollLoc;
    rotation += diff, scrollLoc = newLoc;
    var rotationStr = "rotate(" + rotation + "deg)";
    $("#logo").css({
      "-webkit-transform": rotationStr,
      "-moz-transform": rotationStr,
      "transform": rotationStr
    });
  });
});

$(document).ready(function(){
    $("#button").click(function(){
        $("#contact").animate({
            height: 'toggle'
        });
    });
}); 

$(document).ready(function(){
  $('#bboy').hide();
  $('#bboy_click,#bboy').on('click',function(){
    $('#bboy_click,#bboy').toggle()
  });
});
