/// <reference path="../javascript/jquery-3.7.1.js" />
/*
    Started on  : September, 2024
    Author      : __MeditaKnorr
    Project     : INAS IP - WebSite
    File        : JavaScript (.JS) + JQuery
*/

let selectedLink = '';

$(document).ready(function(){
  /** HomePage */
  $('div.navigation-link').click(function(e){
    showNavigationPane($(this).attr("id"));
  });

  $(document).mouseup(function(e){
    var container = $('div.header--third-row .main-container');
    if (!container.is(e.target) && container.has(e.target).length === 0){
      $('div.navigation-link-pane').removeClass('show-element');
    }
});

  /** OtherPage */
});

function showNavigationPane(id) {
  if(selectedLink) {
    console.log(selectedLink);
    $('#' + selectedLink + '-pane').removeClass('show-element');
    if(selectedLink === id) {
      selectedLink = '';
      return;
    }
  }

  selectedLink = id;
  $('#' + selectedLink + '-pane').toggleClass('show-element');
}
