

 
function calculate() {
    var male=document.getElementById('male');
    var female=document.getElementById('female');
    var age=document.getElementById('age').value;
    var height=document.getElementById('height').value;
    var weight=document.getElementById('weight').value;
      

    if(age===''||height=== ""|| weight===""){
        alert("please enter value for all field. ");
        return;
    }

    var bmi=weight/((height/100)*(height/100));
    var bmiResult="your BMI is"+bmi.toFixed(2)+".<br>";
            
    if (bmi<18.5){
        bmiResult+="you are underweight.";
    }else if(bmi>=18.5 && bmi<24.9){
        bmiResult+="you are within a healthy weight range";
    }else if(bmi>=24.9 && bmi<29.9){
        bmiResult+="you are overweight";
    }else{
        bmiResult+="you are obese";
    }

    
    document.getElementById('result').innerHTML=bmiResult;
} 
