// setTimeout ile:
// belirli bir sure sonra istedigimiz fonksiyonu calistiracak bir islem yaptirabiliyoruz
setTimeout(() => {
 console.log("Sener Alkan")   
}, 2000) // 2000 milisaniye sonra Sener Alkan yaz.

// Verilen zaman periyodunda fonskiyonu calistiriyor
// setInterval(() => {
//     console.log("Her saniye calisacagim")
// }, 1000);
// durdurulmadigi surece sonsuza kadar gidiyor

// Callback funtions

const sayHi = (cb) => {
    cb();
};

sayHi (() =>{
    console.log("Say Hi")
});

import fetch from "node-fetch";
import axios from "axios";

// Async olan yani ne zaman hangi verinin gelecegini bilmedigimiz durumlarda
// ic ice fetch yapisi kurarak callback yaparak sirali olarak istenilen veriler elde ediliyor
 
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("Users verisi yuklendi", users);
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data) => data.json())
//             .then((post) => {
//                 console.log("Post verisi yuklendi", post)
//                     fetch("https://jsonplaceholder.typicode.com/posts/2")
//                         .then((data) => data.json())
//                         .then((post2) => console.log("Post 2 verisi yuklendi", post2))
//     });
//     });

// Async ve Await 
// Await kullandigimizda mutlaka async olarak fonsiyonumuz tanimlamamiz gerekir

async function getData(){
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);
    }

getData();

// Axioos kutuphanesi fetch gibi fakat json parse islemine gerek kalmiyor
// Anonim fonksiyon tanilayarak da yapabiliriz
// () => ()
(async () => {

// axios icerisinde verileri obje olarak tutyor ve 
// data key ile verileri donduruyor
//bu data key ismini degistirerek log larimizi saglikli bir sekilde alabiliriz

    const {data: user1} = await axios("https://jsonplaceholder.typicode.com/users/1");
    const {data:post3} = await axios("https://jsonplaceholder.typicode.com/posts/3");
    const {data:post4} = await axios("https://jsonplaceholder.typicode.com/posts/4");

    console.log("users", user1);
    console.log("post3", post3);
    console.log("post4", post4);
});


// Promise yapisi nedir ne degildir ?

const getComments = (number) => {
    return new Promise((resolve, reject) => {
        if (number===1); {
            resolve('Comments'); // obje veya sayida gonderebiliyoruz
        }

        reject('Bir problem olustu')
        });
};

// then ile data cozuluyor ve resolve ile Comments ciktisini aliyoruz
// eger reject edilseydi b durumda catch ile olusturdugumuz error function calisacakti
getComments(1).then((data) => console.log(data)).catch((e) => console.log(e));

//axios ile de deniyelim

const getUsers = (number) => {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users/1");
        
        resolve(data)

        });
};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/1" + post_id);
        
        resolve(data)

        });
};

// Bu sekilde ciktilari sirali bir sekilde aliyoruz
// try catch yapisi altna alarak hata yakanlama durumda kontrolu sagliyoruz
(async () => {
    try{
        const user_1 = await getUsers();
        const post_1 = await getPost(1);

        console.log(user_1);
        console.log(post_1);

    } catch (e){
        console.log(e)

    }
 
});


// Birden fazla promise blogu var ise bu sekilde de gerceklestirilebilir.


Promise.all([getUsers(), getPost(1)])
    .then(console.log)
    .catch(console.log);