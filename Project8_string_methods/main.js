function conc() {
    var first = "C";
    var second ="o";
    var third = "d";
    var fourth = "e";
    var fifth = "s";
    var whole_word = first.concat(second, third, fourth, fifth);
    document.getElementById("full").innerHTML = whole_word;
} 

function sliced() {
    var sentence = "learninig coding works best with repetition!";
    var pieces = sentence.slice(32,);
    document.getElementById("apart").innerHTML = pieces;
}

function upper() {
    var sentence = "learninig coding works best with repetition!";
    var capital = sentence.toUpperCase();
    document.getElementById("top").innerHTML = capital;
}

function find() {
    var sentence = "learninig coding works best with repetition!";
    var found = sentence.search("r"); // this only tells how many rs are in the sentence.
    document.getElementById("lost").innerHTML = found;
}

function precision_Method() {
        var X = 325.3232562;
        document.getElementById("Precision").innerHTML= X.toPrecision(4);
    }
