$(function(){
	//tabs
	var tabBtn		= $('ul.tabMenu li a'),
		tabContent 	= $('.tabContent'),
		activeId = $('ul.tabMenu li a:first-child').attr('href');
	
	tabBtn.filter(':first').addClass('active');
	tabContent.filter(':not(:first)').hide();
	tabContent.hide().filter(activeId).show();

	tabBtn.click(function(){
		var id = $(this).attr('href');
		tabBtn.removeClass('active');
		$(this).addClass('active');
		tabContent.hide().filter(id).show();
		return false;
	});

	//chart
	function curvesArcChart(canvasId){
		var canvas 	= document.getElementById(canvasId),
			context	= canvas.getContext('2d'),
			x		= canvas.width * .5,
			y		= canvas.height * .5,
			radius	= 85,
			startAngel	= 1.9 * Math.PI,
			endAngel	= 1.1 * Math.PI,
			counterClockwise	= false;

		context.beginPath();
		context.arc(x,y,radius,startAngel,endAngel,counterClockwise);
		context.lineWidth = 35;

		context.strokeStyle	= '#1d72ef';
		context.stroke();
	}

	curvesArcChart('curvesChart');
});