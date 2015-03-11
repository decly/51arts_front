// for right menu
$(document).ready(function() {
	
	var tophtml = "\
	<div id=\"izl_rmenu\" class=\"izl-rmenu\"> \
		<div class=\"btn btn-wx\"> \
			<img class=\"wxpic\" src=\"img/weixin.jpg\"/> \
		</div> \
		<div class=\"btn btn-mark\"> \
			<div class=\"mark-info\"></div> \
		</div> \
		<div class=\"btn btn-top\"></div> \
	</div>";

	$("#rmenu").html(tophtml);
	//alert($("#rmenu").html());
	$("#izl_rmenu").each(function() {
		$(this).find(".btn-wx").mouseenter(function() {
			$(this).find(".wxpic").fadeIn("fast");
		});
		$(this).find(".btn-wx").mouseleave(function() {
			$(this).find(".wxpic").fadeOut("fast");
		});
		$(this).find(".btn-mark").mouseenter(function() {
			$(this).find(".mark-info").fadeIn("fast");
		});
		$(this).find(".btn-mark").mouseleave(function() {
			$(this).find(".mark-info").fadeOut("fast");
		});
		$(this).find(".btn-top").click(function() {
			$("html, body").animate({
				"scroll-top": 0
			}, "fast");
		});
	});
	var lastRmenuStatus = false;
	$(window).scroll(function() {
		var _top = $(window).scrollTop();
		if (_top > 200) {
			$("#izl_rmenu").data("expanded", true);
		} else {
			$("#izl_rmenu").data("expanded", false);
		}
		if ($("#izl_rmenu").data("expanded") != lastRmenuStatus) {
			lastRmenuStatus = $("#izl_rmenu").data("expanded");
			if (lastRmenuStatus) {
				$("#izl_rmenu").slideDown();
			} else {
				$("#izl_rmenu").slideUp();
			}
		}
	});
});