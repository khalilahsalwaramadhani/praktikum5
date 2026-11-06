// operasi string

let dataMhs = "doni";

// charAt() => mengambil karakter pada index tertentu
console.log (`karakter pada index ke-0: ${dataMhs.charAt(0)}`);
console.log (`karakter pada index ke-1: ${dataMhs.charAt(1)}`);
console.log (`karakter pada index ke-2: ${dataMhs.charAt(2)}`);
console.log (`karakter pada index ke-3: ${dataMhs.charAt(3)}`);

//concat => menggabungkan nilai string 
let dataMhs2 = "dodi";
let mahasiswa = dataMhs.concat(" ", dataMhs2);
console.log("data mahasiswa: " + mahasiswa);

//substring => mengambil sebagian karakter string
console.log(`substring index ke-0 sampai index ke-3: ${mahasiswa.substring(0, 3)}`);
console.log(`substring index ke-3 sampai index ke-0: ${mahasiswa.substring(3, 0)}`);

//slice => mengambil sebagian karakter string
console.log(`slice index ke-0 sampai index ke-3: ${mahasiswa.slice(0, 3)}`);
console.log(`slice index ke-3 sampai index ke-0: ${mahasiswa.slice(3, 0)}`);

//indexOf() => mencari index dari karakter tertentu
console.log(`index dari karakter "d": ${mahasiswa.indexOf("d")}`);
console.log(`index dari karakter "o": ${mahasiswa.indexOf("o")}`);
console.log(`index dari karakter "n": ${mahasiswa.indexOf("n")}`);
console.log(`index dari karakter "i": ${mahasiswa.indexOf("i")}`);

// replace => mengganti karakter tertentu dengan karakter lain
console.log(`data mahasiswa sebelum replace: ${mahasiswa}`);
let mahasiswa2 = mahasiswa.replace("dodi", "doni");
console.log(`data mahasiswa setelah replace: ${mahasiswa2}`);

//toUpperCase() => mengubah karakter menjadi huruf besar
console.log (`data mahasiswa sebelum toUpperCase: ${mahasiswa}`);
let mahasiswa3 = mahasiswa.toUpperCase();
console.log (`data mahasiswa setelah toUpperCase: ${mahasiswa3}`);

//toLowerCase() => mengubah karakter menjadi huruf kecil
console.log (`data mahasiswa sebelum toLowerCase: ${mahasiswa}`);
let mahasiswa4 = mahasiswa.toLowerCase();
console.log (`data mahasiswa setelah toLowerCase: ${mahasiswa4}`);