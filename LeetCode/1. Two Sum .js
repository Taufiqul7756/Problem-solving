var twoSum = function (nums, target) {
  const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in hashmap) {
      return [hashmap[diff], i];
    }

    hashmap[nums[i]] = i;
  }

  return [];
};
