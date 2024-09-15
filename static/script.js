// scripts.js

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function updateTime(i) {
    $('#time').load('http://localhost:5000/ticker/' + 0 + '/' + i);
  }
  
  function updateCrop1(i) {
    $('#crop1').load('http://localhost:5000/ticker/' + 1 + '/' + i);
  }
  
  function updatePrice1(i) {
    $('#price1').load('http://localhost:5000/ticker/' + 2 + '/' + i);
  }
  
  function updateChange1(i) {
    $("#change1").attr("src", "../static/gain-icon.png");
    $('#pos-change').load('http://localhost:5000/ticker/' + 3 + '/' + i);
  }
  
  function updateCrop2(i) {
    $('#crop2').load('http://localhost:5000/ticker/' + 4 + '/' + i);
  }
  
  function updatePrice2(i) {
    $('#price2').load('http://localhost:5000/ticker/' + 5 + '/' + i);
  }
  
  function updateChange2(i) {
    $("#change2").attr("src", "../static/loss-icon.png");
    $('#neg-change').load('http://localhost:5000/ticker/' + 6 + '/' + i);
  }
  
  var i = 0;
  setInterval(async function () {
    i = (i + 1) % 5;
    updateTime(i);
    updateCrop1(i);
    await sleep(200);
    updatePrice1(i);
    await sleep(200);
    updateChange1(i);
    await sleep(200);
    updateCrop2(i);
    await sleep(200);
    updatePrice2(i);
    await sleep(200);
    updateChange2(i);
    await sleep(200);
  }, 4000);
  
  $(document).ready(function () {
    $('.slider').slider({ full_width: true });
  });
  