const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

// Tuval oluştur
const canvas = createCanvas(1920, 1080);
const ctx = canvas.getContext('2d');

loadImage("./src/input-image.jpg").then(image => {
    // Resmi full ekran sığdır
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    // Ortalamak istediğimiz metin
    const text = 'Selaaam!';

    // Font ayarla
    ctx.font = '42px Arial';
    const textWidth = ctx.measureText(text).width;
    const textHeight = 42; // Yükseklik, font boyutuyla aynı

    // Yazıyı yatay ve dikey olarak ortala
    const x = (canvas.width - textWidth) / 2; // Yatayda ortalama
    const y = (canvas.height + textHeight) / 2; // Dikeyde ortalama

    // Metni çiz
    ctx.fillStyle = '#000000';
    ctx.fillText(text, x, y);

    // PNG dosyasını yazmak için
    const out = fs.createWriteStream('./src/output-image.jpg');
    const stream = canvas.createPNGStream();
    stream.pipe(out);
}).catch((err) => {
    console.error(err);
});