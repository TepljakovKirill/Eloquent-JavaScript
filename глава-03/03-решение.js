let counter = 0;
function countBs(string) {
	for(let i = 0; i <= string.length-1; i++) {
		if(string[i] === "В") {
			counter = counter + 1;
		}

	}
	console.log(counter);
}

countBs("Вова был на Волге")

let counter2 = 0;
function countChar(string, parametr) {
	for(let i = 0; i <= string.length-1; i++) {
		if(string[i] === parametr ) {
			counter2 = counter2 + 1;
		}

	}
	console.log(counter2);
}

countChar("Вова был на Волге", "о")