// Function to generate the elements

const elementGenerator = function (element, className, content, where) {
  const createElement = document.createElement(element);
  createElement.classList.add(className);
  createElement.innerHTML = content;
  where.append(createElement);
};

// Container and heading creation

elementGenerator("div", "container", "", document.body);

const container = document.querySelector(".container");

elementGenerator("h1", "heading", "Retro counter", container);

// Creation of the display and its value

elementGenerator("div", "displayValue", "", container);

const displayValue = document.querySelector(".displayValue");

elementGenerator("p", "counterValue", "0", displayValue);

// Buttons creation

elementGenerator("div", "btn-container", "", container);

const btnContainer = document.querySelector(".btn-container");

for (let i = 0; i < 3; i++) {
  elementGenerator("div", "btn", "", btnContainer);
}

elementGenerator("button", "decrease", "-", btnContainer.firstElementChild);
elementGenerator("button", "reset", "Reset", btnContainer.childNodes[1]);
elementGenerator("button", "increase", "+", btnContainer.lastElementChild);

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
