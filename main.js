var date= new Date()
var d = date.getDate()
var m = date.getMonth()+1
if(d==3 && m==11){
  console.log("Birthday today")
}else{
  
  document.querySelector("body").innerHTML = "<center>Today is not birthday. wait more </center>"
}


new TypeIt(".box", {
  strings: ["Qzm", "Happy Birthday..","Many many happy returns of the day. May your all dreams come true. May the best day you passed be the worst in future.","Keep smiling in every situation.. If I started to praise now then you may think I'm just flirting..","So...","This was a small wish from your just friend. You may get more warm wishes from your close friends..","Your,,,","Characterless, lesbian, selfish, womanizer, guilty,playboy best friend","Sorry..","Just friend.. :)"],
  speed: 90,
  waitUntilVisible: true,
}).go();


