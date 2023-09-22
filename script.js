// Fungsi untuk menghitung deret Fibonacci
function calculateFibonacci() {
    const count = parseInt(document.getElementById("fibonacciCount").value);
    let fib = [0, 1];

    for (let i = 2; i < count; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    const resultDiv = document.getElementById("fibonacciResult");
    resultDiv.innerHTML = `<p>Deret Fibonacci: ${fib.join(', ')}</p>`;
}

// Event listener untuk tombol "Hitung"
document.getElementById("calculateFibonacci").addEventListener("click", calculateFibonacci);


// Fungsi untuk menghitung volume kubus
function calculateVolumeKubus(sisi) {
    if (isNaN(sisi) || sisi <= 0) {
        return "Masukkan panjang sisi yang valid (bilangan positif).";
    } else {
        const volume = sisi * sisi * sisi;
        return `Volume kubus dengan sisi ${sisi} adalah ${volume}`;
    }
}

// Fungsi untuk menghitung volume balok
function calculateVolumeBalok(panjang, lebar, tinggi) {
    if (isNaN(panjang) || isNaN(lebar) || isNaN(tinggi) || panjang <= 0 || lebar <= 0 || tinggi <= 0) {
        return "Masukkan panjang, lebar, dan tinggi yang valid (bilangan positif).";
    } else {
        const volume = panjang * lebar * tinggi;
        return `Volume balok dengan panjang ${panjang}, lebar ${lebar}, dan tinggi ${tinggi} adalah ${volume}`;
    }
}

// Event listener untuk tombol "Hitung"
document.getElementById("calculateVolumeKubus").addEventListener("click", function() {
    const sisi = parseFloat(document.getElementById("inputVariable1").value);
    const hasilPerhitunganElement = document.getElementById("hasilPerhitungan");
    const hasilPerhitungan = calculateVolumeKubus(sisi);
    hasilPerhitunganElement.innerText = hasilPerhitungan;
});

document.getElementById("calculateVolumeBalok").addEventListener("click", function() {
    const panjang = parseFloat(document.getElementById("inputVariable2").value);
    const lebar = parseFloat(document.getElementById("inputVariable3").value);
    const tinggi = parseFloat(document.getElementById("inputVariable4").value);
    const hasilPerhitunganElement = document.getElementById("hasilPerhitungan");
    const hasilPerhitungan = calculateVolumeBalok(panjang, lebar, tinggi);
    hasilPerhitunganElement.innerText = hasilPerhitungan;
});

// Event listener untuk mengubah tampilan tabel input berdasarkan pilihan pengguna
document.getElementById("shapeSelect").addEventListener("change", function() {
    const selectedShape = document.getElementById("shapeSelect").value;
    const kubusInput = document.getElementById("kubusInput");
    const balokInput = document.getElementById("balokInput");

    if (selectedShape === "kubus") {
        kubusInput.style.display = "table";
        balokInput.style.display = "none";
    } else if (selectedShape === "balok") {
        kubusInput.style.display = "none";
        balokInput.style.display = "table";
    } else {
        kubusInput.style.display = "none";
        balokInput.style.display = "none";
    }
});
