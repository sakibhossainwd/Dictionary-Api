const loadDictionary = (inputWord) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`;
    fetch(url)
    // console.log(url)
    .then(res => res.json())
    .then((data) => displayWordDetails(data[0]))
}

const displayWordDetails = word => {
    // console.log(word.phonetics[0].audio);
    const inputField = document.getElementById('input-word');
    const inputWord = inputField.value;
    loadDictionary(inputWord);
inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
    const wordDetailsContainer = document.getElementById('word-details-container')
    wordDetailsContainer.innerHTML = `
    <h1 class="fs-1 fw-semibold">Your Word: <spam class="text-warning"> ${word.word}</spam></h1>
            <div class="audio d-lg-flex gap-2 justify-content-between align-items-center mt-3">
                <h4 class="fw-medium">Phonetic: ${word.phonetic}</h4>
                <audio controls class="shadow rounded-5">
                    <source src="${word.phonetics[0].audio}" type="audio/ogg">
                    Your browser does not support the audio tag.
                  </audio>
            </div>
            <h4 class="fw-medium mt-5">Part Of Speech: ${word.meanings[0].partOfSpeech}</h4>
            <h2 class="mt-3">Meaning: <hr></h2>
            <h5 class="mt-3">Definitions: <ol>
                <li>${word.meanings[0].definitions[0].definition}</li>
            </ol></h5>
            <h5 class="mt-3">Synonyms: ${word.meanings[0].synonyms[0]}</h5>
            <h5 class="mt-3">Antonyms: ${word.meanings[0].antonyms[0]}</h5>
            <p></p>
    `
    inputField.value = ""
}

loadDictionary('boy')



