punten = 0

function volgende0() {
  document.getElementById("uitleg").style.display = "none";
  document.getElementById("vraag1").style.display = "block";
}

function vraag1(antwoord) {
  if (antwoord == 'c') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag1").style.display = "none";
    document.getElementById("vraag2").style.display = "block";
  }
  else if (antwoord == "a" || antwoord == "b") {
    document.getElementById("vraag1").style.display = "none";
    document.getElementById("vraag2").style.display = "block";
  }
}

function vraag2(antwoord) {
  if (antwoord == 'b') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag2").style.display = "none";
    document.getElementById("vraag3").style.display = "block";
  }
  else if (antwoord == "a" || antwoord == "c") {
    document.getElementById("vraag2").style.display = "none";
    document.getElementById("vraag3").style.display = "block";
  }
}

function vraag3(antwoord) {
  if (antwoord == 'a') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag3").style.display = "none";
    document.getElementById("vraag4").style.display = "block";
  }
  else if (antwoord == "b" || antwoord == "c") {
    document.getElementById("vraag3").style.display = "none";
    document.getElementById("vraag4").style.display = "block";
  }
}

function vraag4(antwoord) {
  if (antwoord == 'c') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag4").style.display = "none";
    document.getElementById("vraag5").style.display = "block";
  }
  else if (antwoord == "a" || antwoord == "b") {
    document.getElementById("vraag4").style.display = "none";
    document.getElementById("vraag5").style.display = "block";
  }
}

function vraag5(antwoord) {
  if (antwoord == 'b') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag5").style.display = "none";
    document.getElementById("vraag6").style.display = "block";
  }
  else if (antwoord == "a" || antwoord == "c") {
    document.getElementById("vraag5").style.display = "none";
    document.getElementById("vraag6").style.display = "block";
  }
}

function vraag6(antwoord) {
  if (antwoord == 'a') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag6").style.display = "none";
    document.getElementById("vraag7").style.display = "block";
  }
  else if (antwoord == "b" || antwoord == "c") {
    document.getElementById("vraag6").style.display = "none";
    document.getElementById("vraag7").style.display = "block";
  }
}

function vraag7(antwoord) {
  if (antwoord == 'a') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag7").style.display = "none";
    document.getElementById("vraag8").style.display = "block";
  }
  else if (antwoord == "b" || antwoord == "c") {
    document.getElementById("vraag7").style.display = "none";
    document.getElementById("vraag8").style.display = "block";
  }
}

function vraag8(antwoord) {
  if (antwoord == 'a') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag8").style.display = "none";
    document.getElementById("vraag9").style.display = "block";
  }
  else if (antwoord == "b" || antwoord == "c") {
    document.getElementById("vraag8").style.display = "none";
    document.getElementById("vraag9").style.display = "block";
  }
}

function vraag9(antwoord) {
  if (antwoord == 'c') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag9").style.display = "none";
    document.getElementById("vraag10").style.display = "block";
  }
  else if (antwoord == "a" || antwoord == "b") {
    document.getElementById("vraag9").style.display = "none";
    document.getElementById("vraag10").style.display = "block";
  }
}

function vraag10(antwoord) {
  if (antwoord == 'b') {
    punten = punten + 10;
    console.log(punten)
    document.getElementById("vraag10").style.display = "none";
    document.getElementById("punten").innerHTML = "Je heeft " + punten + "/100 punten gehaald!"
    document.getElementById("resultaat").style.display = "block";
  }
  else if (antwoord == "a" || antwoord == "c") {
    document.getElementById("vraag10").style.display = "none";
    document.getElementById("punten").innerHTML = "Je hebt " + punten + "/100 punten gehaald!"
    document.getElementById("resultaat").style.display = "block";

  }

}










