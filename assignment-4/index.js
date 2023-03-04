
// First Problem
// A fuction that takes only positive value and return some operation.

function mindGame(gameInput) {
    let positive = Math.abs(gameInput);
    console.log(positive);
    let multiply = positive * 3;
    let addition = multiply + 10;
    let div = addition / 2;
    let sub = div - 5;

    if (typeof positive === 'number') {


        return sub;

    }
    else {
        return "insert a number";
    }
}

mindGame(-5);


// Second Problem
//  this function for finding a string length is odd or even.

function evenOdd(str) {
    if (typeof str === "string") {
        if (str.length % 2 === 0) {
            return "even";
        }
        else {
            return "odd"
        }

    }
    else {
        return "Enter a string input.";
    }


}
evenOdd("fals");



// Third Problem
// this function for find difference from the userinput.
// if differenc is less then 7 return result or multiply the input by 2.

function isLGSeven(userinput) {
    let substractValue = userinput - 7;
    if (typeof userinput === 'number') {
        if (substractValue >= 7) {
            return userinput * 2;
        }
        else {
            return substractValue;
        }

    }
    else {

        return " insert a number";
    }
}
isLGSeven(9);


// Fourth Problem
// this function find negative value from the array are return the number of negative value.

const userData = [-4, -9, -5, 2, 4, 1, 0];

function findingBadData(userArray) {

    let badData = [];


    if (Array.isArray(userArray) === true) {

        for (let i = 0; i < userArray.length; i++) {
            if (userArray[i] < 0) {
                badData.push(userArray[i]);
            }

        }
        return badData.length;

    }
    else {
        return "you have to give an array to get result.";
    }

}

findingBadData(userData);



// Fifth Problem
//  Gems to diamond calculator

function gemsToDiamond(firstGems, secondGems, thirdGems) {

    let firsttotalDiamond = firstGems * 21;
    let secondtotalDiamond = secondGems * 32;
    let thirdtotalDiamond = thirdGems * 43;

    let total = firsttotalDiamond + secondtotalDiamond + thirdtotalDiamond;
    if ((typeof firstGems === 'number') && (typeof secondGems === 'number') && (typeof thirdGems === 'number')) {
        if (total > 2000) {
            let finalDiamond = total - 2000;
            return finalDiamond;
        }
        else {
            return total;
        }
    }
    else {
        return " give a numbers.";
    }
}

gemsToDiamond(20, 200, 50);