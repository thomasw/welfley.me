$(document).ready(function(){
	init_project_slideshow();
	var GA_ACCOUNT = $("meta[name=ga-account]").attr("content");
	if(GA_ACCOUNT!=='nope') $.ga(GA_ACCOUNT);
});
