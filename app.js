document.getElementsByTagName("h1")[0].style.fontSize = "15px";
//crear mensaje inicio trivia
alert("Bienvenido a la terrible trivia");
//preguntar Nombre
var name = prompt("¿Cuál es tu nombre?");
var userNameDiv = document.getElementById("userName");
userNameDiv.innerHTML = name;
//saludar a usuario
alert("Hola " + name);
//invitar a jugar al usuario
var play = prompt("¿Vamos a Jugar?");
var answers = [
    "si",
    "no",
];
var questions = [
    "¿Laboratoria se inició en el año 2014?",
    "¿Debes saber de programación para entrar a Laboratoria?",
    "¿En Laboratoria se puede estudiar online?",
    "¿Para ingresar a Laboratoria debes tener más de 18 años?",
    "¿Han egresado hombres de Laboratoria?",
];
var correct = "";
var wrong = "";

if (answers.indexOf(play) === 0) {
    alert("Empecemos, responde si o no");

    //empezamos la trivia
    var answersTwo = [
        "si",
        "no",
    ];

    var questionOne = prompt(questions[0]);
    if (answersTwo.indexOf(questionOne) === 0) {
        alert("La raja");
        correct = correct + questions[0];
    } else {
        alert("cueck");
        wrong = wrong + questions[0];
    };

    var questionTwo = prompt(questions[1]);
    if (answersTwo.indexOf(questionTwo) > 0) {
        alert("La raja");
        correct = correct + questions[1];
    } else {
        alert("cueck");
        wrong = wrong + questions[1];
    };

    var questionThree = prompt(questions[2]);
    if (answersTwo.indexOf(questionThree) > 0) {
        alert("La raja");
        correct = correct + questions[2];
    } else {
        alert("cueck");
        wrong = wrong + questions[2];
    };

    var questionFour = prompt(questions[3]);
    if (answersTwo.indexOf(questionFour) === 0) {
        alert("La raja");
        correct = correct + questions[3];
    } else {
        alert("cueck");
        wrong = wrong + questions[3];
    };

    var questionFive = prompt(questions[4]);
    if (answersTwo.indexOf(questionFive) > 0) {
        alert("La raja");
        correct = correct + questions[4];
    } else {
        alert("cueck");
        wrong = wrong + questions[4];
    };

    var correctDiv = document.getElementById("correct");
    correctDiv.innerHTML = correct;
    var wrongDiv = document.getElementById("wrong");
    wrongDiv.innerHTML = wrong;
} else {
    alert("Pucha pa la otra");
};
//cortar programa si no???

//mostrar resultados