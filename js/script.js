{

const welcome = () => {
    console.log("Hi");
}

welcome();

const changeRollerPrice = () => {

    const high = document.querySelector(".js-rollerHigh").innerText;
    const howMuch = document.querySelector(".js-howMuch");

    switch (true) {
        case true === high < 1500:
            howMuch.innerText = "200";
            break;
        case true === high < 2000:
            howMuch.innerText = "300";
            break;
        case true === high > 2000:
            howMuch.innerText = "500";
            break;
    }
};

changeRollerPrice();

const onChangeRollerClick = () => {

    const picture = document.querySelector(".js-picture");
    const themeName = document.querySelector(".themeName")

    if (picture.src.endsWith("images/flat.jpg")) {
        picture.src = "images/flat_p.jpg";
        themeName.innerText = "zaciemniająca";
    } else if (picture.src.endsWith("images/flat_p.jpg")) {
        picture.src = "images/flat.jpg";
        themeName.innerText = "dzień / noc";
    }
};

const init = () => {

    const button = document.querySelector(".js-button");
    button.addEventListener("click", onChangeRollerClick);
};

init();

}