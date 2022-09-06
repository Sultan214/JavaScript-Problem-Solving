const firstNUm = [10, 20, 30, 40, 50,501,453];
const partial = firstNUm.splice(1, 3);
 console.log(partial);
console.log(firstNUm);  //it will cut index num from orginial array




//    index no 	0,  1,	2,	3,	4,	5,	6,	7
let BoysAges = [10, 20, 30, 40, 50,501,453]
let newAges = BoysAges.splice(2, 4, 23, 454)

console.log("Array splices",newAges);
console.log(BoysAges)