var x = 123;

function double(){
     var txtClone = document.getElementsByClassName("nbr_repeat");

      for (var i = 0 ; i < txtClone.length ; i++){

        txtClone[i].innerHTML = x.toString(); 
      }
     
}

//repeating elements using an array
var fruits =  ["banana", "coco", "watermelon"];

function each_fruit(){
    const element = document.getElementsByClassName("fruits");

    for (var i = 0; i < element.length ; i++){
        element[i].innerHTML = fruits[i];
    }
}