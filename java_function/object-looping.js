var shoppingCard = {
    pent: 5,
    shirt : 3,
    mobile : 1,
    computer : 1,
    keyboard : 1,
    mouse : 1,

}
var propName = Object.keys(shoppingCard);
console.log(propName);
var propValue = Object.values(shoppingCard);
console.log(propValue);
for(var i = 0; i < propName.length; i++){
    var propertyName = propName[i];
    console.log(propertyName[1]);
}
