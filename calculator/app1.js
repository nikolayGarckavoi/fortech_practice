let first ='';
let second ='';
let znak ='';
let equal = false;

const numbers = ['0','1','2','3','4','5','6','7','8','9','.'];
const operations = ['-','+','/','*','^','√','=']

const display_calc = document.querySelector('.calculator-display p');

function cleaner (){
    first='';
    second = '';
    znak= '' ;
    equal = true;
    display_calc.textContent = 0;
}


document.querySelector('.clear').onclick = cleaner;

document.querySelector('.calculator_buttons').onclick = (event)=>{
    display_calc.textContent ='';
    const chet = event.target.textContent;

    if (numbers.includes(chet)){
        if (second==='' && znak === ''){
        if ( chet=='.' && first.includes('.')){
          first+='';
          console.log(first,second,znak);
          display_calc.textContent = first; }
        
        first += chet;
        console.log(first,znak,second);
        display_calc.textContent = first;
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
        console.log(first,znak,second);
        return
    }
}


   function chitalka ()
         {
        if (second ==='') 
        {second = first;}
        switch(znak){
            case '+':
                first =(+first) + (+ second);
                break;
            case '-':
                first = first - second;
                break;
            case '*':
                first = first * second;
                break;
            case '/':
                if (second === '0'){
                    display_calc.textContent = "нельзя делить на 0";
                    first = '';
                    second = '';
                    znak = '';
                }
                first = first / second;
                break;
            case '^':
                first = Math.pow(first,second);
                break;
            case '√':
                first = Math.sqrt(first)
                break;

        }
        equal = true;
        console.table(first);
        display_calc.textContent =  toString(first);
        
       
    }

    document.querySelector('.ravno').onclick = chitalka;
