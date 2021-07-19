import io from "socket.io-client";

let socket;


export const init = () => {
    console.log("Sunucuya baglaniliyor....")
    socket = io('http://localhost:3001', {
        transports: ["websocket"],
    });
    
    socket.on('connect', () => console.log("Sunucuya baglanti basarili..."))
};

// Backend kismina rengi iletiyoruz
export const send = (color) => {
    socket.emit('newColor', color)
};

export const subscribe = (cb) => {
    socket.on("receive", (color) => {
        console.log(color);
        cb(color);
        // color i parametre olarak App.js dosyasina gonderiyoruz

    });
};