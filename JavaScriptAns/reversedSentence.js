function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversedWords = words.map((word) => reverseString(word));
  return reversedWords.join(" ");
}

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
