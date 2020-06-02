'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_Y_BOTTOM = 280;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP - FONT_GAP;
var BAR_WIDTH = 40;
var GAP_BETWEEN = 50;
var MAX_BAR_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

 function getRandomColor() {
  var h = 240,
      s = Math.floor(Math.random() * (100)) + '%',
      l = 50 + '%';
  return 'hsla(' + h.toString(10) + ',' + s.toString(10) + ',' + l.toString(10) + ', 1)';
}

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');


  ctx.fillStyle = '#000';
  // Блок с текстом
  ctx.font = "16px PT Mono";
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 3, CLOUD_Y + GAP * 3);

  ctx.font = "16px PT Mono";
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 3, CLOUD_Y + GAP * 3  + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP_BETWEEN + (GAP_BETWEEN + BAR_WIDTH) * i, CLOUD_Y_BOTTOM - GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP_BETWEEN + (GAP_BETWEEN + BAR_WIDTH) * i, CLOUD_Y_BOTTOM - (MAX_BAR_HEIGHT * times[i]) / maxTime - GAP * 4);
  if (players[i] === 'Вы') {
    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
    ctx.fillStyle = getRandomColor();
  }
    ctx.fillRect(CLOUD_X + GAP_BETWEEN + (GAP_BETWEEN + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP - ((MAX_BAR_HEIGHT * times[i]) / maxTime) - GAP, BAR_WIDTH, (MAX_BAR_HEIGHT * times[i]) / maxTime) - GAP;
  }
};


