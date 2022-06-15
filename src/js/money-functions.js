function formatCurrency(amount) {
  if (amount >= 0) {
    return "$" + amount.toFixed(2);
  } else {
    return "-$" + -amount.toFixed(2);
  }
}

function getCoins(cents) {
  arr = ["quarter:", "dime:", "nickle:", "pennies:"];

  let quarter = Math.floor(cents / 25);
  let remainder = cents % 25;
  let dime = Math.floor(remainder / 10);
  remainder = remainder % 10;
  let nickle = Math.floor(remainder / 5);
  remainder = remainder % 5;
  let penny = Math.floor(remainder / 1);
  remainder = remainder % 1;

  return {
    quarters: quarter,
    dimes: dime,
    nickles: nickle,
    pennies: penny,
  };
}

module.exports = { formatCurrency, getCoins };
