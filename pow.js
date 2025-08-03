function pow(x, y) {
  let result = 1;

  for (let i = 0; i < y; i++) {
    result = result * x;
  }

  console.log("Відповідь = " + result);
}

pow(6, 3);
