function findMaxValue(numbers) {
    if (numbers.length === 0) {
      return undefined; // Return undefined for an empty array
    }
  
    let maxValue = numbers[0]; // Initialize maxValue with the first element
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxValue) {
        maxValue = numbers[i]; // Update maxValue if a larger number is found
      }
    }
  
    return maxValue;
  }
  
  // Example usage
  console.log(findMaxValue([5, 9, 2, 6, 3])); // Output: 9
  console.log(findMaxValue([-10, -5, -2, -8])); // Output: -2
  console.log(findMaxValue([100, 87, 92, 105])); // Output: 105
  