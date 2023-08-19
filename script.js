let string = "";
let buttons = document.querySelectorAll(`.btn`);
Array.from(buttons).forEach((button) => {
  button.addEventListener(`click`, (e) => {
    // console.log(e.target);
    if (e.target.innerHTML == `=`) {
      string = eval(string);
      document.querySelector(`.input`).value = string;
    } else if (e.target.innerHTML == `AC`) {
      string = "";
      document.querySelector(`.input`).value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector(`.input`).value = string;
    }
  });
});

let light = document.getElementById(`sun-img`);
let dark = document.getElementById(`moon-img`);
light.addEventListener(`click`, () => {
  light.src = `images/icons8-sun-ios-16/sun-active.png`;
  dark.src = `images/icons8-sun-ios-16/moon-inactive.png`;
});

dark.addEventListener(`click`, () => {
  light.src = `images/icons8-sun-ios-16/sun-inactive.png`;
  dark.src = `images/icons8-sun-ios-16/moon-active.png`;
});
