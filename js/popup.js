$(document).ready(function() {
  var baseUrl = Drupal.settings.baseUrl;
  var isPopup = Drupal.settings.isPopup;
  if (isPopup) {
    var logoutbtn = `${baseUrl}/logout`;

    $("#myModal").modal({
      backdrop: false
    });
    $("#btnAgree").click(function() {
      $.ajax({
        type: "POST",
        url: "?q=mymodule_ajax",
        data: {}
      }).done(function() {
        $("#myModal").modal("hide");
        isPopup = false;
      });
    });
    $("#btnDisagree").click(function() {
      $(location).attr(logoutbtn);
    });
  }
});
