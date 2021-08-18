const inputs=document.querySelectorAll(".input-number");
const checkBtn=document.querySelector("#calculate-area");
const output=document.querySelector("#output");

function areaOfTriangle(base,height){
    const area=(base*height)/2;
    return area;
}

function calculateArea(){
    const getinputValues=areaOfTriangle(Number(inputs[0].value),Number(inputs[1].value));
   output.innerText="The area of the triangle is : "+getinputValues
}
checkBtn.addEventListener("click",calculateArea);