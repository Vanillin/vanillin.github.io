
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

CreateNewElement("K.01.01", "main/images/models-K/K 1.1 25.30.png", "655", "1000", "25", "30");
CreateNewElement("K.01.02", "main/images/models-K/K 1.2 30.30.png", "630", "1000", "30", "30");
CreateNewElement("K.01.03", "main/images/models-K/K 1.3 30.30.png", "593", "1000", "30", "30");
CreateNewElement("K.01.04", "main/images/models-K/K 1.4 20.32.png", "644", "1000", "20", "32");
CreateNewElement("K.01.05", "main/images/models-K/K 1.5 35.40.png", "696", "1000", "35", "40");
CreateNewElement("K.01.06", "main/images/models-K/K 1.6 36.40.png", "654", "1000", "36", "40");
CreateNewElement("K.01.07", "main/images/models-K/K 1.7 20.20.png", "595", "1000", "20", "20");
CreateNewElement("K.01.08", "main/images/models-K/K 1.8 25.25.png", "608", "1000", "25", "25");
CreateNewElement("K.01.09", "main/images/models-K/K 1.9 30.30.png", "645", "1000", "30", "30");

CreateNewElement("K.02.01", "main/images/models-K/K 2.1 45.45.png", "789", "1000", "45", "45");
CreateNewElement("K.02.02", "main/images/models-K/K 2.2 50.50.png", "812", "1000", "50", "50");
CreateNewElement("K.02.03", "main/images/models-K/K 2.3 55.56.png", "788", "1000", "55", "56");
CreateNewElement("K.02.04", "main/images/models-K/K 2.4 60.60.png", "917", "1000", "60", "60");
CreateNewElement("K.02.05", "main/images/models-K/K 2.5 63.60.png", "941", "1000", "63", "60");
CreateNewElement("K.02.06", "main/images/models-K/K 2.6 70.52.png", "840", "1000", "70", "52");
CreateNewElement("K.02.07", "main/images/models-K/K 2.7 46.49.png", "817", "1000", "46", "49");
CreateNewElement("K.02.08", "main/images/models-K/K 2.8 43.43.png", "781", "1000", "43", "43");
CreateNewElement("K.02.09", "main/images/models-K/K 2.9 53.58.png", "909", "1000", "53", "58");
CreateNewElement("K.02.10", "main/images/models-K/K 2.10 40.50.png", "786", "1000", "40", "50");
CreateNewElement("K.02.11", "main/images/models-K/K 2.11 37.45.png", "784", "1000", "37", "45");
CreateNewElement("K.02.12", "main/images/models-K/K 2.12 40.41.png", "720", "1000", "40", "41");
CreateNewElement("K.02.13", "main/images/models-K/K 2.13 28.45.png", "707", "1000", "28", "45");
CreateNewElement("K.02.14", "main/images/models-K/K 2.14 30.45.png", "736", "1000", "30", "45");

// CreateNewElement("K.03.01", "main/images/models-K/K 3.1 60.60.png", "740", "1000", "60", "60"); //копия
CreateNewElement("K.03.02", "main/images/models-K/K 3.2 80.80.png", "1010", "1000", "80", "80");
CreateNewElement("K.03.03", "main/images/models-K/K 3.3 85.80.png", "1100", "1000", "85", "80");
CreateNewElement("K.03.04", "main/images/models-K/K 3.4 105.80.png", "1201", "1000", "105", "80");
CreateNewElement("K.03.05", "main/images/models-K/K 3.5 75.72.png", "1124", "1000", "75", "72");
CreateNewElement("K.03.06", "main/images/models-K/K 3.6 70.70.png", "1053", "1000", "70", "70");
CreateNewElement("K.03.07", "main/images/models-K/K 3.7 80.80.png", "1255", "1000", "80", "80");

CreateNewElement("K.04.01", "main/images/models-K/K 4.1 85.85.png", "1323", "1000", "85", "85");
CreateNewElement("K.04.02", "main/images/models-K/K 4.2 72.100.png", "1110", "1000", "72", "100");
CreateNewElement("K.04.03", "main/images/models-K/K 4.3 100.100.png", "1603", "1000", "100", "100");
CreateNewElement("K.04.04", "main/images/models-K/K 4.4 85.84.png", "1309", "1000", "85", "84");
CreateNewElement("K.04.05", "main/images/models-K/K 4.5 81.83.png", "1034", "1000", "81", "83");
CreateNewElement("K.04.06", "main/images/models-K/K 4.6 98.98.png", "1573", "1000", "98", "98");
CreateNewElement("K.04.07", "main/images/models-K/K 4.7 72.104.png", "1339", "1000", "72", "104");
CreateNewElement("K.04.08", "main/images/models-K/K 4.8 50.100.png", "1124", "1000", "50", "100");
CreateNewElement("K.04.09", "main/images/models-K/K 4.9 80.118.png", "1506", "1000", "80", "118");

CreateNewElement("K.05.01", "main/images/models-K/K 5.1 100.115.png", "1809", "1000", "100", "115");
CreateNewElement("K.05.02", "main/images/models-K/K 5.2 80.120.png", "1537", "1000", "80", "120");
CreateNewElement("K.05.03", "main/images/models-K/K 5.3 115.120.png", "1981", "1000", "115", "120");
CreateNewElement("K.05.04", "main/images/models-K/K 5.4 75.120.png", "1252", "1000", "75", "120");
CreateNewElement("K.05.05", "main/images/models-K/K 5.5 100.113.png", "1789", "1000", "100", "113");

CreateNewElement("K.06.01", "main/images/models-K/K 6.1 198.130.png", "3189", "1000", "198", "130");
CreateNewElement("K.06.02", "main/images/models-K/K 6.2 130.128.png", "1821", "1000", "130", "128");
