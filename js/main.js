$(function(){
  if (typeof main_category == "undefined") {
    $(".sidebar dl:first").slideDown("slow").parent().addClass("expanded")
  } else {
    $(".sidebar dl#" + main_category).slideDown("slow").parent().addClass("expanded")
  }

  $(".sidebar h3").click(function(){
    if ($(this).siblings("dl").is(":hidden")) {
      $(".sidebar dl:visible").slideUp("fast").parent().removeClass("expanded")
      $(this).siblings("dl").slideDown("fast").parent().addClass("expanded")
    }
  })
})