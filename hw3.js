//Task 1
let user = {}
alert('Personal information');
user.name = prompt('Enter your name');
user.age = prompt('Enter your age');
user.gender = '';
if(confirm("Are you female?") == true){
	user.gender = 'female';
}
else {
	user.gender = 'male';
}
console.log(user.name);
console.log(user.age);
console.log(user.gender);
//Task 2
let number = prompt('Enter your favourite number');

if(isNaN(number)){
	number = prompt('Enter your favourite NUMBER');
}
else {
	alert(number);
}
//Task 3
let a = +prompt('a?', '');
console.log(a); // string
a += a;
console.log(a); // number
switch(a){
	case (a == 0):
		alert(0);
		break;
	case (a == 1):
		alert(1)
		break;
	case (a == 2 || a == 3):
		alert('2,3');
	default:
		console.log('not 0, 1, 2 or 3');
}
//Task 4
let sum = 0;
for(let i = 0; i <= 100; i++){
	sum += i; 
}
console.log(sum);
let i = 0;
while(i < 3){
	alert( `number ${i}!` );
	i++;
}

