function isPrime(num) {
  let sqrtnum = Math.floor(Math.sqrt(num));
  let prime = num != 1;
  for (let i = 2; i < sqrtnum + 1; i++) {
    // sqrtnum+1
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}
isPrime(7);
