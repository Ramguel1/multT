var n=1;
var input=document.querySelector("#numero");
input.oninput=()=>{
  n=parseInt(input.value);
  document.querySelector("#vnumero").innerHTML=n;
}
document.querySelector("#ver").onclick=()=>{
  
  var spinner=document.querySelector("#spinner");

 
  
  let table="<table class='table'>";
  for ( i = 1; i <=10; i++) {
    table +="<tr><td>"+n+"</td><td>X</td><td>"+i+"</td><td>=</td><td>"+(n*i)+"</td></tr>";
  
   spinner.innerHTML="<img src='f.gif'>"
  setTimeout(()=>{
    spinner.innerHTML="<h1></h1>"
    
    
    table +="</table>";
  tabla.innerHTML=table;
    
  },2000);
  }
  
}
document.querySelector("#borrar").onclick=()=>{
  tabla.innerHTML="";
}
