/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let newSet = new Set();

  while (true) {
    let newRandomNumber = getRandomInt(0, nums.length);

    if (!newSet.has(nums[newRandomNumber])) {
      newSet.add(nums[newRandomNumber]);
      let count = 0;
      for (let elem of nums) {
        if (elem === nums[newRandomNumber]) {
          count++;
        }
        if (count >= nums.length / 2) return nums[newRandomNumber];
      }
    }
  }
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
