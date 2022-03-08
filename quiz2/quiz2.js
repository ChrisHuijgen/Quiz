

function volgende0() {
document.getElementById("uitleg").style.display = "none";
document.getElementById("vraag1").style.display = "block";
  }

  function vraag1() {
  document.getElementById("vraag1").style.display = "none";
  document.getElementById("vraag2").style.display = "block";
  }

 function vraag2() {
   document.getElementById("vraag2").style.display = "none";
document.getElementById("vraag3").style.display = "block";
          }
        
function vraag3() {
document.getElementById("vraag3").style.display = "none";
document.getElementById("vraag4").style.display = "block";
}
              
function vraag4() {
   document.getElementById("vraag4").style.display = "none";
  document.getElementById("vraag5").style.display = "block";
  }

 function vraag5() {
  document.getElementById("vraag5").style.display = "none";
   document.getElementById("vraag6").style.display = "block";
  }

 function vraag6() {
 document.getElementById("vraag6").style.display = "none";
document.getElementById("vraag7").style.display = "block";
  }

  function vraag7() {
 document.getElementById("vraag7").style.display = "none";
 document.getElementById("vraag8").style.display = "block";
 }

 function vraag8() {
  document.getElementById("vraag8").style.display = "none";
  document.getElementById("vraag9").style.display = "block";
 }

  function vraag9() {
  document.getElementById("vraag9").style.display = "none";
  document.getElementById("vraag10").style.display = "block";
  }

 function vraag10() {
 document.getElementById("vraag10").style.display = "none";
document.getElementById("resultaat").style.display = "block";
}

let punten = 0

if(vraag1 == 'c'){
  punten = punten + 10;
}
if(vraag2 == 'b'){
  punten = punten + 10;
}
if(vraag3 == 'a'){
  punten = punten + 10;
}
if(vraag4 == 'c'){
  punten = punten + 10;
}
if(vraag5 == 'b'){
  punten = punten + 10;
}
if(vraag6 == 'a'){
  punten = punten + 10;
}
if(vraag7 == 'a'){
  punten = punten + 10;
}
if(vraag8 == 'a'){
  punten = punten + 10;
}
if(vraag9 == 'c'){
  punten = punten + 10;
}
if(vraag10 == 'b'){
  punten = punten + 10;
}

function resultaat(){
  if (punten <= 50){
  document.write("Gefeliciteerd je hebt de quiz afgemaakt!")
  document.write("Je hebt " + punten + "gehaald")
  }
  if (punten > 60){
    document.write("Gefeliciteerd je hebt de quiz afgemaakt!")
    document.write("Je hebt " + punten + "gehaald")
  }
}









 