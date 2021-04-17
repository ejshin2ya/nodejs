var name = "k8805";
var letter =
  "lorem " +
  name +
  " \n\nipsum dolor sit amet " +
  name +
  " , consectrtur adipiscing elit eunjeong, sed do eiusmod " +
  name;

var letter = `lorem ${name}

ipsum dolor sit amet ${name}, consectrtur adipiscing elit eunjeong, sed ${
  1 + 1
} do eiusmod ${name}`;

console.log(letter);
