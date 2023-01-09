const userInput = document.getElementById('textdesc');
const spanCount = document.getElementById('counter');
function incrementCount(event) {
    const maxVal = event.target.maxLength;
    const textLength = event.target.value.length;

    const remainingChars = maxVal - textLength;
    spanCount.textContent = remainingChars;
    if (remainingChars <= 69 && remainingChars != 0) {
        spanCount.classList.remove("out-of-text");
        spanCount.classList.add("warning");
        userInput.classList.remove("out-of-text");
        userInput.classList.add("warning");
    } else if (remainingChars > 69)
    {
        spanCount.classList.remove("warning");
        spanCount.classList.remove("out-of-text");
        userInput.classList.remove("warning");
        userInput.classList.remove("out-of-text");
    }
    if (remainingChars == 0) {
        spanCount.classList.remove("warning");
        spanCount.classList.add("out-of-text");
        userInput.classList.remove("warning");
        userInput.classList.add("out-of-text");
    }

}

userInput.addEventListener('input', incrementCount);