const sideInput=document.querySelectorAll(".side-input");
const calculateBtn=document.querySelector("#calculate-hypotenuse");
const output=document.querySelector("#output");

function calculateSumOfSquare(a,b){
    const sum=a*a + b*b;
    return sum;
}

function calculateHypotenuse()
{  const sumOfSquares=calculateSumOfSquare(Number(sideInput[0].value),Number(sideInput[1].value));
    const squareRoot=Math.sqrt(sumOfSquares);
    output.innerText="The length of hypotenuse is: "+squareRoot;
}

calculateBtn.addEventListener("click",calculateHypotenuse);