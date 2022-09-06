const phones = [
	{ name: "samsung", camera: 32, storage: "128gb", price: 36500, color: "silver" },
   { name: "iphone", camera: 32, storage: "128gb", price: 96000, color: "silver" },
   { name: "xiaomi", camera: 32, storage: "128gb", price: 26000, color: "offwhite" },
   { name: "oppo", camera: 32, storage: "128gb", price: 36000, color: "silver" },
   { name: "nokia", camera: 32, storage: "128gb", price: 16000, color: "Black" },
   { name: "htc", camera: 32, storage: "128gb", price: 26000, color: "Grey" },
   
];
function cheapestPhone(phones) {
	let cheapest = phones[0]
	for (let i = 0; i < phones.length; i++){
		const phone = phones[i]
		if (phone.price < cheapest.price) {
			cheapest = phone
	
		}
		
	}
	return cheapest
}
const mySelection = cheapestPhone(phones);
console.log(mySelection)
