// Create HTML elements

const container = document.querySelector(".container");
const btnContainer = document.querySelector(".btn-container");

const displayValue = document.createElement("div");
displayValue.classList.add("displayValue");
displayValue.innerHTML = "<p class='counterValue'>0</p>";
container.prepend(displayValue);

const btn = function (element, className, content, where) {
  const createElement = document.createElement(element);
  createElement.classList.add(className);
  createElement.innerHTML = content;
  where.append(createElement);
};

for (let i = 0; i < 3; i++) {
  btn("div", "btn", "", btnContainer);
}

btn("button", "decrease", "-", btnContainer.firstElementChild);
btn("button", "reset", "Reset", btnContainer.childNodes[1]);
btn("button", "increase", "+", btnContainer.lastElementChild);

// Counter functionality

const audioBtn = "../assets/audio/coin.mp3";
const audioReset = "../assets/audio/arcade.mp3";
const counterValue = document.querySelector(".counterValue");

document.addEventListener("click", function (e) {
  if (e.target.classList == "increase") {
    counterValue.innerHTML++;
    const audio = new Audio(audioBtn);
    audio.play();
  } else if (e.target.classList == "decrease") {
    counterValue.innerHTML >= 1 ? counterValue.innerHTML-- : 0;
    const audio = new Audio(audioBtn);
    audio.play();
  } else if (e.target.classList == "reset") {
    counterValue.innerHTML = 0;
    const audio = new Audio(audioReset);
    audio.play();
  }
});
