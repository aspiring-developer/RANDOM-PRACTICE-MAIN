//'use strict';
//////////////////////////////////////////////////////

const temp = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// ignore error
// find min and min value
// subtract min from max

function temperature(num) {
  let max = -1000000;
  let min = 1000000;
  for (let i = 0; i < num.length; i++) {

    if (num[i] > max) { max = num[i] };
    if (num[i] < min) { min = num[i] };
  }
  let amplitude = max - (-min);
  console.log(max, min, amplitude);
}
temperature(temp);
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
