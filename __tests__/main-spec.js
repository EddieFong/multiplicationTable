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
	expect(createMultiplicationTableByRange(2, 4)).toBe("2*2=4  \n2*3=6  3*3=9  \n2*4=8  3*4=12 4*4=16 \n");
});

it ("2,5 case", () => {
	expect(createMultiplicationTableByRange(2, 5)).toBe("2*2=4  \n2*3=6  3*3=9  \n2*4=8  3*4=12 4*4=16 \n2*5=10 3*5=15 4*5=20 5*5=25 \n");
});

it ("9,10 case", () => {
	expect(createMultiplicationTableByRange(8, 10)).toBe("8*8=64   \n8*9=72   9*9=81   \n8*10=80  9*10=90  10*10=100 \n");
});