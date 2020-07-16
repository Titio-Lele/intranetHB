

function myFunction() {
    const dots = document.getElementById('dots');
    const moreText = document.getElementById('more');
    const btnText = document.getElementById('myBtn');

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Veja mais";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Ver menos";
        moreText.style.display = "inline";
    }
};

var multiplyES6 = (x, y) => x * y;
var fraseCorte = frase => frase.split(" ");

const smartPhones =  [
    { name:'iPhone', price:649 },
    { name:'Galaxy S6', price:576 },
    { name:'Galaxy Note 5', price:489 }
];

// var prices = smartPhones.map(function(smartPhone) {
//     return smartPhone.price;
// });

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// var divisivelPorTres = array.filter( function(v,n) {
//     console.log(n);
//     return v % 3 === 0;
// });

const divisivelPorTres = array.filter(v => v % 3 === 0);
console.log(divisivelPorTres);

const prices = smartPhones.map(smartPhone => smartPhone.price);
console.log(prices);

// console.log(multiplyES6(3, 3));
// console.log(fraseCorte("ES6 incrível!"));

const ul = document.getElementById('usuarios');
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
.then((resp) => resp.json())
.then(function (data) {
    console.log(data);

    return data.map(function (user) {
        let li = document.createElement('li');
        li.innerHTML = `<b>Nome</b> ${user.name} (${user.username})`;
        ul.appendChild(li)
    });
})
.catch((error) => {
    console.log('Opa!' + error)
});

// const postagem = document.getElementById('posts');
// const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

// fetch(urlPosts)
//     .then((resp) => resp.json())
//     .then(function(data) {
//         console.log(data);

//         return data.map(function (postagens){
//             let p = document.createElement('p');
//             p.innerHTML = `</br><b>Título</b> ${postagens.title} </br>${postagens.body}`;
//             postagem.appendChild(p);
//         });
//     })
//     .catch((error) => {
//         console.log('Opa! - ' + error);
//     });