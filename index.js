// Home Work 1
var massTom = 55;
var heightTom = 5.02;
var massJerry = 47;
var heightJerry = 6.17;
var BMI_Tom = massTom / (heightTom*heightTom);
console.log(BMI_Tom);
var BMI_Jerry = massJerry / (heightJerry*heightJerry);
console.log(BMI_Jerry);
if (BMI_Tom > BMI_Jerry) {
  console.log('Is Tom\'s BMI higher than Jerry\'s ? true');
}else{
  console.log('Error')
}

// Home Work 2
var exam1 = Double;
var exam2 = Double;
var final = Double;
var avg = ((exam1+exam2+final*2)/4);
if (avg>=90){
  console.log('Grade A');
}else if(avg>=80 && avg<90){
  console.log('Grade B');
}else if (avg>=70 && avg<80){
  console.log('Grade C');
}else if (avg>=60 && avg<70){
  console.log('Grade D');
}else if (avg>= 50 && avg<60){
  console.log('Grade E');
}else{
  console.log('Grade F');
}
exam1 = prompt('Enter exam1');
exam2 = prompt('Enter exam2');
final = prompt('Enter Final');
