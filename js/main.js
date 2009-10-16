$(function(){
  $(".sidebar").accordion({
    header: 'h3', autoHeight: false,
    icons: {'header': 'ui-icon-triangle-expand', 'headerSelected': 'ui-icon-triangle-collapse'},
    navigation: true, navigationFilter: function() {if (typeof main_category != "undefined") {return this.id == main_category}} });
})