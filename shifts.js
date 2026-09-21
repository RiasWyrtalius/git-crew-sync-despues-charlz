function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  if (hours <= 8) {
    return hours * rate;
  }
  return (8 * rate) + ((hours - 8) * rate * 1.5);
}

module.exports = { isValidShift, calculatePay };
