export function toFixed(number) {
  var strNumber = ''+number;
  var decimalPart = strNumber.split('.')
  if(decimalPart.length === 1) {
    return strNumber
  }

  if(decimalPart[1].length === 1) {
    return number.toFixed(2);
  } else {
    return strNumber;
  }
}
