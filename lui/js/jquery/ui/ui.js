$(document).ready(function () {
	
	
	// UI BOX CLOSE-OPEN TOGGLE
	$(".lui_box .header .close").click(function () {
		$(this).parent().parent().parent(".lui_box").toggleClass('closed');
		$(this).toggleClass('active')
	});


	// FORM PREFIX / POSTFIX

	// TODO: CHECK STRANGE WIDTH CALCULATIONS FOR POSTFIX/PREFIX ELEMENTS
	$(window).load(function () {
		function prefix_calc() {
			$(".lui_form .item .input.prefix input").each(function () {
				var prefix_element = $(this).siblings(".lui_prefix").outerWidth(true);
				var prefix_width = $(this).parent().width() - prefix_element
				$(this).css('width', prefix_width).css('margin-left', prefix_element);
			})
		};

		function postfix_calc() {
			$(".lui_form .item .input.postfix input").each(function () {
				var postfix_element = $(this).siblings(".lui_postfix").outerWidth(true);
				var postfix_width = $(this).parent().width() - postfix_element
				$(this).css('width', postfix_width);
			})
		};

		prefix_calc();
		postfix_calc();
		$(window).resize(function () {
			setTimeout(
				function () {
					prefix_calc();
					postfix_calc();
				}, 450);
		});
	});
});
