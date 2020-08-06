function myFib(num) {
  let a = 0,
    b = 1,
    temp;

  while (num >= 0) {
    temp = b;
    b = a + b;
    a = temp;
    num--;
  }

  return a;
}
console.log(myFib(5));
