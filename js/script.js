const createText = document.getElementById("btn");
const fairyTale = document.querySelector(".fairyTale");
createText.addEventListener("click", () => {
    let varFirst = document.getElementById("var1").value;
    let varSecond = document.getElementById("var2").value;
    let varThree = document.getElementById("var3").value;
    let varFour = document.getElementById("var4").value;
    let varFive = document.getElementById("var5").value;
    let varSix = document.getElementById("var6").value;
    let speachOne = document.getElementById("speach").value;
    createText.setAttribute("disabled", "disabled");
    

    fairyTale.innerHTML = `"Жили-были <span id = "varFirst">${varFirst}</span> да <span id = "varSecond">${varSecond}</span>","Была у них <span id = "varThree">${varThree}</span>","Снесла <span id = "varThree_2">${varThree}</span> <span id = "varFour">${varFour}</span>, не простое - золотое","- <span id = "varFirst_2">${varFirst}</span> бил, бил - не разбил","- <span id = "varSecond_2">${varSecond}</span> била, била - не разбила","<span id = "varFive">${varFive}</span> бежала, <span id = "varSix">${varSix}</span> задела, <span id = "varFour_2">${varFour}</span> упало и разбилось.","<span id = "varFirst_3">${varFirst}</span> плачет, <span id = "varSecond_3">${varSecond}</span> плачет, а <span id = "varThree_3">${varThree}</span> кудахчет:","<span id = "speachOne">${speachOne}</span>"`
  })


const addWords = document.getElementById("replace");
addWords.addEventListener("click", () => {
    let spanOne = document.getElementById("varFirst");
    let spanOneTwo = document.getElementById("varFirst_2");
    let spanOneThree = document.getElementById("varFirst_3");
    let varFirst = document.getElementById("var1").value;
    spanOne.textContent = varFirst;
    spanOneTwo.textContent = varFirst;
    spanOneThree.textContent = varFirst;

    let spanTwo = document.getElementById("varSecond");
    let spanTwoTwo = document.getElementById("varSecond_2");
    let spanTwoThree = document.getElementById("varSecond_3");
    let varSecond = document.getElementById("var2").value;
    spanTwo.textContent = varSecond;
    spanTwoTwo.textContent = varSecond;
    spanTwoThree.textContent = varSecond;

    let spanThree = document.getElementById("varThree");
    let spanThreeTwo = document.getElementById("varThree_2");
    let spanThreeThree = document.getElementById("varThree_3");
    let varThree = document.getElementById("var3").value;
    spanThree.textContent = varThree;
    spanThreeTwo.textContent = varThree;
    spanThreeThree.textContent = varThree;

    let spanFour = document.getElementById("varFour");
    let spanFourTwo = document.getElementById("varFour_2");
    let varFour = document.getElementById("var4").value;
    spanFour.textContent = varFour;
    spanFourTwo.textContent = varFour;

    let spanFive = document.getElementById("varFive");
    let varFive = document.getElementById("var5").value;
    spanFive.textContent = varFive;

    let spanSix = document.getElementById("varSix");
    let varSix = document.getElementById("var6").value;
    spanSix.textContent = varSix;

    let spanSpeach = document.getElementById("speachOne");
    let speachOne = document.getElementById("speach").value;
    spanSpeach.textContent = speachOne;
})






