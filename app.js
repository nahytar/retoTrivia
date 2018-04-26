//respuestas
var answers = [
    "si",
    "no",
];

//lista de preguntas
var questions = [
    "¿Laboratoria se inició en el año 2014?",
    "¿Debes saber de programación para entrar a Laboratoria?",
    "¿En Laboratoria se puede estudiar online?",
    "¿Para ingresar a Laboratoria debes tener más de 18 años?",
    "¿Han egresado hombres de Laboratoria?",
];
// se inicializa los string vacios que van a acumular las respuestas correctas e incorrectas
var correct = "";
var wrong = "";

//crear mensaje inicio trivia
alert("Bienvenido a la terrible trivia");

//preguntar Nombre
var name = prompt("¿Cuál es tu nombre?");

//para obtener la refencia del elemento HTML que queremos modificar
var userNameDiv = document.getElementById("userName");
//para inyectar contenido HTML el elemento(name) obtenido en el paso anterior
userNameDiv.innerHTML = name;

//saludar a usuario
alert("Hola " + name);

//invitar a jugar al usuario
var play = prompt("¿Vamos a Jugar?");

//comienza el gran IF
if (answers.indexOf(play) === 0) {
    alert("Empecemos, responde si o no");

    //se usan las preguntas cargadas en las listas de preguntas para consultar al usuario
    var questionOne = prompt(questions[0]);
    if (answers.indexOf(questionOne) === 0) {
        alert("La raja");

        //si la respuestaes correcta se acumula en la variable correct para presentar al final
        correct = correct + questions[0];
    } else {
        alert("cueck");
        //si la respuestaes incorrecta se acumula en la variable wrong para presentar al final
        wrong = wrong + questions[0];
    };

    var questionTwo = prompt(questions[1]);
    if (answers.indexOf(questionTwo) > 0) {
        alert("La raja");
        correct = correct + questions[1];
    } else {
        alert("cueck");
        wrong = wrong + questions[1];
    };

    var questionThree = prompt(questions[2]);
    if (answers.indexOf(questionThree) > 0) {
        alert("La raja");
        correct = correct + questions[2];
    } else {
        alert("cueck");
        wrong = wrong + questions[2];
    };

    var questionFour = prompt(questions[3]);
    if (answers.indexOf(questionFour) === 0) {
        alert("La raja");
        correct = correct + questions[3];
    } else {
        alert("cueck");
        wrong = wrong + questions[3];
    };

    var questionFive = prompt(questions[4]);
    if (answers.indexOf(questionFive) > 0) {
        alert("La raja");
        correct = correct + questions[4];
    } else {
        alert("cueck");
        wrong = wrong + questions[4];
    };

    //para obtener la refencia del elemento HTML que queremos modificar
    var correctDiv = document.getElementById("correct");
    var wrongDiv = document.getElementById("wrong");

    //para inyectar contenido HTML en los elementos(correct y wrong) obtenidos en el paso anterior
    correctDiv.innerHTML = correct;
    wrongDiv.innerHTML = wrong;

    // termina el gran IF
} else {
    alert("Pucha pa la otra");
};