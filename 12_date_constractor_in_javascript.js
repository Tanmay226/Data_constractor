let d=new Date();
console.log(d);//2022-05-26T02:23:04.111Z

console.log(d.getDate());//26
console.log(d.getMonth());//4
console.log(d.getFullYear());//2022

console.log(d.getDate()+" "+d.getMonth()+1+" "+d.getFullYear());//26 41 2022

console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

console.log(d.getHours()+" "+d.getMinutes()+" "+d.getSeconds());//8 11 8


console.log("showTime")

function showtime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  let time = h + ":" + m + ":" + s;
  // document.getElementById("dc").innerHTML = time;
  console.log(time);
  console.log(date);

  setTimeout(showtime, 1000);


}
showtime();