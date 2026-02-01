
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

// CreateNewElement("K.01.01", "main/images/models-K/K 1.1 25.30.png", "655", 1000, 25, 30); //сложный
//CreateNewElement("K.01.07", "main/images/models-K/K 1.7 20.20.png", 595 -200 , 1000, 20, 20); //убрать
CreateNewElement("K.01.08", "main/images/models-K/K 1.8 25.25.png", 608 -200 , 1000, 25, 25);
CreateNewElement("K.01.02", "main/images/models-K/K 1.2 30.30.png", 630 -200 , 1000, 30, 30);
//CreateNewElement("K.01.03", "main/images/models-K/K 1.3 30.30.png", 593 -200 , 1000, 30, 30); //убрать
CreateNewElement("K.01.09", "main/images/models-K/K 1.9 30.30.png", 645 -200 , 1000, 30, 30);
//CreateNewElement("K.01.04", "main/images/models-K/K 1.4 20.32.png", 644 -200 , 1000, 20, 32); //убрать
CreateNewElement("K.01.05", "main/images/models-K/K 1.5 35.40.png", 696 -200 , 1000, 35, 40);
CreateNewElement("K.01.06", "main/images/models-K/K 1.6 36.40.png", 654 -200 , 1000, 36, 40);

CreateNewElement("K.02.12", "main/images/models-K/K 2.12 40.41.png", 720 -150 , 1000, 40, 41);
//CreateNewElement("K.02.08", "main/images/models-K/K 2.8 43.43.png", 781 -150 , 1000, 43, 43); //убрать
CreateNewElement("K.02.13", "main/images/models-K/K 2.13 28.45.png", 707 -150 , 1000, 28, 45);
CreateNewElement("K.02.14", "main/images/models-K/K 2.14 30.45.png", 736 -150 , 1000, 30, 45);
CreateNewElement("K.02.11", "main/images/models-K/K 2.11 37.45.png", 784 -150 , 1000, 37, 45);
CreateNewElement("K.02.01", "main/images/models-K/K 2.1 45.45.png", 789 -150 , 1000, 45, 45);
CreateNewElement("K.02.07", "main/images/models-K/K 2.7 46.49.png", 817 -150 , 1000, 46, 49);
//CreateNewElement("K.02.10", "main/images/models-K/K 2.10 40.50.png", 786 -150 + 500, 1000, 40, 50);
CreateNewElement("K.02.02", "main/images/models-K/K 2.2 50.50.png", 812 -150 , 1000, 50, 50);
CreateNewElement("K.02.15", "main/images/models-K/K 2.15 51.30.png", 742 , 1000, 51, 30);
CreateNewElement("K.02.03", "main/images/models-K/K 2.3 55.56.png", 788 -150 , 1000, 55, 56);
//CreateNewElement("K.02.09", "main/images/models-K/K 2.9 53.58.png", 909 -150 , 1000, 53, 58); //убрать
CreateNewElement("K.02.04", "main/images/models-K/K 2.4 60.60.png", 917 -150 , 1000, 60, 60);

// CreateNewElement("K.03.01", "main/images/models-K/K 3.1 60.60.png", "740", 1000, 60, 60); //копия
CreateNewElement("K.03.08", "main/images/models-K/K 2.5 63.60.png", 941 -100 , 1000, 63, 60); //2.5
CreateNewElement("K.03.09", "main/images/models-K/K 2.6 70.52.png", 840 -100 , 1000, 70, 52); //2.6
CreateNewElement("K.03.06", "main/images/models-K/K 3.6 70.70.png", 1053 -100 , 1000, 70, 70);
CreateNewElement("K.03.05", "main/images/models-K/K 3.5 75.72.png", 1572 , 1000, 75, 72);
CreateNewElement("K.03.02", "main/images/models-K/K 3.2 80.80.png", 1523 , 1000, 80, 80);
//CreateNewElement("K.03.07", "main/images/models-K/K 3.7 80.80.png", 1255 -100 , 1000, 80, 80); //убрать

//CreateNewElement("K.04.05", "main/images/models-K/K 4.5 81.83.png", 1034, 1000, 81, 83); //убрать
CreateNewElement("K.04.09", "main/images/models-K/K 3.3 85.80.png", 1580, 1000, 85, 80); //3.3
//CreateNewElement("K.04.04", "main/images/models-K/K 4.4 85.84.png", 1309, 1000, 85, 84); //убрать
CreateNewElement("K.04.01", "main/images/models-K/K 4.1 85.85.png", 1642, 1000, 85, 85);
CreateNewElement("K.04.11", "main/images/models-K/K 4.11 90.20.png", 1285-500, 1000, 90, 20);
CreateNewElement("K.04.06", "main/images/models-K/K 4.6 98.98.png", 1673, 1000, 98, 98);
CreateNewElement("K.04.08", "main/images/models-K/K 4.8 50.100.png", 2490, 1000, 50, 100);
CreateNewElement("K.04.02", "main/images/models-K/K 4.2 72.100.png", 2545, 1000, 72, 100);
CreateNewElement("K.04.10", "main/images/models-K/K 4.10 95.100.png", 2571, 1000, 95, 100);
CreateNewElement("K.04.03", "main/images/models-K/K 4.3 100.100.png", 2502, 1000, 100, 100);

CreateNewElement("K.05.06", "main/images/models-K/K 4.7 72.104.png", 2735, 1000, 72, 104); //4.7
CreateNewElement("K.05.07", "main/images/models-K/K 3.4 105.80.png", 2774, 1000, 105, 80); //3.4
//CreateNewElement("K.05.05", "main/images/models-K/K 5.5 100.113.png", 1789, 1000, 100, 113); //убрать
//CreateNewElement("K.05.01", "main/images/models-K/K 5.1 100.115.png", 1809, 1000, 100, 115); //убрать
CreateNewElement("K.05.08", "main/images/models-K/K 4.9 80.118.png", 2693, 1000, 80, 118); //4.9
CreateNewElement("K.05.04", "main/images/models-K/K 5.4 75.120.png", 2740, 1000, 75, 120);
CreateNewElement("K.05.02", "main/images/models-K/K 5.2 80.120.png", 3015, 1000, 80, 120);
CreateNewElement("K.05.09", "main/images/models-K/K 2.10 40.50.png", 2486, 1000, 100, 120);
CreateNewElement("K.05.03", "main/images/models-K/K 5.3 115.120.png", 2815, 1000, 115, 120);
CreateNewElement("K.05.10", "main/images/models-K/K 5.10 120.20.png", 761+200, 1000, 120, 20);

CreateNewElement("K.06.03", "main/images/models-K/K 6.3 62.128.png", 2461, 1000, 62, 128);
CreateNewElement("K.06.02", "main/images/models-K/K 6.2 130.128.png", 2843, 1000, 130, 128);
CreateNewElement("K.06.07", "main/images/models-K/K 6.7 150.39.png", 1442+100, 1000, 150, 39);
CreateNewElement("K.06.06", "main/images/models-K/K 6.6 150.48.png", 1795, 1000, 150, 48);
CreateNewElement("K.06.04", "main/images/models-K/K 6.4 150.70.png", 1862, 1000, 150, 70);
CreateNewElement("K.06.05", "main/images/models-K/K 6.5 150.70.png", 1816, 1000, 150, 70);
CreateNewElement("K.06.01", "main/images/models-K/K 6.1 198.130.png", 3509, 1000, 198, 130);
