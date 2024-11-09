// seperate file for jquery methods
$(document).ready(function(){
  $("#btn-retract").hide();
  $("#btn-expand").click(function(){
    $("#btn-expand").hide();
    $("#btn-retract").show();
    $("gmpx-store-locator").animate({'height': '100%'});
    //$("gmpx-store-locator").height("100%");
  });
  $("#btn-retract").click(function(){
    $("#btn-expand").show();
    $("#btn-retract").hide();
    $("gmpx-store-locator").animate({'height': '40%'});
    //$("gmpx-store-locator").height("40%");
  });
});