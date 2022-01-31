import getData from "./app.js"  // app.js i import ettik

// Burada await yazmayınca Promise döndürüyor, yani app.js de tanımladığımız fonksiyonunla sıralı çalışıyor.

let data = await getData(1)   


console.log(data)