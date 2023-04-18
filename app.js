const input1 = document.getElementById('input-day');
const input2 = document.getElementById('input-month');
const input3 = document.getElementById('input-year');
const img = document.getElementById('img');
const p = document.getElementById('p');
const ipt1 = document.getElementById('ipt1');
const ipt2 = document.getElementById('ipt2');
const ipt3 = document.getElementById('ipt3');
const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');
var x; var y; var count1 = 0;var count2 = 0;


    input1.style.color = "red";
  
function EmptyData() {
    input1.style.backgroundColor = "blue";
    if(input1.value === 'DD' && input2.value === 'MM' && input3.value === 'YYYY')
    p.style.color = "hsl(0, 100%, 67%)";
    input1.style.border = "0.5px solid hsl(0, 100%, 67%)";
    input2.style.border = "0.5px solid hsl(0, 100%, 67%)";
    input3.style.border = "0.5px solid hsl(0, 100%, 67%)";
    ipt1.textContent = 'This field is required';
    ipt2.textContent = 'This field is required';
    ipt3.textContent = 'This field is required';
}
img.addEventListener('click', EmptyData); 
function CorrectData() {
    if (Number(input1.value) <= 30 && Number(input2.value) <= 12 && Number(input3.value) <= 2023) {
        y= 18 - Number(input1.value);
        if (y >= 0) {
            day.textContent =  18 - Number(input1.value);
        } else {
            day.textContent = 18 + 30 - Number(input1.value);
            count1 = 1;
        }
        if (count1 === 0) {
            x= 4 - Number(input2.value);
            if (x >= 0) {
                month.textContent = 4 - Number(input2.value);
            } else {
                month.textContent = 4 + 12 - Number(input2.value);
                count2 = 1;
            }
        } else {
            x= 3 - Number(input2.value);
            if (x >= 0) {
                month.textContent = 3 - Number(input2.value);
            } else {
                month.textContent = 3 + 12 - Number(input2.value);
                count2 = 1;
            }
        }
        if (count2 === 0) {
            year.textContent = 2023 - Number(input3.value);
        } else {
            year.textContent = 2022 - Number(input3.value);
        }
        p.style.color = "hsl(0, 1%, 44%);";
        input1.style.border = "0.5px solid  hsl(0, 0%, 86%)";
        input2.style.border = "0.5px solid  hsl(0, 0%, 86%)";
        input3.style.border = "0.5px solid  hsl(0, 0%, 86%)";
        ipt1.textContent = '';
        ipt2.textContent = '';
        ipt3.textContent = '';
    }else{
        if(Number(input1.value) <= 30){ 
            p.style.color = "hsl(0, 100%, 67%)";
            input1.style.border = "0.5px solid hsl(0, 100%, 67%)";
            input2.style.border = "0.5px solid hsl(0, 100%, 67%)";
            input3.style.border = "0.5px solid hsl(0, 100%, 67%)";
            ipt1.textContent = '';
        }
        if(Number(input2.value) <= 12){
            p.style.color = "hsl(0, 100%, 67%)";
            input1.style.border = "0.5px solid hsl(0, 100%, 67%)";
            input2.style.border = "0.5px solid hsl(0, 100%, 67%)";
            input3.style.border = "0.5px solid hsl(0, 100%, 67%)";
            ipt2.textContent = '';
            }
        if(Number(input3.value) <= 2023){
            p.style.color = "hsl(0, 100%, 67%)";
            input1.style.border = "0.5px solid hsl(0, 100%, 67%)";
            input2.style.border = "0.5px solid hsl(0, 100%, 67%)";
            input3.style.border = "0.5px solid hsl(0, 100%, 67%)";
            ipt3.textContent = '';
        }
        day.textContent = '--';
        month.textContent = '--';
        year.textContent = '--';
    }
}
img.addEventListener('click', CorrectData);
function WrongData() {
    if(Number(input1.value) > 30 ){ 
    p.style.color = "hsl(0, 100%, 67%)";
    input1.style.border = "0.5px solid hsl(0, 100%, 67%)";
    input2.style.border = "0.5px solid hsl(0, 100%, 67%)";
    input3.style.border = "0.5px solid hsl(0, 100%, 67%)";
    ipt1.textContent = 'Must be a valid day';
    }
    if (Number(input2.value) > 12) {
        p.style.color = "hsl(0, 100%, 67%)";
        input1.style.border = "0.5px solid hsl(0, 100%, 67%)";
        input2.style.border = "0.5px solid hsl(0, 100%, 67%)";
        input3.style.border = "0.5px solid hsl(0, 100%, 67%)";
        ipt2.textContent = 'Must be a valid month';
    }
    if (Number(input3.value) > 2023) {
        p.style.color = "hsl(0, 100%, 67%)";
        input1.style.border = "0.5px solid hsl(0, 100%, 67%)";
        input2.style.border = "0.5px solid hsl(0, 100%, 67%)";
        input3.style.border = "0.5px solid hsl(0, 100%, 67%)";
        ipt3.textContent = 'Must be a valid past';
    }
    
}
img.addEventListener('click', WrongData);