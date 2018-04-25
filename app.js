document.getElementsByTagName("h1")[0].style.fontSize = "15px";
//crear mensaje inicio trivia
alert("Bienvenido a la terrible trivia");
//preguntar Nombre
var name = prompt("¿Cuál es tu nombre?");
//saludar a usuario
alert("Hola " + name);
//invitar a jugar al usuario
var play = prompt("¿Vamos a Jugar?");
var answers = [
    "si",
    "no",
];

if (answers.indexOf(play) === 0) {
    alert("Empecemos, responde si o no");


    //empezamos la trivia
    var answersTwo = [
        "si",
        "no",
    ];


    var questionOne = prompt("¿Laboratoria se inició en el año 2014?");
    if (answersTwo.indexOf(questionOne) === 0) {
        alert("La raja");
    } else {
        alert("cueck")
    };


    var questionTwo = prompt("¿Debes saber de programación para entrar a Laboratoria?");
    if (answersTwo.indexOf(questionTwo) > 0) {
        alert("La raja");
    } else {
        alert("cueck")
    };

    var questionThree = prompt("¿En Laboratoria se puede estudiar online?");
    if (answersTwo.indexOf(questionThree) > 0) {
        alert("La raja");
    } else {
        alert("cueck")
    };

    var questionFour = prompt("¿Para ingresar a Laboratoria debes tener más de 18 años?");
    if (answersTwo.indexOf(questionFour) === 0) {
        alert("La raja");
    } else {
        alert("cueck")
    };

    var questionFive = prompt("¿Han egresado hombres de Laboratoria?");
    if (answersTwo.indexOf(questionFive) > 0) {
        alert("La raja");
    } else {
        alert("cueck")
    };
} else {
    
    alert("Pucha pa la otra")
};
//cortar programa si no???

//mostrar resultados