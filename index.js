function hasTargetSum(array, target) {
  const seenNumbers = {};

  /*for(let i = 0; i < array.length; i++){
    const complement = target - array[i];
    if (seenNumbers[complement]) return true;
    seenNumbers[array[i]] = true;
  }*/ 
  // REFACTOR ABOVE TO 
  for (const number of array) {
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  write function that adds 2 numbers in the array by iterating through the array and see if it adds up to the target number
  run through the array and if num1InArray + num2InArray= target then return true
  if none matches return false



  iterate through each number in an array
    for the current number identify a complement number that adds to the target number (complement = target - number)
    iterate through the rest of the array
    check if any number is our complement
    if so return true
  if I get to end of array and haven't found any numbers that add to my target return false
  function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    // n steps (depending on the length of the input array)
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      // n * n steps (nested loop!)
      if (array[j] === complement) return true;
    }
  }
  // 1 step
  return false;
}
  // time: O(n^2)
  // space: O(n)


  CODE ABOVE FOLLOWS PSEUDOCODE BELOW
  create an object to keep track of numbers we've already seen
  iterate through each number in the array
    for the current number identify a complement number that adds to the target number (complement = target - number)
    check if any key in our object is the complement
    if so, return true
    otherwise, add that number to the object
  if I reach the end of the array, return false
  function hasTargetSum(array, target) {
  // 1 step
  const seenNumbers = {};
  for (const number of array) {
    // n steps
    const complement = target - number;
    // n steps
    if (seenNumbers[complement]) return true;
    // n steps
    seenNumbers[number] = true;
  }
  // 1 step
  return false;
}

  time: O(3n + 2) --> O(n) --> only one iteration loop that will depend on size of array input
  space: In terms of space complexity, we are creating a new data structure seenNumbers that will grow in proportion to the size of the input array, so our space complexity gets a bit worse — we are now also using O(n) space.
  // time: O(n)
  // space: O(n)
*/

/*
  Add written explanation of your solution here
*/

/*
  Problem in my words
  Add 2 numbers in the array and see if it adds up to the target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  /*
    [10], 10 // false
    [1, 2, 3, 6, 9], 10 // true // 1 + 9 = 10
    [-1, 2, 3, 0, 6], 5 // true // -1 + 6 = 5
    [1, 25, 50, 80, 90], 100 // false
  */
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  //my test examples
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([10], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 3, 0, 6], 5));
}

module.exports = hasTargetSum;
