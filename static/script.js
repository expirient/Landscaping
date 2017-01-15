$(document).ready(function(){	
	/*------------------------------------------------------------------------------------------------------------------*/
		 							// FOR REGISTER MENU

	/*var isWork = false;
	if (!isWork){	 							
		var timerId = setTimeout(list,0);
		isWork = true;
	}*/	

function list(event){
	
	if($('#wrapper #content #forUser').text()){
		$('#wrapper #content #forUser').empty();
	}
	$('#forForms').fadeIn(500);
	setTimeout(function(){
		$('#wrapper').hide();
		$('#forForms').empty();
		$.post('/regForm',function(res){
			$('#forForms').prepend(res);

				$('#formReg #btnReg').click(function(){
					var params = {
						firstname: $('#firstname').val(),
						lastname: $('#lastname').val(),
						password: $('#password').val()
					}
					if(params.firstname == '' || params.password == '' || params.lastname == ''){
						alert('Enter all text areas...');
						$('#firstname, #lastname, #password').val('');
						return;
					}
					$.post('/isRegistered',params,function(res){
						alert(res);
						$('#firstname, #lastname, #password').val('');
					});
				});

				$('#questionBtn').click(function(){
					$.post('/logForm',function(res){
						$('#formReg').fadeOut(800);
						$('#forForms').prepend(res).fadeIn(800);

							$('#btnLog').click(function(){
								var params = {
									firstname: $('#firstname').val(),
									password: $('#password').val()
								}
									if(params.firstname == '' || params.password == ''){
										alert('Enter all text areas...');
										$('#firstname, #password').val('');
										return;
								}
								$.post('/trueLogin',params,function(res){
									var myP = $('<p>You are not logged in, please click Log :</p>');
									//alert($('#wrapper #content #forUser').text());
									if($('#wrapper #content #forUser').text() == log){
										alert($('#wrapper #content #forUser').html());
										alert('You are allready logined...');
										$('#firstname, #password').val('');
											return;
									}
									if(res == params.firstname){
										var log = $('<p class="logText"> You are logined by: ' + res + '</p>');
										$('#wrapper #content #forUser').append(log).append('<input type="button" value="Log Out" id="logOut">');
										$('#forForms').fadeOut(800);
										$('#wrapper').fadeIn(800);
										return;
									}
									if(res !== params.firstname){
										alert(res);
										$('#firstname, #password').val('');
									}
								});
									
							});

							$('#questionBtnForReg').click(function(){
								list();
							});
					});
				});
		})
	},0);
}
/*clearTimeout(timerId);*/
/*------------------------------------------------------------------------------------------------------------------*/
							//SLIDER HEADER

	var img = $('#forImg img');
	$('#forImg img:first').addClass('active');
	var curentSlide = 0;
	
	var timer = setInterval(show,5000);
	
	function show(){
		curentSlide++;	
		$('img.active').removeClass('active').next().addClass('active');	
			if(curentSlide > img.length - 1){
				$('img:last').removeClass('active');
				$('#forImg img:first').addClass('active');
				curentSlide = 0;
			}		
	}

/*------------------------------------------------------------------------------------------------------------------*/
						// VERTICAL MENU
	setTimeout(function(){
		$('#nav').css({'display':'block'});
	},300);

	$('#topmenu a').click(function(event){
		event.preventDefault();
	});
	$('#home').click(function(){
		/*$('body').empty();
		$.get('/',function(res){
			$('body').append(res);
			$('#forForms').fadeOut(500);
		});*/
		window.location.reload();
	});


	$('#regular').click(function(){
		$.post('/regular',function(res){
			$('#verticalSlider, #forPhoto').empty();
			$('#verticalSlider').append(res);
				verticalCarusel();
		});
	});
	$('#english').click(function(){
		$.post('/english',function(res){
			$('#verticalSlider, #forPhoto').empty();
			$('#verticalSlider').append(res);
				verticalCarusel();
		});
	});
	$('#franch').click(function(){
		$.post('/fr',function(res){
			$('#verticalSlider, #forPhoto').empty();
			$('#verticalSlider').append(res);
				verticalCarusel();
		});
	});
	$('#japanese').click(function(){
		$.post('/jap',function(res){
			$('#verticalSlider, #forPhoto').empty();
			$('#verticalSlider').append(res);
				verticalCarusel();
		});
	});
	$('#ecodesign').click(function(){
		$.post('/eco',function(res){
			$('#verticalSlider, #forPhoto').empty();
			$('#verticalSlider').append(res);
				verticalCarusel();
		});
	});
	$('#flowers').click(function(){
		$.post('/flowers',function(res){
			$('#forPhoto, #verticalSlider').empty();
			$('#verticalSlider').append(res);
				verticalCarusel();
		});
	});
	$('#trees').click(function(){
		$.post('/trees',function(res){
			$('#forPhoto, #verticalSlider').empty();
			$('#verticalSlider').append(res);
				verticalCarusel();
		});
	});
	$('#bushes').click(function(){
		$.post('/bushes',function(res){
			$('#forPhoto, #verticalSlider').empty();
			$('#verticalSlider').append(res);
				verticalCarusel();
		});
	});
	$('#scenery').click(function(){
		$.post('/scenery',function(res){
			$('#forPhoto, #verticalSlider').empty();
			$('#verticalSlider').append(res);
				verticalCarusel();
		});
	});
	$('#blades').click(function(){
		$.post('/blades',function(res){
			$('#forPhoto, #verticalSlider').empty();
			$('#verticalSlider').append(res);
				verticalCarusel();
		});
	});
	$('#rakes').click(function(){
		$.post('/rakes',function(res){
			$('#forPhoto, #verticalSlider').empty();
			$('#verticalSlider').append(res);
				verticalCarusel();
		});
	});
	$('#pruners').click(function(){
		$.post('/pruners',function(res){
			$('#forPhoto, #verticalSlider').empty();
			$('#verticalSlider').append(res);
				verticalCarusel();
		});
	});

/*------------------------------------------------------------------------------------------------------------------*/
				// FOOTER
	$('#firstFooter, #brandIcons').mouseover(function(){
		$('#brandIcons').css({'display':'block'});
	});
/*------------------------------------------------------------------------------------------------------------------*/			
	$('#btnToTop').hide();
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50){
			$('#btnToTop').fadeIn(500);
		} 
		else{
			$('#btnToTop').fadeOut(500);
		}
	});
	$('#btnToTop').click(function(){
			$('html,body').animate({
				scrollTop:0},500);
	});
/*------------------------------------------------------------------------------------------------------------------*/
						//ASIDE

	$('#newLog').click(function(){
		list();
	});
	$('#newLogIn').click(function(){
		list();
	});	

/*------------------------------------------------------------------------------------------------------------------*/
						// MAIN CARUSEL

	verticalCarusel();
	function verticalCarusel(){
		$('#verticalSlider img:first').clone().appendTo('#forPhoto').hide().fadeIn(800);
			$('#verticalSlider img').click(function(){
				$('#forPhoto img').fadeOut(500);
				$('#forPhoto').empty();
				$(this).clone().appendTo('#forPhoto').hide().fadeIn(800);
		});
	}
											
});// finish READY