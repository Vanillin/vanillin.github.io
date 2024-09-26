
function CreateNewElement(name, img, price, lenght, wight, heigth){
    var elem = document.createElement("div");
    elem.className = 'element-grid backcolor-darkgray';
    elem.innerHTML = 
                `  
                <p class="color-white">`+name+`</p>
                <img src="`+img+`" alt="Изображение">  
                <p class="color-orange">`+price+` р.</p>
                <div class="parameters-element color-white"> <p>Длина изделия</p> <p>`+lenght+` мм</p> </div>
                <div class="parameters-element color-white"> <p>Ширина по потолку</p> <p>`+wight+` мм</p> </div>
                <div class="parameters-element color-white"> <p>Высота по стене</p> <p>`+heigth+` мм</p> </div>
                `;
    document.getElementById('grid').appendChild(elem);
}

CreateNewElement("K.01.01", "main/images/models-K/K 1.1 25.30.png", "680", "1000", "25", "30");
CreateNewElement("K.01.02", "main/images/models-K/K 1.2 30.30.png", "740", "1000", "30", "30");
CreateNewElement("K.01.03", "main/images/models-K/K 1.3 30.30.png", "672", "1000", "30", "30");
CreateNewElement("K.01.04", "main/images/models-K/K 1.4 20.32.png", "636", "1000", "20", "32");
CreateNewElement("K.01.05", "main/images/models-K/K 1.5 35.40.png", "940", "1000", "35", "40");
CreateNewElement("K.01.06", "main/images/models-K/K 1.6 36.40.png", "848", "1000", "36", "40");
CreateNewElement("K.01.07", "main/images/models-K/K 1.7 20.20.png", "540", "1000", "20", "20");
CreateNewElement("K.01.08", "main/images/models-K/K 1.8 25.25.png", "614", "1000", "25", "25");
CreateNewElement("K.01.09", "main/images/models-K/K 1.9 30.30.png", "740", "1000", "30", "30");
