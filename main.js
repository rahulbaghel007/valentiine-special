let cnt = 0; // Declare cnt outside the function to maintain its value across calls

function handleclickNo() {
  cnt++; // Increment cnt without redeclaring it

  const buttonYes = document.querySelector(".yes"); // Get the first element with the class "yes"
  var buttonNo = document.querySelector(".no");
  switch (cnt) {
    case 1:
      buttonYes.style.padding = "25px";
      buttonYes.style.fontSize = "15px";
      buttonNo.innerHTML = "Really sure?";
      break;
    case 2:
      buttonYes.style.padding = "35px";
      buttonYes.style.fontSize = "25px";
      buttonNo.innerHTML = "Think again!";
      break;
    case 3:
      buttonYes.style.padding = "60px";
      buttonYes.style.fontSize = "35px";
      buttonNo.innerHTML = "last chance";
      break;
    case 4:
      buttonYes.style.padding = "80px";
      buttonYes.style.fontSize = "45px";
      buttonNo.innerHTML = "surely Not?";
      break;
    case 5:
      buttonYes.style.padding = "100px";
      buttonYes.style.fontSize = "55px";
      buttonNo.innerHTML = "you might regect this";
      break;
    case 6:
      buttonYes.style.padding = "120px";
      buttonYes.style.fontSize = "65px";
      buttonNo.innerHTML = "give it another thought!";
      break;
    case 7:
      buttonYes.style.padding = "140px";
      buttonYes.style.fontSize = "75px";
      buttonNo.innerHTML = "Are you adsolutely certain?";
      break;
    case 8:
      buttonYes.style.padding = "160px";
      buttonYes.style.fontSize = "85px";
      buttonNo.innerHTML = " have a heart";
      break;
    case 9:
      buttonYes.style.padding = "180px";
      buttonYes.style.fontSize = "95px";
      buttonNo.innerHTML = " donot be so cold";
      break;
    case 10:
      buttonYes.style.padding = "200px";
      buttonYes.style.fontSize = "105px";
      buttonNo.innerHTML = "change of heart? ";
      break;
    case 11:
      buttonYes.style.padding = "200px";
      buttonYes.style.fontSize = "105px";
      buttonNo.innerHTML = " is that you final answer? ";
      break;
    case 12:
      buttonYes.style.padding = "200px";
      buttonYes.style.fontSize = "105px";
      buttonNo.innerHTML = "you are breaking my heart;("
      break;
}
}

function handleclickYes() {
    // Get the image element
    const changeImage = document.getElementById('image');

    // Update the image source
    changeImage.src = "assets/bears-hug.gif";

    // Set the width and height of the image to  250px
    changeImage.style.width = "350px";
    changeImage.style.height = "300px";
    const h1Element = document.querySelector('h1');
    const buttonsContainer = document.querySelector('.buttons');

    // Hide the h1 element and the buttons
    h1Element.innerHTML = "OOH-Yeah!"
    buttonsContainer.style.display = 'none';
}




//     case 2:
//         text="Think again"
//         break;
// case 3:
//     last chance
//     surely Not?
//     youmight  regect this give it another thought! are you adsolutely certain?
//     this could be a mistake have a heart change of heart?

//     is that you final answer?
//     you are breaking my heart;(
