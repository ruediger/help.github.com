$(function(){
  if (typeof main_category == "undefined") {
    $(".sidebar dl:first").slideDown(2)
  } else {
    $(".sidebar dl#" + main_category).slideDown(2)
  }

  $(".sidebar h3").click(function(){
    if ($(".sidebar dl#" + this.id).is(":hidden")) {
      $(".sidebar dl:visible").slideUp("fast")
      $(".sidebar dl#" + this.id).show("fast")
    }
  })
})