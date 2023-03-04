const products = [
    {id:1, name: 'iphone', price:47500},
    {id:2, name: 'computer', price:43500},
    {id:7, name: 'shirt', price:400},
    {id:1, name: 'iphone', price:47500},
    {id:1, name: 'xaimi phone', price:47500},
    {id:1, name: 'One+ phone', price:47500},
    {id:9, name: 'pent',price:500},
    {id:9, name: 'watch', price:5000},

];
// for(const product of products){
//     console.log(product)
// }
function matchProduct(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;

}
const result = matchProduct(products, 'phone');
console.log(result)
