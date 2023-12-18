console.clear();


// Answer Button

// When the user clicks on the button the previously hidden answer should be displayed
// When the user clicks this button again the answer is hidden again
// The user can click on this button endlessly and the answer will either be displayed or hidden after each click
// The toggle functionality should be applied by using a class which is named "hidden"
// If the user clicks on an answer button, we want the button to say "hide answer" 
// when the answer is displayed and "show answer" when the answer is not displayed.

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

// Bookmark button
// The user can click on the bookmark endlessly and the bookmark will toggle between both stylings
const questionCardBookmarkButton = document.querySelector('[data-js="question-card-bookmark-button"]');
const questionCardBookmarkPicture = document.querySelector('[data-js="question-card-bookmark-picture"]');

// make a variable for condition whether button is checked or not:
let questionCardBookmarked = false;
// make it false and unfilled by default!

questionCardBookmarkButton.addEventListener("click", (eventBookmark) => {

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



