const containerEl = document.querySelector(".container")

const professions = ["Instructor", "Web Developer", "Freelancer", "Programmer"];

let professionIndex = 0;

let characterIndex = 0

updateText()

function updateText(){
    characterIndex++
    containerEl.innerHTML = 
      ` <h1>I am ${professions[professionIndex].slice(0,1) ==="I" ? "an" : "a"} ${professions[professionIndex].slice(0,characterIndex)}</h1>`;
   
    if(characterIndex === professions[professionIndex].length){
        professionIndex++
        characterIndex = 0
    }
    if (professionIndex===professions.length){
        professionIndex = 0;
    }
    setTimeout(updateText,400);

    


}


