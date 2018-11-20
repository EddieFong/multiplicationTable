const createMultiplicationTableByRange = require("../main");

it ("-1, -1 should return null string", () => {
	expect(createMultiplicationTableByRange(-1,-1)).toBe("");
});

it ("5000, 6000 should return null string", () => {
	expect(createMultiplicationTableByRange(5000,6000)).toBe("");
});

it ("10, 1 should return null string", () => {
	expect(createMultiplicationTableByRange(10,1)).toBe("");
});

it ("2,4 case", () => {
	expect(createMultiplicationTableByRange(2, 4)).toBe("2*2=4 \n2*3=6 3*3=9 \n2*4=8 3*4=12 4*4=16 \n");
});

