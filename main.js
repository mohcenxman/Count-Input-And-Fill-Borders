let counter = document.querySelector(".counter");
let progress = document.querySelector(".progress");
let div = document.querySelector("div");
let input = document.querySelector("input");
let maxLength = input.getAttribute("maxlength");

counter.innerHTML = maxLength;

input.oninput = function() {
    counter.innerHTML = maxLength - this.value.length;
    counter.innerHTML == 0 ? counter.classList.add("zero") : counter.classList.remove("zero");
    // Set Progress
    progress.style.width = `${(this.value.length * 100) / maxLength}%`
};
