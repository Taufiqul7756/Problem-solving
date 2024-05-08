function longestString(names) {
  let longestName = "";
  for (let name of names) {
    if (name.length > longestName.length) {
      longestName = name;
    }
  }
  return [longestName, names.indexOf(longestName)];
}

console.log(
  longestString([
    "Taufiqul islam",
    "Riduan ferdaous",
    "moniruzzaman",
    "Fasiall",
  ])
);
