function sortArrayDescending(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

const numbers = [1,2,3,4,5,6,7,8];
sortArrayDescending(numbers);
console.log(numbers);
