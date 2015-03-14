
$(document).ready(function() {
	
	$('#login_wrap input').focus(function() {
		$(this).siblings('span').css({'display': 'none'});
	}).blur(function() {
		if (this.value.length == 0) 
			$(this).siblings('span').css({'display': 'inline'});
	});
	
//	$('#password').click(function(){
//		if (this.value == '密码')
//			this.value = '';
//	}).blur(function () {
//		if (this.value == '')
//			this.value = '密码';
//	});
//	$('#username').click(function(){
//		if (this.value == '会员名/手机号/邮箱')
//			this.value = '';
//	}).blur(function () {
//		if (this.value == '')
//			this.value = '会员名/手机号/邮箱';
//	});
//	$('#verify').click(function(){
//		if (this.value == '验证码')
//			this.value = '';
//	}).blur(function () {
//		if (this.value == '')
//			this.value = '验证码';
//	});
	
});