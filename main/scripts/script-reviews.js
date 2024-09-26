
function CreateNewElement(img, text){
    var elem = document.createElement("div");
    elem.className = 'element-review flex-spacebetween';
    elem.innerHTML = 
                `              
                <div class="picture-section">
                    <img src="`+img+`" alt="Отзыв">
                </div>
                <div class="text-section color-white">
                    <ul>
                        <p>`+text+`</p>
                    </ul>
                </div>
                `;
    document.getElementById('elements-review').appendChild(elem);
}

CreateNewElement("main/images/reviews/rev1.png", "Ручная работа, Углич");
CreateNewElement("main/images/reviews/rev2.png", "Реставрация храма, Торжок");
CreateNewElement("main/images/reviews/rev3.png", "Дизайнерская лепнина, Лучинское");
CreateNewElement("main/images/reviews/rev4.png", "Дизайнерские панно, Ярославль");