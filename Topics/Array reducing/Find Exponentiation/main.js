function calculateExp(numbers) {
    // Reverse the array to calculate from right to left
    const reversedNumbers = numbers.reverse();

    // Use reduce to compute the exponentiation
    const result = reversedNumbers.reduce((accumulator, currentValue) => {
        return Math.pow(currentValue, accumulator);
    });

    // Output the final result
    console.log(result);
}