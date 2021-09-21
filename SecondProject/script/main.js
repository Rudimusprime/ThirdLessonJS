let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    const btnReset = document.createElement("button");
    const list = document.createElement("ul");
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    document.body.appendChild(list);
    btn.textContent = "Dodaj 10 elementów listy";
    btnReset.textContent = "Usuń elementy listy";
    btn.addEventListener("click", createLiElements);
    btnReset.addEventListener("click", cleanList);
}
const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        let listItem = document.createElement("li");
        document.querySelector("ul").appendChild(listItem);
        listItem.style.fontSize = `${size++}px`;
        listItem.textContent = `Element nr ${orderElement++}`;
    }
}
const cleanList = () => {
    orderElement = 1;
    size = 10;
    document.querySelector("ul").textContent = "";
}
init();