
function CreateNewElement(name, img, price, lenght, wight, heigth){
    var elem = document.createElement("div");
    elem.innerHTML = 
                `
                <div class="element-grid backcolor-darkgray">  
                    <p class="color-white">`+name+`</p>
                    <img src="`+img+`" alt="Изображение">  
                    <p class="color-orange">`+price+` р.</p>
                    <div class="parameters-element color-white"> <p>Длина изделия</p> <p>`+lenght+` мм</p> </div>
                    <div class="parameters-element color-white"> <p>Ширина по потолку</p> <p>`+wight+` мм</p> </div>
                    <div class="parameters-element color-white"> <p>Высота по стене</p> <p>`+heigth+` мм</p> </div>
                </div>
                `;
    document.getElementById('grid').appendChild(elem);
}

CreateNewElement("M.01.04", "main/images/models-M/M.01.04.png", "?", "1000", "10", "25");
CreateNewElement("M.01.08", "main/images/models-M/M.01.08.png", "?", "1000", "10", "25");
CreateNewElement("M.01.09", "main/images/models-M/M.01.09.png", "?", "1000", "12", "38");
CreateNewElement("M.02.02", "main/images/models-M/M.02.02.png", "?", "1000", "15", "45");
CreateNewElement("M.02.03", "main/images/models-M/M.02.03.png", "?", "1000", "12", "46");
CreateNewElement("M.02.06", "main/images/models-M/M.02.06.png", "?", "1000", "22", "55");
CreateNewElement("M.04.01", "main/images/models-M/M.04.01.png", "?", "1000", "25", "95");