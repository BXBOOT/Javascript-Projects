/*X = 30;
function adding_1 () {
    document.write(20 + X); //gives a break between functions on the page
}

function adding_2() {
    document.write(35 +X);
}

adding_1 ();
adding_2 ();


function adding_1 () {
    X = 30;
    document.write(20 + X); //To change tis to a local variable simply write the variable within the function
}

function adding_2() {
    document.write(35 + X);
}

adding_1 ();
adding_2 ();*/

/*function get_Date() {
    if (new Date() .getDay()>=1){
        document.getElementById("Greeting").innerHTML = "Happy Firday";
    }
}*/


/*function age_function() {
    age =  document.getElementById("age").value;  
    if (age >=25) {
        Drive = "you are old enough to rent a car";
        }

    document.getElementById("age_factor").innerHTML = Drive;
}*/

//Start of Assignment 7 Submission


// These 2 functions show the use of a global function in the console log. var set outside the functions
X = 30 //global var because outside the function.

function add_num1 () {
   console.log(20 +X);
}

function add_num2 () { 
    console.log(20 +X);
 }

 add_num1();// needed to show result in console.log
 add_num2();


//simplistic if an else stament was added, it could sate the incorrect color was selected
function color_match () {
    color = document.getElementById("color").value;
    if (color = "black") {
        mixer = "make sure you pick Henry Fords only car color";
    }
document.getElementById("color_mix").innerHTML = mixer; //this is hat changes the HTML to display the statement
}

//Time function. collects current time from the machine running the code

function Time_function() {
    var Time = new Date() .getHours(); //Time can be taken down to the millisecond if need be, perhaps on a stop watch exercise.
    var Reply;
    if (Time < 12 == Time > 0) { //first condition to check if it is before noon
        Reply = "It is morning time";
    }
    else if (Time > 12 == Time < 18) { //second condition to check if it is between noon and 6pm
        Reply = "It is afternoon"; 
    }
    else {                              //Tird condition does not check for another condition in this instance because there are none left.
        Reply= "It is evening time";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}









