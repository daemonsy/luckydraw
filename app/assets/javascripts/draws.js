// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

var draw;
var winner;


function luckyDraw(){
  $('#container').isotope('shuffle');
}

function startDraw() {
  draw = self.setInterval("luckyDraw()",600);
  $('#draw-button').hide(1000);
  setTimeout("$('#pick-button').show(250)",1000);

}

function stopDraw(){
  draw = window.clearInterval(draw)
  pickWinner();

}

function pickWinner (){
  var winners = new Array();
  winners = $('div').filter('.participant');
  console.log(winners.length)
  console.log(winners[0])
  var current_winner=Math.floor(Math.random()*(winners.length))
  winner = winners[current_winner];
  $(winner).attr('class','winner').hide();
  $('#container').isotope('remove', $('.participant'));
  $('#luckydraw-winner-id').val($('.winner input').val());
  setTimeout("$(winner).show(1500)",1000);
  setTimeout(function() {
    $('#pick-button').hide(300);
    $('#submit-button').show(200);
    $('#reload-button').show(200);
    }, 1500);
}

function reloadData() {
  setTimeout(function() {
    $('#content').load('/draws #content',"success",function() {
      startLoad();
      initializeIsotope()
      ;})}, 1500);
  
}
function startLoad() {
  $('#pick-button').hide();
  $('#submit-button').hide();
  $('#reload-button').hide();
}

function initializeIsotope(){
  $('#container').isotope({
      itemSelector: '.participant',
      layoutMode:   'fitRows'
    });
}

$(document).ready(function () {
  startLoad();
  initializeIsotope();



}); 
  

