const inputs = document.querySelectorAll('.inputs');
const istriangleBtn=document.querySelector('#istriangle');
const output=document.querySelector('#output');

function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles=angle1+angle2+angle3;
    console.log(angle1,angle2,angle3);
    return sumOfAngles;
}

function isTriangle(){
const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value) );
   console.log(sumOfAngles);
   if(sumOfAngles === 180)
   {
       output.innerHTML="Yay, The angles form a triangle";
   }
   else{
       output.innerHTML="Oh no, The angles don't form a triangle";
   }
}
istriangleBtn.addEventListener('click',isTriangle);

