let n = 5;
let string = "";
// External loop
for (let i = 0; i < n; i++) {
    // print spaces
    for (let j = 0; j < i; j++) {
        string += " ";
    }
    // print star
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);