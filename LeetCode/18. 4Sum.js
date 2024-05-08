var fourSum = function (nums, target) {
  let solutionArrays = [];

  sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 3; i++) {
    if (i > 0 && sortedNums[i] == sortedNums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < sortedNums.length - 2; j++) {
      if (j > i + 1 && sortedNums[j] == sortedNums[j - 1]) {
        continue;
      }

      let left = j + 1;
      let right = sortedNums.length - 1;

      while (left < right) {
        const total =
          sortedNums[i] + sortedNums[j] + sortedNums[left] + sortedNums[right];

        if (total == target) {
          solutionArrays.push([
            sortedNums[i],
            sortedNums[j],
            sortedNums[left],
            sortedNums[right],
          ]);

          do {
            left++;
          } while (sortedNums[left] == sortedNums[left - 1]);

          do {
            right--;
          } while (sortedNums[right] == sortedNums[right + 1]);
        } else if (total < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return solutionArrays;
};
