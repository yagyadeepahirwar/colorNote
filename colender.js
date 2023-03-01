let fulldate= new Date();

var monthsName=["January","Febuary","Martch","Aprial","May","June","July","Auguast","September","October","Nobember","Decsember"];
let date= fulldate.getDate();
let month= fulldate.getMonth();
let year= fulldate.getFullYear();
let day= fulldate.getDay();
let temp=month;
console.log(temp);
console.log(date,month,year,day);
// calculate the number of days in month
var numberofday;
if(year%4==0){
   if(month==1){
    numberofday=29;
   }
}else{
       if(temp==1){
            numberofday=28;
        }
        else if(temp%2==0){
            numberofday=31;
        }
        else if(temp%2==1){
            numberofday=30;
        }
}
let colenderbox= document.querySelectorAll(".colenderbox h3");
console.log(colenderbox);
// print the month days on screen
for(let j=1;j<=numberofday;j++)
{
    colenderbox[j+day].innerHTML=j;
    colenderbox[j+day].classList.add("cursor");
    colenderbox.[j+day].addEventListener("click",function(){
        
    })
    if(j == date)
    {
        colenderbox[j+day].classList.add("date");
    }
}
