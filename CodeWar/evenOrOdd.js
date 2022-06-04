// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(even_or_odd(1, 2, 3, 4, 5, 6, 7, 8));

// Codewars:
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}