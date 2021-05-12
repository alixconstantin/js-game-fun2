let questions = [
    "How much zodiac have sign ?",
    "What is the result of 6x12 ?",
    "What is the year of the capture of the Bastille (French Revolution) ?",
    "how many legs does a chicken have ?",
    "how much millions is the french population ?",
    "what is the year of press freedom in France? ",
    "in which year in France women obtain the right to vote ?",
    "What is the result of 2x4 ? ",
    "What is the result of 234*289.769 ?",
    "How much foot have humans ?"
];

let responses = [
    12,
    72,
    1789,
    2,
    67,
    1881,
    1944,
    8,
    67805.946,
    2
];



function getQuestion(questionId) // fonction pour récup la question
{

    return questions[questionId]; // recupère la question[x]

}


function askQuestion(questionId) // fonction pour récupérer la question et récupérer la réponse
{

    let question = getQuestion(questionId); // récupère la question[x]
    let userAnswer = window.prompt(question); // récupère la réponse [x] de la question [x] dans une variable

    return userAnswer;                        //  retourne la variable de la réponse[x] de la question [x]
}


function verifyAnswer(questionId, userAnswer) // fonction pour vérifier si la réponse [x] est juste
{

    let correctAnswer = responses[questionId]; // récupère la bonne réponse[x] correspondant a la question[x] pour comparer

    if (userAnswer == correctAnswer) // si reponse[x] du prompt correspond a la reponse[x] a la reponse[x] du tableau
    {
        return true;  // retourne true
    }
    else
    {
        return false; // sinon retourne false
    }
}


function addToDom(questionId, isCorrect)  // fonction pour ajouter au Dom la réponse, dans la div correspondante a true ou false
{
    let question = getQuestion(questionId); // stock dans une variable la question[x]

    if (isCorrect) // si la question[x] correspond a la reponse [x]
    {
        let greenList = document.querySelector("#right .responses"); // selectionne l'element du DOM right>responses
        greenList.innerHTML += "<li>" + question + "</li>"; // ajoute du HTML a l'endroit selectionné
    }

    else
    {

        let redList = document.querySelector("#wrong .responses"); // sinon selectionne un autre element du DOM
        redList.innerHTML += "<li>" + question + "</li>"; // ajoute du HTML a l'endroit selectionné

    }

}


for (let questionId in questions) // boucle For In pour executer la totalité des questions
{                                   // pour chaques question[x] dans le tableau questions[x,x,x,etc]

    let userAnswer = askQuestion(questionId); // récupère la réponses de l'utilisateur 
    let isCorrect = verifyAnswer(questionId, userAnswer); // récupère le boléen de la réponses de l'utilisateur
    addToDom(questionId, isCorrect); // rajoute la réponse de l'utilisateur au DOM a l'endroit specifique dédiés a son booleens

}
