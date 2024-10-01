/// <reference path="../javascript/jquery-3.7.1.js" />
/*
    Started on  : September, 2024
    Author      : __MeditaKnorr
    Project     : INAS IP - WebSite
    File        : JavaScript (.JS) + JQuery
*/

// Home Variables
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

  $('div.docs-posts-buttons div').click(function(e){
    $('div.docs-posts-buttons div').removeClass('active');
    $('div.docs-posts-boards div').removeClass('active');
    showDocPostBoard($(this).attr("id"));

  });

  /** OtherPage */
});

function showNavigationPane(id) {
  if(selectedLink) {
    $('#' + selectedLink + '-pane').removeClass('show-element');
    if(selectedLink === id) {
      selectedLink = '';
      return;
    }
  }

  selectedLink = id;
  $('#' + selectedLink + '-pane').toggleClass('show-element');
}

async function showDocPostBoard(id) {
$('div.docs-posts-boards div#' + id + '-board').addClass('active');
  $('div.docs-posts-buttons div#' + id).addClass('active');
}
