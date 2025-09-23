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

const ul = document.querySelector('.ul');

ul.addEventListener('click', (event) => {
    // console.log('event.target', event.target.nodeName); // .nodeName - повертає рядок тега
    // console.log('event.currentTarget', event.currentTarget);
    // if (event.target.nodeName !== 'BUTTON') {
    //     return;
    // }

    // console.log('Ураа, я клікнув по кнопці!');
    if (!event.target.classList.contains('btn')) {
        return;
    }
    console.log("Ураа, я клікнув по кнопці");
});