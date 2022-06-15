const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions.js");

describe("calculateChange", () => {
  test("When payment is 5 and total is 6, then chenge will be 1", () => {
    const total = 5;
    const payment = 6;

    //act
    const change = calculateChange(payment, total);

    //assert
    expect(change).toBe(1);
  });
  test("When payment is 13.03 and total is 12.30, then chenge will be .73", () => {
    const total = 12.3;
    const payment = 13.03;

    //act
    const change = calculateChange(payment, total);

    //assert
    expect(change).toBeCloseTo(0.73);
    //use toBeCloseTo for decimals
  });
  test("When payment is 25 and total is 20 then chenge will be 5", () => {
    const total = 20;
    const payment = 25;

    //act
    const change = calculateChange(payment, total);

    //assert
    expect(change).toBe(5);
  });
});

describe("isSufficientPayment", () => {
  "When payment is 5 nd total is 6, expect isSufficientPayment to return true",
    () => {
      const total = 5;
      const payment = 6;

      const isSufficient = isSufficientPayment(payment, total);

      //assert
      expect(isSufficient).tobe(true);
    };
});

describe("calculateTotal", () => {
  test("calculates total with one item", () => {
    //arrange
    const items = [{ name: "ball", price: 4.99 }];

    //act
    const total = calculateTotal(items);

    //assert
    expect(total).toEqual(4.99);
  });

  test("calculates total with 3 items", () => {
    //arrange
    const items = [
      { name: "ball", price: 3.5 },
      { name: "ball", price: 12.99 },
      { name: "ball", price: 0.03 },
    ];

    //act
    const total = calculateTotal(items);

    //assert
    expect(total).toBeCloseTo(16.52);
  });

  test("calculates total and expects it to be zero", () => {
    //arrange
    const items = [];

    //act
    const total = calculateTotal(items);

    //assert
    expect(total).toBe(0);
  });

  test("calculates total with 4 items", () => {
    //arrange
    const items = [
      { name: "ball", price: 10 },
      { name: "ball", price: 12 },
      { name: "ball", price: 20 },
      { name: "ball", price: 10 },
    ];

    //act
    const total = calculateTotal(items);

    //assert
    expect(total).toBe(52);
  });
});

describe("addItem", () => {
  test("adding one item to empty array", () => {
    let itemsArray = [];
    addItem(itemsArray, "beans", 3);
    expect(itemsArray).toContainEqual({ name: "beans", price: 3 });
  });
  test("adding sugar to array with beans", () => {
    let itemsArray = [{ name: "beans", price: 3 }];
    addItem(itemsArray, "sugar", 2);
    expect(itemsArray).toContainEqual(
      { name: "beans", price: 3 },
      { name: "sugar", price: 2 }
    );
  });
  test("test with array starting with three items", () => {
    let itemsArray = [
      { name: "beans", price: 3 },
      { name: "sugar", price: 2 },
      { name: "milk", price: 1 },
    ];
    addItem(itemsArray, "cheetos", 2);
    expect(itemsArray).toContainEqual(
      { name: "beans", price: 3 },
      { name: "sugar", price: 2 },
      { name: "milk", price: 1 },
      { name: "cheeto", price: 2 }
    );
  });
});

describe("removeItem", () => {
  test("Remove first element from array of three items", () => {
    let itemsArray = [
      { name: "beans", price: 3 },
      { name: "sugar", price: 2 },
      { name: "milk", price: 1 },
    ];
    removeItem(itemsArray, 0);

    expect(itemsArray).not.toContainEqual({ name: "beans", price: 3 });
  });
  test("Remove last element from array of three items", () => {
    let itemsArray = [
      { name: "beans", price: 3 },
      { name: "sugar", price: 2 },
      { name: "milk", price: 1 },
    ];
    removeItem(itemsArray, 2);

    expect(itemsArray).not.toContainEqual({ name: "milk", price: 1 });
  });
  test("Remove middle element from array of three items", () => {
    let itemsArray = [
      { name: "beans", price: 3 },
      { name: "sugar", price: 2 },
      { name: "milk", price: 1 },
    ];
    removeItem(itemsArray, 1);

    expect(itemsArray).not.toContainEqual({ name: "sugar", price: 2 });
  });
  test("Remove only element from array of one item", () => {
    let itemsArray = [{ name: "beans", price: 3 }];
    removeItem(itemsArray, 0);

    expect(itemsArray).not.toContainEqual({ name: "beans", price: 3 });
  });
});
