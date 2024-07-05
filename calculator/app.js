let first ='';
let second ='';
let znak ='';
let equal = false;

const numbers = ['0','1','2','3','4','5','6','7','8','9','.'];
const operations = ['-','+','/','*','^','√']

const display_calc = document.querySelector('.calculator-display p');
const otvet = document.querySelector('.otvet p');
const primer = document.querySelector('.primer p');

function cleaner (){
    first='';
    second = '';
    reshenie = 0;
    znak= '' ;
    equal = true;
    display_calc.textContent = 0;
    primer.textContent = '';
}


document.querySelector('.clear').onclick = cleaner;

document.querySelector('.calculator_buttons').onclick = (event)=>{
    display_calc.textContent ='';
    const chet = event.target.textContent;

    if (numbers.includes(chet)){
        if (second==='' && znak === ''){
            if (chet == '.' && first[first.length - 1] !== '.') {
                first==chet
                primer.textContent = '';
             }
        
        first += chet;
        console.log(first,znak,second);
        display_calc.textContent = first;
        primer.textContent = '';
        }

        else if (first !=='' && second !=='' &&  equal ){
            second = chet;
            equal = false;
            display_calc.textContent = second;
        }

        else{
            second += chet;
            display_calc.textContent= second;
        }
        console.table(first,znak,second);
        return
    } 

    if (operations.includes(chet)){
        znak = chet;
        display_calc.textContent = znak;
        //console.log(first,znak,second);
        return
    }
}


   function chitalka () {

        if (second ==='') 
        {second = first;}
        switch(znak){
            case '+':
                reshenie =(+first) + (+ second);
                break;
            case '-':
                reshenie = first - second;
                break;
            case '*':
                reshenie = first * second;
                break;
            case '/':
                if (+second === 0){
                    otvet.textContent = "нельзя делить на 0";
                    first = '';
                    second = '';
                    znak = '';
                    return
                }
                reshenie = first / second;
                break;
            case '^':
                reshenie = Math.pow(first,second);
                break;
            case '√':
                reshenie = Math.sqrt(first)
                break;

        }
        equal = true;
        otvet1 = String(reshenie)
        console.table(otvet1);
        primer.textContent = String(first) + znak + String(second)
        otvet.textContent =  'ваш последний ответ:' + String(otvet1);
        
       
    }

    document.querySelector('.ravno').onclick = chitalka;
