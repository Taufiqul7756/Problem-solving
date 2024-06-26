var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;

  let start = 0;
  let end = m;
  // Binary search starts from here
  while (start <= end) {
    // Partitions of both the array
    let partitionNums1 = Math.floor((start + end) / 2);
    let partitionNums2 = Math.floor((m + n + 1) / 2) - partitionNums1;
    let maxLeftNums1 =
      partitionNums1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionNums1 - 1];
    let minRightNums1 =
      partitionNums1 == m ? Number.MAX_SAFE_INTEGER : nums1[partitionNums1];
    let maxLeftNums2 =
      partitionNums2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionNums2 - 1];
    let minRightNums2 =
      partitionNums2 == n ? Number.MAX_SAFE_INTEGER : nums2[partitionNums2];
    if (maxLeftNums1 <= minRightNums2 && maxLeftNums2 <= minRightNums1) {
      if ((m + n) % 2 == 0) {
        return (
          (Math.max(maxLeftNums1, maxLeftNums2) +
            Math.min(minRightNums1, minRightNums2)) /
          2.0
        );
      } else {
        return Math.max(maxLeftNums1, maxLeftNums2);
      }
    } else if (maxLeftNums1 > minRightNums2) {
      end = partitionNums1 - 1;
    } else {
      start = partitionNums1 + 1;
    }
  }
};
