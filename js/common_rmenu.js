// for right menu
$(document).ready(function() {

	var tophtml = "\
	<div id=\"izl_rmenu\" class=\"izl-rmenu\"> \
		<div class=\"btn btn-mark\"> \
			<div class=\"mark-info\">回到首页</div> \
		</div> \
		<div class=\"btn btn-wx\"> \
			<img class=\"wxpic\" src=\"img/weixin_code.jpg\"/> \
		</div> \
		<a target=\"_blank\" href=\"http://wpa.qq.com/msgrd?v=3&uin=2874311610&site=qq&menu=yes\"> \
			<div class=\"btn btn-qq\"> \
				<div class=\"qq-info\">联系我们</div> \
			</div> \
		</a> \
		<a target=\"_blank\" href=\"http://s.share.baidu.com/mshare?click=1&url=http%3A%2F%2Fwww.51arts.cn%2F&uid=0&to=mshare&type=text&pic=&title=%E5%A4%9A%E5%85%83%E4%B8%BB%E4%B9%89-%E9%9D%92%E9%93%9C%E6%97%B6%E4%BB%A3%E8%89%BA%E6%9C%AF%E5%93%81%E5%BA%97&key=&desc=&comment=&relateUid=&searchPic=0&sign=on&l=18tu7eees18tu7efe418tu7emsj&linkid=hy5n36qjpir&firstime=1403363766471\"> \			<div class=\"btn btn-share\"> 分享\
				<div class=\"share-info\">分享给好友</div> \
			</div> \
		</a> \
		<a target=\"_blank\" href=\"#\"> \
			<div class=\"btn btn-suggest\"> \
				<div class=\"suggest-info\">欢迎您的反馈</div> \
			</div> \
		</a> \
		<div class=\"btn btn-top\"></div> \
	</div>";

	$("#rmenu").html(tophtml);
	$("#izl_rmenu").each(function() {
		$(this).find(".btn-wx").mouseenter(function() {
			$(this).find(".wxpic").fadeIn("fast");
		}).mouseleave(function() {
			$(this).find(".wxpic").fadeOut("fast");
		});

		$(this).find(".btn-qq").mouseenter(function() {
			$(this).find(".qq-info").fadeIn("fast");
		}).mouseleave(function() {
			$(this).find(".qq-info").fadeOut("fast");
		});

		$(this).find(".btn-mark").mouseenter(function() {
			$(this).find(".mark-info").fadeIn("fast");
		}).mouseleave(function() {
			$(this).find(".mark-info").fadeOut("fast");
		}).click(favorites);

		$(this).find(".btn-share").mouseenter(function() {
			$(this).find(".share-info").fadeIn("fast");
		}).mouseleave(function() {
			$(this).find(".share-info").fadeOut("fast");
		});

		$(this).find(".btn-suggest").mouseenter(function() {
			$(this).find(".suggest-info").fadeIn("fast");
		}).mouseleave(function() {
			$(this).find(".suggest-info").fadeOut("fast");
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