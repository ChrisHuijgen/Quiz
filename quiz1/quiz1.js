punten = 0

function vraag1(antwoord) {
  if (antwoord == 'a') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraagEenf").style.display = "none";
    document.getElementById("vraag2f").style.display = "block";
  }
  else if (antwoord == "b" || antwoord == "c") {
    document.getElementById("vraagEenf").style.display = "none";
    document.getElementById("vraag2f").style.display = "block";
  }
}

function vraag2(antwoord) {
  if (antwoord == 'b') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag2f").style.display = "none";
    document.getElementById("vraag3f").style.display = "block";
  }
  else if (antwoord == "a" || antwoord == "c") {
    document.getElementById("vraag2f").style.display = "none";
    document.getElementById("vraag3f").style.display = "block";
  }
}

function vraag3(antwoord) {
  if (antwoord == 'b') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag3f").style.display = "none";
    document.getElementById("vraag4f").style.display = "block";
  }
  else if (antwoord == "a" || antwoord == "c") {
    document.getElementById("vraag3f").style.display = "none";
    document.getElementById("vraag4f").style.display = "block";
  }
 }

 function vraag4(antwoord) {
  if (antwoord == 'a') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag4f").style.display = "none";
    document.getElementById("vraag5f").style.display = "block";
  }
  else if (antwoord == "b" || antwoord == "c") {
    document.getElementById("vraag4f").style.display = "none";
    document.getElementById("vraag5f").style.display = "block";
  }
 }

 function vraag5(antwoord) {
  if (antwoord == 'c') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag5f").style.display = "none";
    document.getElementById("vraag6f").style.display = "block";
  }
  else if (antwoord == "a" || antwoord == "b") {
    document.getElementById("vraag5f").style.display = "none";
    document.getElementById("vraag6f").style.display = "block";
  }
 }

 function vraag6(antwoord) {
  if (antwoord == 'a') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag6f").style.display = "none";
    document.getElementById("vraag7f").style.display = "block";
  }
  else if (antwoord == "b" || antwoord == "c") {
    document.getElementById("vraag6f").style.display = "none";
    document.getElementById("vraag7f").style.display = "block";
  }
 }

 function vraag7(antwoord) {
  if (antwoord == 'c') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag7f").style.display = "none";
    document.getElementById("vraag8f").style.display = "block";
  }
  else if (antwoord == "a" || antwoord == "b") {
    document.getElementById("vraag7f").style.display = "none";
    document.getElementById("vraag8f").style.display = "block";
  }
 }

 function vraag8(antwoord) {
  if (antwoord == 'b') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag8f").style.display = "none";
    document.getElementById("vraag9f").style.display = "block";
  }
  else if (antwoord == "a" || antwoord == "c") {
    document.getElementById("vraag8f").style.display = "none";
    document.getElementById("vraag9f").style.display = "block";
  }
 }

 function vraag9(antwoord) {
  if (antwoord == 'a') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag9f").style.display = "none";
    document.getElementById("vraag10f").style.display = "block";
  }
  else if (antwoord == "b" || antwoord == "c") {
    document.getElementById("vraag9f").style.display = "none";
    document.getElementById("vraag10f").style.display = "block";
  }
 }

 function vraag10(antwoord) {
  if (antwoord == 'b') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag10f").style.display = "none";
    document.getElementById("punten").innerHTML = "Je heeft " + punten + "/100 gehaald!"
    document.getElementById("vraageind").style.display = "block";
  }
  else if (antwoord == "a" || antwoord == "c") {
    document.getElementById("vraag10f").style.display = "none";
    document.getElementById("punten").innerHTML = "Je heeft " + punten + "/100 gehaald!"
    document.getElementById("vraageind").style.display = "block";
  }
 }