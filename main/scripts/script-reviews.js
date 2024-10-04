
function CreateNewElement(img, textup, textdown){
    var elemimg = document.createElement("img");
    elemimg.src = img;
    elemimg.alt = "Изображение";
    elemimg.classList.add('img-review');
    document.getElementById('picture-section').appendChild(elemimg);

    var elemtext = document.createElement("ul");
    elemtext.innerHTML =
        `
        <p>`+textup+`</p>
        <p>`+textdown+`</p>
        `;
    document.getElementById('text-section').appendChild(elemtext);
}

CreateNewElement("main/images/reviews/rev1.png", "Ручная работа", "Углич");
CreateNewElement("main/images/reviews/rev2.png", "Реставрация храма", "Торжок");
CreateNewElement("main/images/reviews/rev3.png", "Дизайнерская лепнина", "Лучинское");
CreateNewElement("main/images/reviews/rev4.png", "Дизайнерские панно", "Ярославль");