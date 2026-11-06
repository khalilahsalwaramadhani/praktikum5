let nama, nim, submit, output, dataMhs; // Menambahkan deklarasi dataMhs

document.getElementById("submit").onclick = function() {
    nama = document.getElementById("nama").value;
    nim = document.getElementById("nim").value;
    dataMhs = nama + " " + nim;    
    console.log(dataMhs);

    document.getElementById("output").textContent = dataMhs; 
};