$(function(){
	$('#header').data('size','big');
});
function hasHead(){
	if($('#header').hasClass('inPHeader')){
		$('.headSpace').css('display','inline-block');
	}else{
		$('.headSpace').css('display','none');
		// $('#header').css('background','none');
	}
}
function lgHead(){
	hasHead();
	// $('.headSpace').stop().animate({height:'95px'},100);
	// $('#header #nav2').css('display','inline-block');
	// $('#header').stop().animate({height:'66px'},100);
	// $('#header.inPHeader').stop().animate({height:'68px'},100);
	// $('#header #logo>a').stop().animate({height:'46px'},100);
	// $('#header #nav2').stop().animate({marginTop:'11px'},100);
	// $('#header .notifiMenu').stop().animate({marginTop:'11px'},100);
	// $('#header').css('background-color','rgba(73,89,115,.9)');
	$('.headSpace.transporter').stop().animate({height:'194px'},100);
	$('#header.transporter').stop().animate({height:'194px'},100);
	$('#header.transporter>.offerDetails-StickyBar').slideDown(100);
	$('#offerdetails-stickybar').hide();
	$('#header ul>li .subSection').stop().animate({marginTop:'-5px'},100);
	$('#header .shipper ul>li .subSection').stop().animate({marginTop:'-16px'},100);
	
	$('#header.btnNav ul>li .subSection').stop().animate({marginTop:'-5px'},100);
}
function afLgHead(){
	hasHead();
	// $('.headSpace').stop().animate({height:'95px'},100);
	// $('#header #nav2').css('display','inline-block');
	// $('#header').stop().animate({height:'100px'},100);
	// $('#header.inPHeader').stop().animate({height:'102px'},100);
	// $('#header #logo>a').stop().animate({height:'79px'},100);
	// $('#header #nav2').stop().animate({marginTop:'35px'},100);
	// $('#header .notifiMenu').stop().animate({marginTop:'33px'},100);
	// $('#header.inPHeader #nav2').stop().animate({marginTop:'28px'},100);
	// $('#header.inPHeader .notifiMenu').stop().animate({marginTop:'28px'},100);
	// $('#header').css('background-color','rgba(73,89,115,0)');
	$('.headSpace.transporter').stop().animate({height:'100px'},100);
	$('#header.transporter').stop().animate({height:'100px'},100);
	$('#header.transporter>.offerDetails-StickyBar').slideUp(100);
	$('#offerdetails-stickybar').show();
	// $('#header ul>li .subSection').stop().animate({marginTop:'12px'},100);
	// $('#header .shipper ul>li .subSection').stop().animate({marginTop:'12px'},100);
}
function mdHead(){
	hasHead();
	// $('.headSpace').stop().animate({height:'122px'},100);
	// $('#header #nav2').css('display','inline-block');
	// $('#header').stop().animate({height:'120px'},100);
	// $('#header.inPHeader').stop().animate({height:'122px'},100);
	// $('#header #logo>a').stop().animate({height:'46px'},100);
	// $('#header #nav2').stop().animate({marginTop:'12px'},100);
	$('#header #nav2>ul>li').stop().animate({paddingBottom:'0px'},100);
	// $('#header .notifiMenu').stop().animate({marginTop:'11px'},100);
	// $('#header').css('background-color','rgba(73,89,115,.9)');
	$('.headSpace.transporter').stop().animate({height:'254px'},100);
	$('#header.transporter').stop().animate({height:'254px'},100);
	$('#header.transporter .notifiMenu').attr('style','margin-top:15px;bottom:auto;top:54px');
	$('#header.transporter>.offerDetails-StickyBar').slideDown(100);
	$('#offerdetails-stickybar').hide();
	$('#header ul>li .subSection').removeAttr("style");
	$('#header .shipper ul>li .subSection').removeAttr("style");
}
function afMdHead(){
	hasHead();
	$('.headSpace').stop().animate({height:'133px'},100);
	// $('#header #nav2').css('display','inline-block');
	// $('#header').stop().animate({height:'129px'},100);
	// $('#header.inPHeader').stop().animate({height:'138px'},100);
	// $('#header #logo>a').stop().animate({height:'62px'},100);
	// $('#header #nav2').stop().animate({marginTop:'23px'},100);
	// $('#header #nav2>ul>li').stop().animate({paddingBottom:'8px'},100);
	// $('#header.inPHeader #nav2').stop().animate({marginTop:'20px'},100);
	// $('#header.inPHeader .notifiMenu').stop().animate({marginTop:'28px'},100);
	// $('#header').css('background-color','rgba(73,89,115,0)');
	$('.headSpace.transporter').stop().animate({height:'144px'},100);
	$('#header.transporter .notifiMenu').attr('style','margin-top:33px;bottom:2px;top:auto');
	$('#header.transporter').stop().animate({height:'144px'},100);
	$('#header.transporter>.offerDetails-StickyBar').slideUp(100);
	$('#offerdetails-stickybar').show();
	$('#header ul>li .subSection').removeAttr("style");
	$('#header .shipper ul>li .subSection').removeAttr("style");
}
function resetHead(){
	$('.headSpace').css('display','none');
	$('#header').removeAttr("style");
	$('#header #logo>a').removeAttr("style");
	// $('#header #nav2').attr("style","display:none;margin-top:9px;");
	$('#header .notifiMenu').removeAttr("style");
	$('button#menu-btn').removeClass('active');
	$('#header.transporter').removeAttr("style");
	$('#header.transporter>.offerDetails-StickyBar').slideUp(100);
	$('#offerdetails-stickybar').show();
	$('#header ul>li .subSection').removeAttr("style");
	$('#header .shipper ul>li .subSection').removeAttr("style");
}
function desktopResulution(){
	var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if(screenWidth > 992){
		if($(document).scrollTop() > 0){
			if($('#header').data('size') == 'big'){
				$('#header').data('size','small');
				lgHead();
			}
		}
		else{
			if($('#header').data('size') == 'small'){
				$('#header').data('size','big');
				afLgHead();
			}  
		}	
	}
}
function tabResulution(){
	var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if(screenWidth > 767){
		if($(document).scrollTop() > 0){
			if($('#header').data('size') == 'big'){
				$('#header').data('size','small');
				mdHead();
			}
		}
		else{
			if($('#header').data('size') == 'small')
			{
				$('#header').data('size','big');
				afMdHead();
			}  
		}
	}
}
//For After Scrolling Fixed Position
$(window).scroll(function(){
	desktopResulution();
	tabResulution();
});

//Function For Bullet Circle
function pingText(){
	$('#header ul li .icon>.pinG').each(function(){
		$(this).height($(this).width());
		$(this).css('line-height', $(this).height()+'px');
	});
}

// For Mobile Phone Laindaing View
$(window).resize(function(){
	var screenWidth2 	= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;	
	var screeNheight2	= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	if(993 < screenWidth2){
		afLgHead();
	}
	else if(767 < screenWidth2){
		afMdHead();
	}
	else if(screenWidth2 < 767){
		resetHead();
	}
	$(window).scroll(function(){
		desktopResulution();
		tabResulution();
	});
});
$(document).ready(function() {
	desktopResulution();
	tabResulution();
	hasHead();
	var scroll = $(window).scrollTop();
		
	var notfiHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	var notficationBH = notfiHeight - 353;
	var screenWidthMob 	= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	$('.subSection>ul').css({'max-height':notficationBH});
	$('.subSection>ul').addClass('scroUl');
	if(screenWidthMob<767){
		$('.subSection>ul').css({'max-height':'inherit'});
	}
	$(window).resize(function(){
		var notfiHeight2 = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		var notficationBH2 = notfiHeight2 - 353;
		var screenWidthMobR 	= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var notiUlH = $('.subSection>ul').height();
		if(notficationBH2>notiUlH){
			$('.subSection>ul').css({'max-height':notficationBH2});
			$('.subSection>ul').addClass('scroUl');
		}
		if(screenWidthMobR<767){
			$('.subSection>ul').css({'max-height':'inherit'});
		}
	});
	
	//For Responsive Menu
	$('#menu-btn2').click(function(){
		$('button#menu-btn2').toggleClass('active');
		$('#header #nav2').slideToggle(400);
	});
	if($('#header ul>li:has(> .subSection)')){
		$('#header ul>li:has(> .subSection)').addClass('hasSub');
	}
	else{
		alert("no");
	}
	
	//Calling Function For Bullet Circle
	pingText();
});

//--- SCRIPTS RELATED TO NOTIFCATIONS STARTS FROM HERE --//


        //socket.emit('sendOnlineOfflineStatusPing', { sender_id: parseInt($('#currentLoggedInUserId').val()) });
	//}
		
	



function updateAllNotifications(idsess) {
	
	$.ajax({
			type: "POST",
			url : $('#globalSiteUrl').val()+"/fr/ajax/notificationHeaderAjax.php",
			data: {
				idsess	: idsess,
				action	: 'updateAllNotifications'								
			},
			cache: false,
			beforeSend: function(){
			},
			success: function(output) {
				
				if($('#totalBidsCountNoti')){
				  $('#totalBidsCountNoti').html('0');
				  $('#totalBidsCountNoti').hide();	
				}
				
				if($('#totalMessagesCountNoti')){
				  $('#totalMessagesCountNoti').html('0');
				  $('#totalMessagesCountNoti').hide();	
				}
				
				if($('#noti-message')){
				  $('#noti-message').html('0');
				  $('#noti-message').hide();	
				  
				}
				 
				if($('#noti-bid')){
				  $('#noti-bid').html('0');
				  $('#noti-bid').hide();	
				}
				
				$('#notification-counter').html('0');
				$('#notification-counter').hide();	
			}
			
		 });

}

function prependNotification(offer_id, type_id, type) {
	
	var idsess = $('#currentLoggedInUserIdsess').val();
	
	$.ajax({
			type: "POST",
			url : $('#globalSiteUrl').val()+"/fr/ajax/notificationHeaderAjax.php",
			data: {
				idsess	 : idsess,
				offer_id : offer_id,
				type_id  : type_id, 
				type	 : type,
				action	 : 'getUserNotifications'								
			}, 
			cache: false,
			beforeSend: function(){
			},
			success: function(output) {
				$('#no-notification-available-content').remove();
				$('#prepend-notification').prepend(output);
				var currentCounter  = $('#notification-counter').html();
				if($('#notification-counter').is(":visible")){
					var modifyCounter	= parseInt(currentCounter)+1;

					if(modifyCounter > 20) {
						modifyCounter = '20+';
					}
					
					$('#notification-counter').html(modifyCounter);	
				}else {
					$('#notification-counter').show();	
					var currentCounter  = $('#notification-counter').html('1');
				}
				
				if($('.fretbay-header-notification-row').length > 5) {
					$('#header-see-all-notifications').show();
				}
				
			}
			
		 });

}

//--- SCRIPTS RELATED TO NOTIFCATIONS ENDS HERE --//
function openCommentCaMarche(){
	$("#commentCaMarcheContent").toggle();
}
function closeCommentCaMarche(){
	$("#commentCaMarcheContent").hide("slide", { direction: "up" }, 500);
}

$(window).on('load resize scroll', function() {
	winScroll = $(window).scrollTop();
	if ( winScroll > 0  ) {
		$('#header').addClass('sticky');
	} else {
		$('#header').removeClass('sticky');
	}
});