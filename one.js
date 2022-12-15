function requestName(){
    do{
        uname = prompt("Как вас зовут?");
        if(!uname) return;
    }
    while(!confirm(`Вы ввели: ${uname}, верно?`))
    return uname
}
username = requestName();
if (username) {
    document.querySelector("#name").textContent = ", " + username;
}


// function hello(n){
//     alert(`Привет, ${n}`);
// }

// hello(username);

// request = confirm("Вы уверены?");
// if (request) {
//     alert("Мы рады, что Вы уверены!");
// } else {
//     alert("Жаль, что Вы не уверены…");
// }


// alert(confirm("Really?") ? "Good" : "Oh");

// a = prompt("Введите одно число");
// b = prompt("Введите второе число");

// age = parseInt(prompt("Ваш возраст"));

// switch (age) {
//     case 18:
//         alert("Забирай меня скорей, восемнадцать мне уже")
//         break;
//     case 10:
//         alert("Вам надо учить уроки!")
//         break;
//     case 30:
//         alert("Спать! Утром на работу!")
//         break;

//     default:
//         alert("Не понятно что делать")
//         break;
// }