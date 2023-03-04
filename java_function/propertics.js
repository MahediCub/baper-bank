var shoppingCard = {
    pent: 5,
    shirt : 3,
    mobile : 1,
    computer : 1,
    keyboard : 1,
    mouse : 1,

}
var pentCount = shoppingCard.pent
var propertics = Object.keys(shoppingCard)
var properticsValue = Object.values(shoppingCard);
// console.log(propertics);
// console.log(properticsValue);
console.log(shoppingCard)
var propertyName = 'computer';
var parValues = shoppingCard[propertyName];
// console.log(propertyName, parValues);
shoppingCard.pent = 10;
console.log(shoppingCard);
shoppingCard['mobile'] = 20;
console.log(shoppingCard)