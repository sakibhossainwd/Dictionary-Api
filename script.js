const loadDictionary = () => {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/boy')
    .then(res => res.json())
    .then((data) => console.log(data[0].phonetics[0].audio))
}

loadDictionary()