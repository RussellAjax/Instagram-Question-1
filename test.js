var ans = require('./ans');

test = [
	Trade1= {"Value" : 2000000, "ClientSector" : "Private"},
	Trade2= {"Value" : 400000, "ClientSector" : "Public"},
	Trade3= {"Value" : 500000, "ClientSector" : "Public"},
	Trade4= {"Value" : 3000000, "ClientSector" : "Public"}
];

console.log(ans.answer(test));

