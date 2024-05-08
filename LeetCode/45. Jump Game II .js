var jump = function (nums) {
  var len = nums.length;
  var step = 0;
  var now = 0;
  var max = 0;

  for (var i = 0; i < len - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (i === now) {
      step++;
      now = max;
    }
  }

  return step;
};
