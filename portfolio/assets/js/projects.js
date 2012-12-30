function init_project_slideshow() {
	// We need the height of the tallest project description so we can make
	// scrollable that high
	var max_project_height = get_max_li_height("#project_data")+10;

	// Change our beautiful markup to match scrollable's completely dumb
	// requirements.
	$("#project_data").each(function(i) {
		$(this).replaceWith(
			"<div class='scrollable'><div class='items'>" + this.innerHTML + "</div></div>"
		);
	});
	fix_lis_for_scrollable(".items");

	$(".scrollable").height(max_project_height+"px");

	// Initialize scrollable and the navigator plugin
	var scroll_api = $(".scrollable").scrollable({
			size: 1,
			circular:true,
			keyboard:true,
			mouse: false,
			clickable: false
	});
	next_prev_buttons(scroll_api, $('#next a'), $('#prev a'));
	scroll_api.next();
	scroll_api.navigator({
		navi: '#project_selector'
	});
}

function next_prev_buttons(scrollable, next, prev) {
	// Allows use of arbitrary elements as next/prev buttons. Not markup
	// location specific as it is using scrollable's built in next/prev
	// functionality.
	next.css('display', 'block');
	prev.css('display', 'block');

	prev.click(function(){
		scrollable.data('scrollable').prev();
		return false;
	});

	next.click(function(){
		scrollable.data('scrollable').next();
		return false;
	});
}

function fix_lis_for_scrollable(container) {
	// The markup that jquery tools requires for scrollable is totally dumb.
	// Scratch that. The fact that it requires specific markup is totally dumb.
	$(container+" li").each(function(i) {
		var cls = $(this).attr('class');
		var id = $(this).attr('id');
		var html = this.innerHTML;

		$(this).replaceWith(
			$("<div class='" + cls + "' id='" + id +"'></div>").append(html)
		);
	});
}

function get_max_li_height(ul) {
	var height = 0;
	$(ul+" li").each(function(i){
		if ($(this).height() > height) {
			height = $(this).height();
		}
	});
	return height;
}
