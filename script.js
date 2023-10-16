const welcome = () => {
    console.log("Hi");
}

welcome();

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