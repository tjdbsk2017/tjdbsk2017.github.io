$(function(){
    //header_gnb--------------------------------------->

    $('.header_inner .gnb li').click(function(e){
        $('.gnb_depth2, .gnb_bg').stop().slideDown();
        e.preventDefault();
    });
    $('.header_inner .gnb li').mouseenter(function(e){
        $('.gnb_depth2, .gnb_bg').stop().slideDown();
        e.preventDefault();
    });
    $('.header, .gnb_bg').mouseleave(function(e){
        $('.gnb_depth2, .gnb_bg').stop().slideUp();
        e.preventDefault();
    });
    
    //m_gnb --------------------------------------->
    //위치판단
    var posY=$('#product').offset().top;
    //console.log(posY);
    
    var sw=true;
    
    $('#m_btn').click(function(){
	if(sw==true){	
		$(this).addClass('on');
		$('#m_gnb').fadeIn(400);
		$('#wrap_cover').fadeIn(800);
		sw=false;
	} else {
		$(this).removeClass('on');
		$('#m_gnb').fadeOut(400);
		$('#wrap_cover').fadeOut(800);
		sw=true;
	   }
	});
    
    //slider---------------------------------------------->
    
    $('#slide').slick({
        arrows: true,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 400,
        swipe: true,
        pauseOnHover: false,
        infinite: true,
        cssEase: 'ease-out'
    });
    
});