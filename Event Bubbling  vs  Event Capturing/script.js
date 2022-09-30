let div1 = document.getElementById("one");
let div2 =  document.getElementById("two");
let div3 = document.getElementById("three");

div1.addEventListener("click", ()=>{
 console.log("Grand Parent Called")
alert("Grand Parent Called")} , {capture : true} );

div2.addEventListener("click", ()=>{
 console.log("Parent Called")
alert(" Parent Called")}, {capture : true} );

div3.addEventListener("click", ()=>{
 console.log("Child Called")
alert("Child Called")}, {capture : true} );
