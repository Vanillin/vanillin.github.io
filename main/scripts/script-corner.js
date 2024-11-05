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

CreateNewElement("Y.02.01", "main/images/models-D/Y 2.1 43.41.png", ".", 1000, 43, 41);
CreateNewElement("Y.03.01", "main/images/models-D/Y 3.1 70.75.png", ".", 1000, 70, 75);