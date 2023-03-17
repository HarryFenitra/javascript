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

fruits.push("mango");

each_fruit();

document.getElementById("nbr_fruits").innerHTML = fruits.length;


// using function sort

var points = [40,100,20,50,1];

function sort_number(){
    let x = document.getElementsByClassName("sort_result");

    for (var i = 0; i< x.length ; i++){
        x[i].innerHTML = points.sort();
    }

    // for (var i = 0; i< x.length ; i++){
    //     x[i].innerHTML = points.sort(
    //         function(a,b){return a-b;}
    //         );
    // }
}
sort_number();
