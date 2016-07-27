$(document).foundation();
$(document).ready(function() {
	$('#class-apporter').mouseenter(function()
	{ 
		$('#img-apporter').stop(true, true).fadeTo();
		$("#img-apporter").fadeTo(200,0.1, function() {
			$('#img-apporter').attr("src", "https://s3.amazonaws.com/heroku-adfinitas-campaign/ifaw-juillet-2016/img/site_merci/img-apporter-s.png");
		}).fadeTo(300,1);
	});
	$('#class-apporter').mouseleave(function()
	{ 
		$('#img-apporter').stop(true, true).fadeTo();
		$("#img-apporter").fadeTo(200,0.1, function() {
			$('#img-apporter').attr("src", "https://s3.amazonaws.com/heroku-adfinitas-campaign/ifaw-juillet-2016/img/site_merci/img-apporter.png");
		}).fadeTo(300,1);
	});
	$('#class-sauver').mouseenter(function()
	{ 
		$('#img-sauver').stop(true, true).fadeTo();
		$("#img-sauver").fadeTo(200,0.1, function() {
			$('#img-sauver').attr("src", "https://s3.amazonaws.com/heroku-adfinitas-campaign/ifaw-juillet-2016/img/site_merci/img-sauver-s.png");
		}).fadeTo(300,1);
	});
	$('#class-sauver').mouseleave(function()
	{ 
		$('#img-sauver').stop(true, true).fadeTo();
		$("#img-sauver").fadeTo(200,0.1, function() {
			$('#img-sauver').attr("src", "https://s3.amazonaws.com/heroku-adfinitas-campaign/ifaw-juillet-2016/img/site_merci/img-sauver.png");
		}).fadeTo(300,1);
	});
	$('#class-proteger').mouseenter(function()
	{ 
		$('#img-proteger').stop(true, true).fadeTo();
		$("#img-proteger").fadeTo(200,0.1, function() {
			$('#img-proteger').attr("src", "https://s3.amazonaws.com/heroku-adfinitas-campaign/ifaw-juillet-2016/img/site_merci/img-proteger-s.png");
		}).fadeTo(300,1);
	});
	$('#class-proteger').mouseleave(function()
	{
		$('#img-proteger').stop(true, true).fadeTo();
		$("#img-proteger").fadeTo(200,0.1, function() {
			$('#img-proteger').attr("src", "https://s3.amazonaws.com/heroku-adfinitas-campaign/ifaw-juillet-2016/img/site_merci/img-proteger.png");
		}).fadeTo(300,1);
	});
	$('.set-shadow').mouseenter(function()
	{
		$(this).fadeIn(1000, function()
		{
			$(this).addClass('shadow');
		});
	});
	$('.set-shadow').mouseleave(function()
	{
		$(this).fadeIn("slow", function()
		{
			$(this).removeClass('shadow');
		});
	});
});