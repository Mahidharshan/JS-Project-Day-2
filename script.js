function add(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a+b;
    document.getElementById("button-1").innerHTML="Addition: "+c
}
function sub(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a-b;
    document.getElementById("button-2").innerHTML="Subtraction: "+c
}
function mul(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a*b;
    document.getElementById("button-3").innerHTML="Multiplition: "+c
}
function div(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a/b;
    document.getElementById("button-4").innerHTML="Divition: "+c
}
function mod(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a%b;
    document.getElementById("button-5").innerHTML="Module: "+c
}
function Sq(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    let c=a*a;
    let d=b*b;
    document.getElementById("button-6").innerHTML="Square of a is: "+c+ ", b is: "+ d;
    //document.getElementById("button-6").innerHTML="Square of b: "+d;
}