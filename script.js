let headline = document.querySelector(".headline-content h1");

headline.textContent = "Elevate to New Heights with Calisthenics";

let headingTwo = document.querySelectorAll("h2");
console.log(headingTwo);

headingTwo.forEach((item) => {
  item.style.color = "darkred";
  item.style.fontSize = "2.2rem";
});

let info = document.getElementById("info");

let newDiv = document.createElement("div");

let button = document.createElement("button");

button.textContent = "Learn More";
button.style.backgroundColor = "darkred";
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.borderRadius = "5px";

newDiv.appendChild(button);
info.appendChild(newDiv);

function moreInfo() {
  alert("More information will be coming soon");
}
button.addEventListener("click", moreInfo);
