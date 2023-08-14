let string = " ";
let dyeaz = "#";
let zero = " ";

for (let a = 0; a <= 72; a++) {
	if (a % 9 == 0) {
		string = string + "\n";
	} else if (a % 2 == 0) {
		string = string + dyeaz;
	} else if (a % 2 != 0) {
		string = string + zero;
	}
}

console.log(string);