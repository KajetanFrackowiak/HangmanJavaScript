let languages = ["cpp", "javascript", "python", "kotlin"];

let langLength = languages.reduce(function(first, second) {
    return first + second.length;
}, 0);

console.log(langLength);