const btn = document.querySelector("#btn");
const res = document.querySelector("#result");
var cheat = 1;

document.addEventListener("keydown", (e) => {
  if (e.key == "w") {
    // wheat = !cheat
    console.log(cheat);
  }
});
btn.addEventListener("click", (e) => {
  res.innerHTML = generate(500);
});

function generate(max) {
  let res = 0;
  if (cheat % 5 == 0) {
    res = 4;
    // cheat= !cheat
  } else {
    res = Math.ceil(Math.random() * max);
  }
  console.log(cheat);
  cheat += 1;
  return res;
}
