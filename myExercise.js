//The Fortune Teller
console.log('** The Fortune Teller **');
console.log('-------------------------');
var numberOfChildren='undefind :)';
var nameOfPartener='X';
var geographicLocation='Riyadh';
var jobTitle='Programmer';
console.log('You will be a '+jobTitle + ' in '+ geographicLocation+', and married to '+ nameOfPartener +' with '+ numberOfChildren +' kids \n \n')

//The Age Calculator
console.log('** The Age Calculator **');
console.log('-------------------------');
var currentYear=2019;
var birthYear=2000;
var age =currentYear-birthYear;
console.log('He is '+ age+'\n \n');

//The Lifetime Supply Calculator
console.log('** The Lifetime Supply Calculator **');
console.log('-------------------------');
var myAge=29;
var maxAge=80;
var amountSnackPerDay=3;
var ammountSnackAllLife=(maxAge-myAge)*amountSnackPerDay;
console.log('You will need ' + ammountSnackAllLife+' to last you until the ripe old age of '+ maxAge+'\n \n');

//The Geometrizer
console.log('** The Geometrizer **');
console.log('-------------------------');
var radius=5;
var circumference=  Math.PI * radius;
console.log('The circumference is '+circumference);

var area= Math.PI*(Math.pow(radius,2));
console.log('The area is '+area +'\n \n ');

//The Temperature Converter
console.log('** The Temperature Converter **')
console.log('-------------------------');
var celsiusTemperature= 20;
var fahrenheit=(celsiusTemperature * 1.8) + 32;
console.log(celsiusTemperature+' °C is '+ fahrenheit+' °F ') 

celsiusTemperature= ( fahrenheit- 32) * .5556; 
console.log(celsiusTemperature+' °C is '+ fahrenheit+' °F ') ;