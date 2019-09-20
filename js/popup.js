$(document).ready(function() {
	if ($.cookie("isPopup") == 0 || $.cookie("isPopup") === undefined) {
		var baseUrl = Drupal.settings.baseUrl;
		var url = `${baseUrl}/node/1`;
		var logoutbtn = `${baseUrl}`;
		
		$("#myModal").modal({
		  backdrop: false
		});
		$("#btnAgree").click(function() {
		  $.ajax({
			type: "POST",
			url: "?q=mymodule_ajax",
			data: {}
		  }).done(function() {
			$(location).attr("href", url);
		  });
		});
		$("#btnDisagree").click(function() {
			$(location).attr(logoutbtn);
		});	
	}
});
