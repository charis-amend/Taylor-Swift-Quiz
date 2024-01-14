import { switchingDarkMode } from "./darkmode.js";

// ---------------- Answer Button -----------------

const questionCardAnswer = document.querySelector('[data-js="question-card-answer"]');
const questionCardButtonToShowAndHideAnswer = document.querySelector('[data-js="question-card-button"]');

// take html class hidden of button and then if addeventlistener is triggered with a click, then it 
// doesnt hide the questionCardAnswer --> !hidden. "!" is for the negative version of an action
questionCardButtonToShowAndHideAnswer.addEventListener("click", (e) => {

    questionCardAnswer.hidden = !questionCardAnswer.hidden;
});

// here the text on the button changes depending if answer is showing or not
questionCardButtonToShowAndHideAnswer.addEventListener("click", (event) => {

    if (questionCardButtonToShowAndHideAnswer.textContent === "SHOW ANSWER") {
        questionCardButtonToShowAndHideAnswer.textContent = "Hide Answer";
    }
    else {
        questionCardButtonToShowAndHideAnswer.textContent = "SHOW ANSWER"
    }
});

// ----------------- Bookmark button -----------------
// The user can click on the bookmark endlessly and the bookmark will toggle between both stylings
const questionCardBookmarkButton = document.querySelector('[data-js="question-card-bookmark-button"]');
const questionCardBookmarkPicture = document.querySelector('[data-js="question-card-bookmark-picture"]');

// make a variable for condition whether button is checked or not:
let questionCardBookmarked = false;
// make it false and unfilled by default!

questionCardBookmarkButton.addEventListener("click", () => {
    // say that if let questionCardBookmarked is as defined above (=default/false/unfilled) then...
    if (questionCardBookmarked) {
        questionCardBookmarkPicture.src = "./resources/bookmark_unfilled.png";
        questionCardBookmarkPicture.alt = "filled-bookmark-pic";
    }

    // if questionCardBookmarked is true/filled (!questionCardBookmarked = false) then...
    else if (!questionCardBookmarked) {
        questionCardBookmarkPicture.src = "./resources/bookmark_filled.png";
        questionCardBookmarkPicture.alt = "unfilled-bookmark-pic";
    }

    // then say if first condition was true (questionBookMarked = false) then change next time when user clicks: 
    questionCardBookmarked = !questionCardBookmarked
});

switchingDarkMode();

