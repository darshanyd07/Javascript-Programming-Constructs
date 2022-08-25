
function inchesToFeets(inches) {
  return (feets = inches / 12);
}

console.log(inches + " inches in feets: " + inchesToFeets(42));


function areaOfRectangle(length, width) {
  return (area = length * width);
}

function areaInMeters(areaInFeetSq) {
  return (areaInMeters = areaInFeetSq * 0.3048);
}

console.log(
  "Area of Rectangle in Meters: " + areaInMeters(areaOfRectangle(60, 40))
);