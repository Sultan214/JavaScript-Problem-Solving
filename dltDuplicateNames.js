//delete duplicate Names from array

const names = ["Jubair", "Sultan", "Zoya", "Jubair", "Sultan", "Zoya"]

function naam(names) {
	const unique = [];
	for (let i = 0; i < names.length; i++) {
		const NamesElements = names[i];
		if (unique.includes(NamesElements) === false) {
			unique.push(NamesElements)
		}
	}
	return unique;
}
const uniquenames= naam(names);
console.log(uniquenames);