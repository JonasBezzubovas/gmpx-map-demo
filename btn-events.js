$(document).ready(function(){
  $("#btn-retract").hide();
  $("#btn-expand").click(function(){
    $("#btn-expand").hide();
    $("#btn-retract").show();

    $("gmpx-store-locator").height("100%");
  });
  $("#btn-retract").click(function(){
    $("#btn-expand").show();
    $("#btn-retract").hide();

    $("gmpx-store-locator").height("40%");
  });
});