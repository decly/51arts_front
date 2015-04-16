// for auction time
$(document).ready(function() {
	var intDiff = parseInt($('#time_remaining').val()); //total seconds
	function timer(intDiff) {
		window.setInterval(function() {
			var day = 0,
				hour = 0,
				minute = 0,
				second = 0; // time default	
			if (intDiff > 0) {
				day = Math.floor(intDiff / (60 * 60 * 24));
				hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
				minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
				second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			}
			if (minute <= 9) minute = '0' + minute;
			if (second <= 9) second = '0' + second;
			$('#day_show').html(day);
			$('#hour_show').html('<s id="h"></s>' + hour);
			$('#minute_show').html('<s></s>' + minute);
			$('#second_show').html('<s></s>' + second);
			intDiff--;
		}, 1000);
	}

	timer(intDiff);
});


// for auction price control 
$(document).ready(function() {
	var defprice = parseInt($('#price_current').html()); //  default value
	var perprice = parseInt($('#per_price').html());

	$('#price_custom').val(defprice);

	$('#auction_price .price_add_btn').click(function() {
		var curprice = parseInt($('#price_custom').val());
		var newprice = Number(curprice) + Number(perprice);
		$('#price_custom').val(newprice);
	});

	$('#auction_price .price_sub_btn').click(function() {
		var curprice = parseInt($('#price_custom').val());
		var newprice = Number(curprice) - Number(perprice);
		if (newprice < 0)
			newprice = 0;
		$('#price_custom').val(newprice);
	});
});