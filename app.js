const form = document.querySelector("form");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");
const link = document.querySelector(".link")
form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    getWord(input.value);
});


 async function getWord(word) {
    const response =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
   
    const data = await response.json()
    console.log(data);

    if(data.title === "No Definitions Found"){
        result.innerHTML = `<p><strong>opps! meaning of  word "${input.value}" is not found!</strong></p>`
    }
    else{
    result.innerHTML = `<p><strong>Word: </strong>${data[0].word}</p><br>
    <p><strong>Meaning: </strong>${data[0].meanings[0].definitions[0].definition}</p><br>
    <p><strong>partOfSpeech: </strong>${data[0].meanings[0].partOfSpeech}</p>`;

    btn.href = `${data[0].sourceUrls}`

    link.style.display = 'flex';
   };
}


function readMore() {
    const url = `${data[0].sourceUrls}`
      
  }

  btn.addEventListener("click", ()=> {
     readMore()
  })

   input.addEventListener("Click", () => {
      input.value= "";
   })


