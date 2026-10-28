let currentScreen = 1;

// ---------- TYPEWRITER ----------

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const firstText = "Hey, handsome...";
const secondText = "This message is for you.";

let i = 0;

function typeTitle(){

    if(i < firstText.length){

        title.innerHTML += firstText.charAt(i);

        i++;

        setTimeout(typeTitle,100);

    }
    else{

        setTimeout(typeSubtitle,600);

    }

}

let j = 0;

function typeSubtitle(){

    if(j < secondText.length){

        subtitle.innerHTML += secondText.charAt(j);

        j++;

        setTimeout(typeSubtitle,80);

    }

}

setTimeout(typeTitle,1000);


// ---------- CHANGE SCREEN ----------

function nextScreen(screen){

    document
    .getElementById("screen"+currentScreen)
    .classList.remove("active");

    currentScreen = screen;

    document
    .getElementById("screen"+currentScreen)
    .classList.add("active");

}