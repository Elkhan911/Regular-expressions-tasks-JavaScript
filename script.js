function func(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  let res = sum / nums.length;
  return res;
}

console.log(func(1, 2, 3, 4, 5, 6));
