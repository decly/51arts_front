// for register prompt
$(document).ready(function() {
	$("#register_content input").blur(function() {
		if (this.value.length == 0) {
			$(this).css({
				'background-color': '#ffe7e7'
			});
		} else {
			$(this).css({
				'background-color': '#fff'
			});
		}
	});

	$("#register_content #username").focus(function() {

		$("#register_prom .username_prom span.prompt").css({
			'display': 'inline'
		});
		$("#register_prom .username_prom span.prompt_dy").css({
			'display': 'none'
		});
	}).blur(function() {
		$("#register_prom .username_prom span.prompt").css({
			'display': 'none'
		});
		if (this.value.length == 0) {
			$("#register_prom .username_prom span.prompt_dy").css({
				'display': 'inline'
			});
		}
	});

	$("#register_content #password").focus(function() {


		$("#register_prom .password_prom span.prompt").css({
			'display': 'inline'
		});
		$("#register_prom .password_prom span.prompt_dy").css({
			'display': 'none'
		});
	}).blur(function() {
		$("#register_prom .password_prom span.prompt").css({
			'display': 'none'
		});
		if (this.value.length == 0) {
			$("#register_prom .password_prom span.prompt_dy").css({
				'display': 'inline'
			});
		}
	});



	$("#register_content #password2").focus(function() {
		$("#register_prom .password2_prom span.prompt").css({
			'display': 'inline'
		});
		$("#register_prom .password2_prom span.prompt_dy").css({
			'display': 'none'
		});
	}).blur(function() {
		$("#register_prom .password2_prom span.prompt").css({
			'display': 'none'
		});
		if (this.value.length == 0) {
			$("#register_prom .password2_prom span.prompt_dy").css({
				'display': 'inline'
			});
		}
	});

	$("#register_content #email").focus(function() {
		$("#register_prom .email_prom span.prompt").css({
			'display': 'inline'
		});
		$("#register_prom .email_prom span.prompt_dy").css({
			'display': 'none'
		});
	}).blur(function() {
		$("#register_prom .email_prom span.prompt").css({
			'display': 'none'
		});
		if (this.value.length == 0) {
			$("#register_prom .email_prom span.prompt_dy").css({
				'display': 'inline'
			});
		}
	});

	$("#register_content #phonenum").focus(function() {
		$("#register_prom .phonenum_prom span.prompt").css({
			'display': 'inline'
		});
		$("#register_prom .phonenum_prom span.prompt_dy").css({
			'display': 'none'
		});
	}).blur(function() {
		$("#register_prom .phonenum_prom span.prompt").css({
			'display': 'none'
		});
		if (this.value.length == 0) {
			$("#register_prom .phonenum_prom span.prompt_dy").css({
				'display': 'inline'
			});
		}
	});

});