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



function getQuestion(questionId)
{

    return questions[questionId];

}


function askQuestion(questionId)
{

    let question = getQuestion(questionId);
    let answer = window.prompt(question);

    return answer;
}


function verifyAnswer(questionId, userAnswer)
{

    let correctAnswer = responses[questionId];

    if (userAnswer == correctAnswer)
    {
        return true;
    }
    else
    {
        return false;
    }
}


function addToDom(questionId, isCorrect)
{
    let question = getQuestion(questionId);

    if (isCorrect)
    {
        let greenList = document.querySelector("#right .responses");
        greenList.innerHTML += "<li>" + question + "</li>";
    }

    else
    {

        let redList = document.querySelector("#wrong .responses");
        redList.innerHTML += "<li>" + question + "</li>";

    }

}


for (let questionId in questions)
{

    let userAnswer = askQuestion(questionId);
    let isCorrect = verifyAnswer(questionId, userAnswer);
    addToDom(questionId, isCorrect);

}
