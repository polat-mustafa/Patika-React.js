import axios from "axios"   // Yüklediğimiz npm axios paketini proje dosyamıza import ettik
export default getData      // index.js de tanımladığımız getData fonksiyonunu burda kullanmak için export ediyoruz

/*

Async/await yapılarını kullanarak axios ile veri çektik ve bunların datalarını loglamak için users ve posts olarak tanımladık.
Async fonksiyonu sıralı çalışma mantığıyla okur, users e tanımlanan await ile veri alınır, işlem bitince diğer await e geçer.
getDataya Number adında parametre ekledik, Bu parametre bizim vereceğimiz id adına denk gelecek ve istediğimiz id ye sahip veriyi alabileceğiz.

*/

async function getData(Number) {

    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users/" + Number)

    const {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts?id=" + Number)

    return {users, posts}
}

getData(1) // id si 1 olan veriyi alıyoruz.
