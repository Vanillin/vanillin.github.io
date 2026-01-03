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

CreateNewElement("MD.05.01", "main/images/models-D/MD 5.1 80.120 v2.png", 2970, 1000, 80, 120);
CreateNewElement("MD.06.01", "main/images/models-D/MD 6.1 70.125 v2.png", 3130, 1000, 70, 125);
CreateNewElement("MD.06.04", "main/images/models-D/MD 6.4 90.125.png", 3590, 1000, 90, 125);
CreateNewElement("MD.06.02      (K.06.03)", "main/images/models-D/MD 6.2 62.128.760 v2.png", 2820, 760, 62, 128);
CreateNewElement("MD.06.03", "main/images/models-D/MD 6.3 60.130.420 v2.png", 3780, 420, 30, 130);