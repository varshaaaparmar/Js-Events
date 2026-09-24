// var btn = document.querySelector('button');
// btn.addEventListener('click', function(){
//     console.log('Button clicked');
//     btn.innerHTML = 'Logged in!';
//     alert('You clicked the button');
// });








// counter example
// let countdown;
// let count = 60;
// function startCountdown() {
//     document.querySelector('.demo').innerHTML = count;
//     countdown = setInterval(function() {
//         count--;
//         document.querySelector('.demo').innerHTML = count;
//         if (count === 0) {
//             clearInterval(countdown);
//             document.querySelector('.demo').innerHTML = 'Time\'s up!';
//         }
//     }, 1000);
// }
// function stopCountdown() {
//     clearInterval(countdown);
//     document.querySelector('.demo').innerHTML = count;
// }


// dom manipulation
// let a = document.querySelector("h1").innerHTML="heloooo cutieeepieeee";
// let b = document.createElement("h2");
// b.textContent = "hiee my cute little red flags";
// document.body.appendChild(b);
// b.style.color = "crimson";
// let ul = document.createElement("ul");
// let li1 = document.createElement("li");
// li1.textContent = "number 1";
// ul.appendChild(li1);
// document.body.appendChild(ul);
// let li2 = document.createElement("li");
// li2.textContent = "number 2";
// ul.appendChild(li2);
// document.body.appendChild(ul);
// let li3 = document.createElement("li");
// li3.textContent = "number 3";
// ul.appendChild(li3);
// document.body.appendChild(ul);
// let li4 = document.createElement("li");
// li4.textContent = "number 4";
// ul.appendChild(li4);
// document.body.appendChild(ul);
// li2.classList.add("special");
// li4.classList.add("special");


// let fileinput = document.getElementById('fileinp');
// let upload = document.getElementById('upload');
// upload.addEventListener('click', function() {
//     fileinput.click();
// });

// window.addEventListener("keydown", function(e) {
//     document.querySelector('#abc').textContent = e.key;
// });


let cars = document.getElementById("cars");
let abc = document.getElementById("abc");
let unique = document.getElementById("unique");
cars.addEventListener("change", function(e) {
    let selectedCar = e.target.value;
    abc.textContent = `You have selected ${e.target.value} as your Fav car`;
});

    





