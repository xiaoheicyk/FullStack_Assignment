//01
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for(let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

//02
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj){
    for(let key in obj){
        let value = Number(obj[key]);
        value*=2;
    }
}
multiplyNumeric(menu)
console.log(menu);
