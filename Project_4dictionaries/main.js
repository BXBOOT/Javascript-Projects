function myCars() {
    var cars = {
        Colour: 'Red',
        Make:'Mercedes',
        Speed:275,
        Year:2016,
        Speed:'Very fast'
    };
    delete cars.Speed;
    document.getElementById("Dictionary").innerHTML=cars.Speed;// Adding 2 KVP with same key results in newest var being used. deleting the key deletes both uses of the key and are undefined
}