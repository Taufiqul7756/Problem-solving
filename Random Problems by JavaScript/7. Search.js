const sentence =
  "It taufiq would be a taufiq pleasure taufiq to learn more about needs, Taufiq and I would welcome the chance to provide further insight into my technical abilities and personal attributes. Thank you for considering my candidacy for this position. ";

let position = sentence.search(/taufiq/i);

position = position >= 0 ? position : "Not Found";

console.log(position);
