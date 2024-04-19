$(document).ready(function(){
    var warna = ['red', 'yellow', 'blue', 'green', 'orange']; // Daftar warna 
    $("#ubahWarna").click(function(){
        var randomIndex = Math.floor(Math.random() * warna.length); // Pilih warna secara acak
        var warnaPilihan = warna[randomIndex];
        $("#teks").css("color", warnaPilihan);
    });
});
