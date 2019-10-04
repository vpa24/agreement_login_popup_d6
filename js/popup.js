$(document).ready(function() {
  var baseUrl = Drupal.settings.baseUrl;
  var isPopup = Drupal.settings.isPopup;
  if (isPopup === true) {
      $("#myModal").modal({
        backdrop: false
      });
      var logoutbtn = `${baseUrl}/logout`;

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
        window.location.href = logoutbtn;
      });
    }
});
