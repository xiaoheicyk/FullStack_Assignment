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
console.log("Before:");
console.log(menu);
function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *=2;
        }
    }
}
multiplyNumeric(menu)
console.log("After:");
console.log(menu);


//03
function checkEmailId(str){
    str = str.toLowerCase();
    let atIndex = str.indexOf('@');
    let dotIndex = str.indexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < str.length - 1;
}
console.log(checkEmailId("John"));
console.log(checkEmailId("John@gmail.com"));
console.log(checkEmailId("Joh.n@gmailcom"));
console.log(checkEmailId("John@gmail."));

//04
function truncate(str,maxLength){
    if (str.length > maxLength) {
        return str.substring(0, maxLength - 3) + "...";
    }
    return str;
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));

//05
let styles = ["James","Brennie"]
console.log(styles);
styles.push("Robert")
console.log(styles);
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Calvin";
console.log(styles);
let removedFirst = styles.shift();
console.log(styles);
console.log(removedFirst);
styles.unshift("Rose", "Regal");
console.log(styles);
