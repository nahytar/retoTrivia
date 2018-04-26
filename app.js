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
alert("Bienvenid@ a la Trivia de Laboratoria");

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
        alert("Correcto");

        //si la respuestaes correcta se acumula en la variable correct para presentar al final
        correct = correct + "<li>" + questions[0] + "</li>";
    } else {
        alert("Incorrecto");
        //si la respuestaes incorrecta se acumula en la variable wrong para presentar al final
        wrong = wrong + "<li>" + questions[0] + "</li>";
    };

    var questionTwo = prompt(questions[1]);
    if (answers.indexOf(questionTwo) > 0) {
        alert("Correcto");
        correct = correct + "<li>" + questions[1] + "</li>";
    } else {
        alert("Incorrecto");
        wrong = wrong + "<li>" + questions[1] + "</li>";
    };

    var questionThree = prompt(questions[2]);
    if (answers.indexOf(questionThree) > 0) {
        alert("Correcto");
        correct = correct + "<li>" + questions[2] + "</li>";
    } else {
        alert("Incorrecto");
        wrong = wrong + "<li>" + questions[2] + "</li>";
    };

    var questionFour = prompt(questions[3]);
    if (answers.indexOf(questionFour) === 0) {
        alert("Correcto");
        correct = correct + "<li>" + questions[3] + "</li>";
    } else {
        alert("Incorrecto");
        wrong = wrong + "<li>" + questions[3] + "</li>";
    };

    var questionFive = prompt(questions[4]);
    if (answers.indexOf(questionFive) > 0) {
        alert("Correcto");
        correct = correct + "<li>" + questions[4] + "</li>";
    } else {
        alert("Incorrecto");
        wrong = wrong + "<li>" + questions[4] + "</li>";
    };

    //para obtener la refencia del elemento HTML que queremos modificar
    var correctDiv = document.getElementById("correct");
    var wrongDiv = document.getElementById("wrong");

    //para inyectar contenido HTML en los elementos(correct y wrong) obtenidos en el paso anterior
    correctDiv.innerHTML = correct;
    wrongDiv.innerHTML = wrong;

    // termina el gran IF
} else {
    alert("Hasta la proxima!");
};