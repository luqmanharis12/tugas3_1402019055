var nama = prompt("Masukan Nama Anda");
var c = new Date();
var time = c.getHours();
var greet = ''

if (time > 24 && time < 11) {
    greet = "Halo, Selamat Pagi";
} else if (time >= 11 && time <= 14) {
    greet = "Halo, Selamat Siang";
} else if (time >= 15 && time <= 18) {
    greet = "Halo, Selamat Sore";
} else {
    greet = "Halo, Selamat Malam";
}
document.getElementById('nama').innerHTML = `${greet} ${nama}`;

function silinder() {
    var jari = document.getElementById('jari-silinder').value;
    var tinggi = document.getElementById('tinggi-silinder').value;
    var luas = 2 * Math.PI * jari * jari + 2 * Math.PI * jari * tinggi;
    var volume = Math.PI * jari * jari * tinggi;
    document.getElementById('volume-silinder').value = `${Math.floor(volume)} M³`;
    document.getElementById('luas-silinder').value = `${Math.floor(luas)} M³`;
}

function kerucut() {
    var jari = document.getElementById('jari-kerucut').value;
    var tinggi = document.getElementById('tinggi-kerucut').value;
    var garis = document.getElementById('garis-kerucut').value;
    var luas = Math.PI * jari * jari + Math.PI * jari * garis;
    var volume = 1 / 3 * Math.PI * jari * jari * tinggi;
    document.getElementById('volume-kerucut').value = `${Math.floor(volume)} M³`;
    document.getElementById('luas-kerucut').value = `${Math.floor(luas)} M³`;
}

function bola() {
    var jari = document.getElementById('jari-bola').value;
    var luas = 4 * Math.PI * jari * jari;
    var volume = 4 / 3 * Math.PI * jari * jari * jari;
    document.getElementById('volume-bola').value = `${Math.floor(volume)} M³`;
    document.getElementById('luas-bola').value = `${Math.floor(luas)} M³`;
}