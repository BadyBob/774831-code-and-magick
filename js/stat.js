'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var barWidth = 40;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = 'normal 16px PT Mono';

  ctx.fillText('Ура вы победили!', CLOUD_X + 2 * GAP, TEXT_WIDTH - GAP);
  ctx.fillText('Список результатов:', CLOUD_X + 2 * GAP, TEXT_WIDTH + GAP);

  var maxTime = getMaxElement(times);
  var mult = BAR_HEIGHT / maxTime;

  for (var i = 0; i < names.length; i++) {
    var score = Math.floor(times[i]);

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';

    ctx.fillText(score, BAR_HEIGHT + i * (barWidth + TEXT_WIDTH), -mult * times[i] + 235);

    ctx.fillText(names[i], BAR_HEIGHT + i * (barWidth + TEXT_WIDTH), CLOUD_HEIGHT - GAP);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + Math.random() * 255 + ', 1)';
    }
    ctx.fillRect(BAR_HEIGHT + i * (barWidth + TEXT_WIDTH), CLOUD_HEIGHT - GAP - FONT_GAP, barWidth, -mult * times[i]);
  }
};
