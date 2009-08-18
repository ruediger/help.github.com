$(function(){
  if (typeof main_category == "undefined") {
    $(".sidebar dl:first").slideDown("slow").parent().addClass("expanded")
  } else {
    $(".sidebar dl#" + main_category).slideDown("slow").parent().addClass("expanded")
  }

  $(".sidebar li").click(function(){
    if ($(this).children("dl").is(":hidden")) {
      $(".sidebar dl:visible").slideUp("fast").parent().removeClass("expanded")
      $(this).addClass("expanded").children("dl").slideDown("fast")
    }
  })
})