var panjangInput = document.querySelector(".panjang-input-field");
var lebarInput = document.querySelector(".lebar-input-field");
var calculateButton = document.querySelector(".calculate");
var luas, panjang, lebar;

function myFunction(){
    panjang = panjangInput.value;
    lebar = lebarInput.value;
    luas = panjang*lebar;
    alert("Luas Persegi Panjang adalah : " + luas);
}