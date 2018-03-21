$(document).ready(function(){
    $('.bxslider').bxSlider({
      auto : true,
      speed : 800,
      controls: false,
    //      autoControls: true,
    //      startText: 'Start',
    //      stopText: 'stop',
    //      nextText: 'Next',
    //      prevText: 'Prev',
      mode: 'fade',
      infiniteLoop: true,
      autoHover: false
    });
    
    $('.info .text h5').click(function(){
        alert('010-2071-0939, tjdbsk2005@naver.com');
    });
});