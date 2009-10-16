$(function(){
  $(".sidebar").accordion({ header: 'h3', autoHeight: false, navigation: true, navigationFilter: function() {if (typeof main_category != "undefined") {return this.id == main_category}} });
})