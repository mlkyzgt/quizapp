var soru1={
    soru: "Dünyanın en eski şehirlerinden biri aşağıdakilerden hangisidir?",
    şık1: "Şam",
    şık2: "Viyana",
    şık3: "Babil",
    şık4: "Bağdat"
}
var soru2={
    soru: "Gülü ile meşhur olan ilimiz hangisidir?",
    şık1: "Antalya",
    şık2: "Isparta",
    şık3: "Konya",
    şık4: "Muş"
}
var soru3={
    soru: "Hangisi Avrupa ülkesi değildir?",
    şık1: "Hollanda",
    şık2: "Lübnan",
    şık3: "Fransa",
    şık4: "Almanya",
}
var dogruCevap1= soru1.şık1;
var dogruCevap2= soru2.şık2;
var dogruCevap3= soru3.şık2;
function cevapKontrol1(secilenCevap) {
    var dogruCevap1 = "Şam";
    if (secilenCevap === dogruCevap1) {
        alert("Cevabınız doğru!");
    } else {
        alert("Yanlış cevap. Doğru cevap: " + dogruCevap1);
    }
    butonuRenklendir("a1", secilenCevap, dogruCevap1);
}

function cevapKontrol2(secilenCevap) {
    var dogruCevap2 = "Isparta";
    if (secilenCevap === dogruCevap2) {
        alert("Cevabınız doğru!");
    } else {
        alert("Yanlış cevap. Doğru cevap: " + dogruCevap2);
    }
    butonuRenklendir("b2", secilenCevap, dogruCevap2);
}

function cevapKontrol3(secilenCevap) {
    var dogruCevap3 = "Lübnan";
    if (secilenCevap === dogruCevap3) {
        alert("Cevabınız doğru!");
    } else {
        alert("Yanlış cevap. Doğru cevap: " + dogruCevap3);
    }
    butonuRenklendir("b3", secilenCevap, dogruCevap3);
}

function butonuRenklendir(buttonId, secilenCevap, dogruCevap) {
    var dogruButon = document.getElementById(buttonId);
    if (secilenCevap === dogruCevap) {
        dogruButon.style.backgroundColor = "green";
    } else {
        dogruButon.style.backgroundColor = "red";
    }
}



/*
function butonuRenklendir1(){
if(secilenCevap===dogruCevap3){
    
    }
    else
        alert("Yanlış cevap");
}
function butonuRenklendir2(){
    var dogruCevap===
}
function butonuRenklendir3(){
        var dogruCevap===
}*/
