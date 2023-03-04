function myMarks(test1 , test2, test3, test4){
    const total = test1 + test2 + test3 + test4;
    const average = total/4;
    return average

}
const test1 = 60;
const test2 = 58;
const test3 = 59;
const test4 = 57;
const myAverage = myMarks(test1, test2, test3, test4);
console.log('my average is:',myAverage);