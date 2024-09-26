
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

CreateNewElement("M.01.01", "main/images/models-M/M 1.1 20.9.png", "332", "1000", "10", "25");
CreateNewElement("M.01.02", "main/images/models-M/M 1.2 24.12.png", "320", "1000", "10", "25");
CreateNewElement("M.01.03", "main/images/models-M/M 1.3 30.13.png", "449", "1000", "12", "38");
CreateNewElement("M.01.04", "main/images/models-M/M 1.4 25.10.png", "541", "1000", "15", "45");
CreateNewElement("M.01.05", "main/images/models-M/M 1.5 30.10.png", "477", "1000", "12", "46");
CreateNewElement("M.01.06", "main/images/models-M/M 1.6 25.12.png", "819", "1000", "22", "55");
CreateNewElement("M.01.07", "main/images/models-M/M 1.7 25.8.png", "1425", "1000", "25", "95");
CreateNewElement("M.01.08", "main/images/models-M/M 1.8 25.10.png", "1425", "1000", "25", "95");
CreateNewElement("M.01.09", "main/images/models-M/M 1.9 38.12.png", "1365", "1000", "25", "95");
CreateNewElement("M.01.10", "main/images/models-M/M 1.10 35.12.png", "1425", "1000", "25", "95");