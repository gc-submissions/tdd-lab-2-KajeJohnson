const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("return 0 starting with the amount 0", () => {
    //Arrange
    let amount = 0;

    const returnsAmount = formatCurrency(amount);

    expect(returnsAmount).toEqual(`$${"0.00"}`);
  });

  describe("formatCurrency", () => {
    test("return 1 starting with the amount $1.00", () => {
      //Arrange
      let amount = 1;

      const returnsAmount = formatCurrency(amount);

      expect(returnsAmount).toEqual(`$${"1.00"}`);
    });
  });

  describe("formatCurrency", () => {
    test("return 1.5 starting with the amount $1.50", () => {
      //Arrange
      let amount = 1.5;

      const returnsAmount = formatCurrency(amount);

      expect(returnsAmount).toEqual(`$${"1.50"}`);
    });
  });

  describe("formatCurrency", () => {
    test("return 0.01 starting with the amount $0.01", () => {
      //Arrange
      let amount = 0.01;

      const returnsAmount = formatCurrency(amount);

      expect(returnsAmount).toEqual(`$${"0.01"}`);
    });
  });

  describe("formatCurrency", () => {
    test("amount 527.6789 starting with the return being $527.68", () => {
      //Arrange
      let amount = 527.6789;

      const returnsAmount = formatCurrency(amount);

      expect(returnsAmount).toEqual(`$${"527.68"}`);
    });
  });

  describe("formatCurrency", () => {
    test("return -$1.00 starting with the amount -1", () => {
      //Arrange
      let amount = -1;

      const returnsAmount = formatCurrency(amount);

      expect(returnsAmount).toBe("-$1.00");
    });
  });
});

describe("getCoins", () => {
  test("32 cents = 1Q, 1,N, 2P", () => {
    let cents = 32;

    const countCents = getCoins(cents);

    expect(countCents).toEqual({
      quarters: 1,
      dimes: 0,
      nickles: 1,
      pennies: 2,
    });
  });

  test("10 cents = 1D", () => {
    let cents = 10;

    const countCents = getCoins(cents);

    expect(countCents).toEqual({
      quarters: 0,
      dimes: 1,
      nickles: 0,
      pennies: 0,
    });
  });

  test("27 cents = 1Q, 2P", () => {
    let cents = 27;

    const countCents = getCoins(cents);

    expect(countCents).toEqual({
      quarters: 1,
      dimes: 0,
      nickles: 0,
      pennies: 2,
    });
  });

  test("68 cents = 2Q, 1D, 1N, 3P", () => {
    let cents = 68;

    const countCents = getCoins(cents);

    expect(countCents).toEqual({
      quarters: 2,
      dimes: 1,
      nickles: 1,
      pennies: 3,
    });
  });
});
