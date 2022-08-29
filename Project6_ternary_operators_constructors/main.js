/*function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}*/

/*function Voter_Function() {
    var Vote, Ballot;
    Vote = document.getElementById("Vote").value;
    Ballot = (Vote < 18) ? "You are not old enough":"You are old enough";
    Ballot = (Vote > 65) ? "You get an extra ballot":"You still only have 1 ballot" //just testing to se wha happens if i added another argument into the mix.
    document.getElementById("Ballot").innerHTML = Ballot + " to Vote.";
}*/

/*function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Erik drives an " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
*/

/*function Employee (first, last, department, wages) {
    this.Employee_first = first;
    this.Employee_last = last;
    this.Employee_department = department;
    this.Employee_wages = wages;
}
 var Emp1 = new Employee ("const", "peters", "grocery", 15.25);

 document.getElementById("New_Person").innerHTML =
 "Our newest employee is " + Employee_first + " They will be working in the "  + Employee_department + ", and be paid " + Employee_wages + " . Thank you";*/

 /*function Add_Function (){
    document.getElementById("Nested_Function").innerHTML= Added();
     function Added() {
        var Start_At = 100;
        function Adding_two () {Start_At += 100;}
        Adding_two();
        return Start_At;
    }
 }*/

 /*Starts f assignment 6 submission*/

 function U_Function () {
    var Grade, Points;
    Grade = document.getElementById("Grade").value; //collecting the input data frm the user
    Points = (Grade > 3.7) ? "Your grades are high enough to enter universty" : "Your grades need improvement to enter university";
    document.getElementById("Points").innerHTML = Points + " and some other words which would make sense" //the sentence neeeds to make sense, for this example it shows the correct outcoome, but sentence is poorly worded
 }

function Person (first, last, age, eyecolor) { //creates the arguments for a new person
    this.Person_first = first;
    this.Person_last = last;
    this.Person_age = age;
    this.Person_eyecolor = eyecolor;
}

var Susan = new Person ("Sue", "Sue", 87, "blue"); //Susan is assigned to a variable
   function person_Function () { //this function reurns to the HTML the getelementbyid with the selected criteria
    document.getElementById("a_Function").innerHTML =
    "Our newest member is " + Susan.Person_first; //we can ad all descriptors, 1, or a mix of them, in any order
}

function num_function () { //function from the HTML
    document.getElementById("in_Function").innerHTML = Plus(); //id of the element we are changing with innerHTML
    function Plus () { //function name for nested function of what we are going to do.
        var begin_At = 300; //our starting number is 300
        function adding () {begin_At += 300;} //when page refreshes and onclick it will add 300 to number
        adding ();
        return begin_At;
    }
}


