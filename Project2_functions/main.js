document.getElementById('first').addEventListener('mouseover', function(){
    document.getElementById('first').style.backgroundColor='maroon'; //move mouse over the button changes color of the block
});

document.getElementById('second').addEventListener('mouseover', function(){
    document.getElementById('second').style.backgroundColor='black';//move mouse over button changes color of the block
});

document.getElementById('second').addEventListener('mouseleave', function(){
    document.getElementById('second').style.backgroundColor='aqua'; //move mouse away from the element it changes to a different color
});
 
function myFunction() { //name f the function in the index.html page
    var wording = 'A made up sentence to ';
    wording += ' show how we can "concatenate" using a specific mix of operators'; //2 strings to concatenate
    document.getElementById('concatenate').innerHTML = wording; //get element by id to change the information on a web page
}

function aFunction() {
    var num = '31'
    num += ' the number expressed in words is thirty one';
    document.getElementById("aNumeral").innerHTML= num;

    window.alert('ChangeIt')
};