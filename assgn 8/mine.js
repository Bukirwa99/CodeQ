var name =window.prompt("Please enter your name")
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
function Name_age(name,age){
    for (var counter = 1; counter <= 5; counter++) 
{
    console.log ("hi"+name+age)
}
}
function inn(age){
    console.log("Age is"+age)
}
function outt(age,func){
    func(age)
}
outt(22,inn);
()=> {
    var x="hello"
    var y="World"
var z=x+y
console.log(z)
}
for(var i=0;i<19;i++){
    console.log("i love uganda")
}
