//getting to the whole form
const formNewCard = document.querySelector('[data-js="formNewCard"]');
// getting  the inputs
const questionInput = document.querySelector('[data-js="question-input-js"]');
const answerInput = document.querySelector('[data-js="answer-input-js"]')
const tagInput = document.querySelector('[data-js="tag-input-js"]')
// and getting submit button 
const submitButton = document.querySelector('[data-js="forms-submit-button"]');
// getting the section where the new Questioncards go
const newCreatedQuestionsSection = document.querySelector('[data-js="newCreatedQuestionsSection"]')


formNewCard.addEventListener("submit", (event) => {
    event.preventDefault();

    // tried this-didnt work
    // const formNewCard = new FormData(event.target);
    // console.log("form results:", formNewCard);
    // const dataFromInputs = Object.fromEntries(formNewCard);
    // console.log(dataFromInputs);
    // event.target.elements.questionInput.value
    // event.target.elements.answerInput.value
    // event.target.elements.tagInput.value




    const newQuestionSubmitted = document.createElement("article");
    newQuestionSubmitted.classList.add('question-card');

    newCreatedQuestionsSection.append(newQuestionSubmitted);
    newQuestionSubmitted.appendChild(questionInput)


    //reseting value inputs:
    event.target.reset();

}) 