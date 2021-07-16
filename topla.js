const topla = function(a, b){
    return a+b;
}

// const topla = (a,b) => (a+b); ES6 ile sadelestirebiliriz 
// Disaridan bu module ulasabilmek icin
//export default topla

const hello = () => {
    console.log("Hello")
};

const user = {
    name: "Sener",
    surname: "Alkan"
};

export {hello, topla, user};