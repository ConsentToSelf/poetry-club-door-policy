const summer = [
  "Sunshine warming my toes,",
  "Underwater fun with my friends.",
  "Making homemade ice cream on the porch,",
  "Many long nights catching fireflies.",
  "Early morning walks to the creek,",
  "Reveling in the freedom of lazy days.",
];
// const expectedLetters = ["S", "U", "M", "M", "E", "R"];

function frontDoorResponse(line) {
  //   let newArr = [];
  //   for (let i = 0; i < line.length; i++) {
  //     newArr.push(line[i][0]);
  //   }
  //   return newArr;
  return line[0][0];
}
// console.log(frontDoorResponse(summer));

function frontDoorPassword(word) {
  return word[0] + word.slice(1).toLowerCase();
}

console.log(frontDoorPassword("SUMMER"));
