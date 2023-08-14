let string = "abcdefg";
let dyeaz = "#";

for (let i = 0; i <= 6; i++) {
	console.log(dyeaz);
	if (string.length > i) {
		dyeaz = dyeaz + "#";
	}
}