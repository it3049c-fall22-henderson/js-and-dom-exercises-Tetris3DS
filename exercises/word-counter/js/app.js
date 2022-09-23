// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const inputText = document.querySelector('#text');
const statElem = document.querySelector('#stat');

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.


const render = (event) => {
    statElem.innerHTML = `<p>You've written <span class="highlight">${event.detail.wordStat.words} words</span> 
        and <span class="highlight">${event.detail.wordStat.characters} characters</span>.</p>`;
}

inputText.addEventListener('count', render);