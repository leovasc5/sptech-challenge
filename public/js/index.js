const characters = getCharacters();
const keys = Object.keys(characters);
const divs = document.getElementsByClassName("cardBox");
const character = {};

keys.forEach((key, index) => {
    newImg = document.createElement("img");
    newImg.src = `${characters[key]['url_photo']}`;

    newBreak1 = document.createElement("br");

    newNome = document.createElement("span");
    newNome.className = "spanNome";
    newNome.textContent = `${characters[key]['nome']}`;

    newBreak2 = document.createElement("br");

    newDesc = document.createElement("span");
    newDesc.className = "spanDesc";
    newDesc.textContent = `${characters[key]['desc']}`;

    newBreak3 = document.createElement("br");
    newBreak4 = document.createElement("br");

    newHabTitle = document.createElement("span");
    newHabTitle.className = "spanHabTitle";
    newHabTitle.textContent = `Habilidades`;

    newUL = document.createElement("ul");
    newUL.className = "ulHab";
    for(i=0; i<=(characters[key]['hab'].length-1); i++) {
        li = document.createElement('li');
        li.innerHTML = characters[key]['hab'][i];
        newUL.appendChild(li);
    }

    divs[key].appendChild(newImg);
    divs[key].appendChild(newBreak1);
    divs[key].appendChild(newNome);
    divs[key].appendChild(newBreak2);
    divs[key].appendChild(newDesc);
    divs[key].appendChild(newBreak3);
    divs[key].appendChild(newBreak4);
    divs[key].appendChild(newHabTitle);
    divs[key].appendChild(newUL);
});