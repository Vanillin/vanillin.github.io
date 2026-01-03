
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

CreateNewElement("M.01.01", "main/images/models-M/M 1.1 20.9.png", 215 , 1000, 9, 20);
CreateNewElement("M.01.02", "main/images/models-M/M 1.2 24.12.png", 269 , 1000, 12, 24);
CreateNewElement("M.01.07", "main/images/models-M/M 1.7 25.8.png", 270, 1000, 8, 25);
CreateNewElement("M.01.04", "main/images/models-M/M 1.4 25.10.png", 261 , 1000, 10, 25);
CreateNewElement("M.01.08", "main/images/models-M/M 1.8 25.10.png", 250, 1000, 10, 25);
//CreateNewElement("M.01.06", "main/images/models-M/M 1.6 25.12.png", 436 -200 , 1000, 12, 25); //убрать
CreateNewElement("M.01.05", "main/images/models-M/M 1.5 30.10.png", 296, 1000, 16, 31);
CreateNewElement("M.01.03", "main/images/models-M/M 1.3 30.13.png", 382 , 1000, 13, 29);
CreateNewElement("M.01.10", "main/images/models-M/M 1.10 35.12.png", 413 , 1000, 14, 35);
CreateNewElement("M.01.09", "main/images/models-M/M 1.9 38.12.png", 381, 1000, 12, 36);

CreateNewElement("M.02.01", "main/images/models-M/M 2.1 41.16.png", 512, 1000, 16, 41);
//CreateNewElement("M.02.08", "main/images/models-M/M 2.8 42.17.png", 667 -150 , 1000, 17, 42); //убрать повтор
CreateNewElement("M.02.02", "main/images/models-M/M 2.2 45.15.png", 529, 1000, 15, 45);
CreateNewElement("M.02.03", "main/images/models-M/M 2.3 46.12.png", 590 , 1000, 12, 46);
CreateNewElement("M.02.06", "main/images/models-M/M 2.6 50.22.png", 729 , 1000, 21, 50);
//CreateNewElement("M.02.04", "main/images/models-M/M 2.4 55.17.png", 756 -150 , 1000, 17, 55); убрать
//CreateNewElement("M.02.05", "main/images/models-M/M 2.5 60.25.png", 1070 -150 , 1000, 25, 60); убрать
CreateNewElement("M.02.07", "main/images/models-M/M 2.7 60.25.png", 705, 1000, 23, 59);

//CreateNewElement("M.03.02", "main/images/models-M/M 3.2 70.17.png", 883 -100 , 1000, 17, 70); убрать
CreateNewElement("M.03.01", "main/images/models-M/M 3.1 80.30.png", 793, 1000, 30, 80);

CreateNewElement("M.04.01", "main/images/models-M/M 4.1 95.25.png", 1060, 1000 -400, 25, 95);