// const grandfather = document.querySelector(".grandfather");
// const son = document.querySelector(".son");
// const grandson = document.querySelector(".grandson");

// grandfather.addEventListener("click", onGrandClick);
// son.addEventListener("click", onSonClick);
// grandson.addEventListener("click", onGrandsonClick);
// document.addEventListener("click", onDocumentClick);
// window.addEventListener("click", onWindowClick);

// function onGrandClick(event) {
//     console.log("event.target", event.target);
//     console.log("event.currentTarget", event.currentTarget);

// }

// function onSonClick(event) {
//     console.log("event.target", event.target);
//     console.log("event.currentTarget", event.currentTarget);

// }

// function onGrandsonClick(event) {
//     console.log("event.target", event.target);
//     console.log("event.currentTarget", event.currentTarget);
// }

// function onDocumentClick(event) {
//     console.log("event.target", event.target);
//     console.log("event.currentTarget", event.currentTarget);

// }

// function onWindowClick(event) {
//     console.log("event.target", event.target);
//     console.log("event.currentTarget", event.currentTarget);
// }



// const buttonsEls = document.querySelectorAll('button');
// console.log(buttonsEls);

// buttonsEls.forEach(btn => {
//     console.log(btn);
//     btn.addEventListener("click", () => {
//         console.log("клік по кнопці");

//     })
// });

// const ul = document.querySelector('.ul');

// ul.addEventListener('click', (event) => {
//     // console.log('event.target', event.target.nodeName); // .nodeName - повертає рядок тега
//     // console.log('event.currentTarget', event.currentTarget);
//     // if (event.target.nodeName !== 'BUTTON') {
//     //     return;
//     // }

//     // console.log('Ураа, я клікнув по кнопці!');
//     if (!event.target.classList.contains('btn')) {
//         return;
//     }
//     console.log("Ураа, я клікнув по кнопці");
// });









//                                    Урок 2

const colors = [
    { hex: "#FF0000" },
    { hex: "#00FF00" },
    { hex: "#0000FF" },
    { hex: "#FFFF00" },
    { hex: "#00FFFF" },
    { hex: "#FF00FF" },
    { hex: "#FFA500" },
    { hex: "#800080" },
    { hex: "#FFC0CB" },
    { hex: "#A52A2A" },
    { hex: "#808080" },
    { hex: "#000000" },
    { hex: "#FFFFFF" },
    { hex: "#000080" },
    { hex: "#008080" },
    { hex: "#808000" },
];

const list = document.querySelector('.list');
const backdropEl = document.querySelector('.backdrop');
const modalEl = document.querySelector('.modal');
const btnEl = document.querySelector('.btn');

const createItems = (array) => {
    return list.innerHTML = array.map(({ hex }, index) =>
        `
            <li class="item" style="background-color: ${hex};">${index + 1}</li>
            `
    ).join('');
};

list.addEventListener('click', (event) => {
    if (event.target.nodeName === 'UL') {
        return;
    }

    const r = Math.round(Math.random() * (255 - 1) + 1);
    const g = Math.round(Math.random() * (255 - 1) + 1);
    const b = Math.round(Math.random() * (255 - 1) + 1);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    back.style.backgroundColor = bcg;

    backdropEl.style.display = 'flex'; 
});

createItems(colors);

const closeModal = () => {
    return backdropEl.style.display = 'none'; 
}

btnEl.addEventListener('click', (event) => {
    closeModal()
});