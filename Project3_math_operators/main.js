function alertFunction(){
    alert ("A page full of numbers");
}

function newFunction(p1, p2) {
    return p1+p2;
}
document.getElementById("Math").innerHTML = newFunction(5, 5); //basic additin function


function subFunction(x, y) {
    return x-y;
}
document.getElementById('subs').innerHTML = subFunction(12,23); //will return a negactive number if it is crrect

function multFunction(q, r) {
return q*r;
}
document.getElementById('mult').innerHTML = multFunction (5,5); //javascript no longer uses simple math for multilicaton

var Y = 1235;
Y--;
document.write (Y); //decreases number by 1

var P = 235621;
P++;
document.write(P); //increases number by 1

document.getElementById("Mathele").innerHTML = Math.round(45.2);

document.getElementById("numFunction").innerHTML = Math.random () //a new number is generated everytime the page is refreshed, fractional



