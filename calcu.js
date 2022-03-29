function age(){
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
// console.log(y1)
var date = new Date(); 
var d2 = date.getDate();
var m2 = 1 + date.getMonth();
var y2 = date.getFullYear()
var month =[31,28,31,30,31,30,31,30,31,30,31,30] 

if(d1>d2){
    d2 = d2 + month[m2-1];
    m2 = m2-1;
}
if(m1>m2){
m2 = m2 + 12;
y2=  y2-1

}
let d = d2 - d1;
let m = m2 - m1;
let y = y2 - y1;


document.getElementById("age").innerHTML= "Your age is " + y + " years "+ m + " month "+ d +" days "
}