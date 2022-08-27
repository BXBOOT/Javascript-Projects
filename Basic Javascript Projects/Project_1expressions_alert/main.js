//document.write('Hello World')//

//var knot='This is a string';
//document.write(knot)

var T ="If only all javascript was this easy";
    window.alert(T); //pops up an alert window with an ok button and message

function added (){
    var quote = 'what to do if  \'we don\'t want\' to have additional errors? ' //concatenates or ties together 2 strings
    + 'because those who make errors learn from their mistakes ' // make space in between the + and the first and second string
    + 'and because we learn from our mistakes, we don\'t repeat them'
    var quote = quote.fontcolor('darkblue'); //changes font clor, the fintclor function has been depricated. may stop working at any time
document.write(quote);
}

function animals(){
    var pet = 'the cat', dog='the floof', mouse='dinner', snake='king of the hill'; //adding more than one value to a variable
    var pet = pet.fontcolor('green'); //all below chage the color of the font of that variable
    var dog= dog.fontcolor('orange');
    var mouse= mouse.fontcolor('purple');
    var snake= snake.fontcolor('darkgray');
    document.write(dog , pet , mouse , snake);
}
function simple (){
    document.write(3*3) //simply performs a function of multipplication
}

   
document.getElementById('myID').addEventListener("mouseover", function() {
    document.getElementById('myID').style.backgroundColor = "green";
});
    
document.getElementById('myID').addEventListener("mouseout", function() {
    document.getElementById('myID').style.backgroundColor = "red";
});
