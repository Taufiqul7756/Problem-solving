var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
      while (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i]) {
          swap(nums, i, nums[i] - 1);
      }
  }
  let i;
  for (i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
          break;
      }
  }
  return i + 1;

  function swap(nums, i, j) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
  }
};