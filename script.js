const welcome = () => {
    console.log("Hi");
}



let picture = document.querySelector(".js-picture");
let button = document.querySelector(".js-button");
let themeName = document.querySelector(".themeName")

button.addEventListener("click", () => {
    if (picture.src.endsWith("images/flat.jpg")) {
        picture.src = "images/flat_p.jpg";
        themeName.innerText = "zaciemniająca";
    } else if (picture.src.endsWith("images/flat_p.jpg")) {
        picture.src = "images/flat.jpg";
        themeName.innerText = "dzień / noc";
    }
});

let high = document.querySelector(".high").innerText;
let howMuch = document.querySelector(".howMuch");

switch (true) {
    case true === high < 1500:
        howMuch.innerText = "200";
        break;
    case true === high < 2000:
        howMuch.innerText = "300";
        break;
    case true === high > 2000:
        howMuch.innerText = "500";
}