const counterText = document.getElementById("counter-txt");
const counterButton = document.getElementById("inc-count");
const decButton = document.getElementById("dec-count");

function counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      counterText.innerText = `Counter: ${count}`;
    },
    decrement: function () {
      count--;
      counterText.innerText = `Counter: ${count}`;
    },
  };
}

const counterFunctions = counter();

counterButton.addEventListener("click", counterFunctions.increment);
decButton.addEventListener("click", counterFunctions.decrement);

counterText.innerText = "Counter: 0";
