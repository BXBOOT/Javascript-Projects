/*function Call_Loop () {
    var num = "";
    X = 10;
    while (X < 100) {
        num += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = num;
}

let text = "How long is this sentence?";
let length = text.length;

document.getElementById("show").innerHTML = length;*/

/*var animals =["dogs", "cats", "mice", "turtles", "fish"];
var content = "";
var X;
function for_loop (){
    for (X = 0; X < animals.length; X++) {
        content += animals[X] + "<br>";
    }
    document.getElementById("pets").innerHTML = content;
}

function array_function() {
    var sum_different = [];
    sum_different[1] = "upsidedown";
    sum_different[2] = "downsideup";
    sum_different[3] = "insideoout";
    sum_different[4] = "aipperclosed";
    sum_different[5] = "zipperopen";
    document.getElementById("Array").innerHTML = "In this picture the coat is " + sum_different[3] + ".";
}

function constant_function () {
    const car_collection = {type:"mustang", brand:"ford", color:"orange"};
    car_collection.color = "black";
    car_collection.price = "$25000";
    document.getElementById("constant").innerHTML = "the car was originally orange, but we painted it " + car_collection.color +" so we could charge " + car_price + " for it.";
}


var X = "Repeat";
document.write(X); 
{
    let X = "and repeat again to learn"; //let allows the re-declaration of variables utside the curlies but within the block?
    document.write("<br>" + X);
}
document.write("<br>" + X);


document.getElementById("first").innerHTML = myName("Mike")

function myName (name) {
    return "hello "  + name;
}


let text = "";
for (let i = 0; i < 10; i++) { // i increments by 1 through each iteration
  if (i === 3) { continue; } //this skips the iteration where i would equal 3, but continues with i equal to 4 util loop ends at 9
  if (i === 5) {break} //even though the count should go to 10 (show 9 on the screen), we have skipped 3 and stopped at 4 by using both continue and break
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;*/

//Assignment 10 submission

var i = 1; //sets the begin value of i
while (i <= 5) {     // as long as i is less than 5 loop and continue to write the statement below 
    document.write("The Number Is " + i + "<br>" ); //write this statement, br makes i t on seperate lines.
    i++; //increments i by 1
}

// similar to above incrementing by 1
for(var i=1; i<=10; i++) {
    document.write("The new number is " + i, "<br>" );
}
document.getElementById("for_loop").innerHTML = i++;

  // An array with some fruit
  var fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
     
  // Loop through all the fruits in the array 
  for(var i=0; i<fruits.length; i++) { //if i's length is less than the length of the array write the next element until it is complete
      document.write( fruits[i] + "</br>");
  }

  let pet = {
    breed: "cat",
    size: "large",
    color: "tabby",
    name: "scratchy",
    description: function () {
        return "The missing " + this.breed + " is a "  + this.size  +  this.color + " answering to the name " + this.name + ".";
    }
};
document.getElementById("pet_ob").innerHTML = pet.description();

