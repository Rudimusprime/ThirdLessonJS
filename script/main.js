const btnFirst = document.querySelector('button:nth-child(1)');
const btnSecond = document.querySelector('button:nth-child(2)');
const li = document.querySelectorAll('li');
let fontSize = 10;

const displayList = () => {

    for (let i = 0; i < li.length; i++) {

        console.log("działa");

        li[i].style.display = "block";
        li[i].style.fontSize = `${fontSize}px`;
    }

    fontSize += 1;
}

const displayListForEach = () => {

    fontSize++;

    li.forEach((li => {
        li.style.display = "block";
        li.style.fontSize = fontSize + "px";
    }))

    fontSize += 1;
}

btnFirst.addEventListener("click", displayList);
btnSecond.addEventListener("click", displayListForEach);