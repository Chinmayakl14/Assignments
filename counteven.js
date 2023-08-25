function countEvenNumbers(numbers) {
    let evenCount = 0; // Initialize the count of even numbers
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenCount++; // Increment the count if the number is even
      }
    }
  
    return evenCount;
  }
  
  // Example usage
  console.log(countEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 3
  console.log(countEvenNumbers([10, 21, 32, 45])); // Output: 2
  console.log(countEvenNumbers([7, 9, 11, 13])); // Output: 0
  