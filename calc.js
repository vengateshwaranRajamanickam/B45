let tarea=document.createElement("textarea");
tarea.className="tareastyle col-lg-12 col-md-12 col-sd-12";
//tarea.addEventListener("input",tarea());
document.body.append(tarea);

let buttonclear=document.createElement("button");
buttonclear.innerHTML="C";
buttonclear.className="clear btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(buttonclear);

let buttonback=document.createElement("button");
buttonback.innerHTML="<-";
buttonback.className="delete btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(buttonback);

let button1=document.createElement("button");
button1.className="number btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
button1.innerText="1";
document.body.append(button1);

let button2=document.createElement("button");
button2.innerText="2";
button2.className="number btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button2);

let button3=document.createElement("button");
button3.innerText="3";
button3.className="number btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button3);

let button4=document.createElement("button");
button4.innerText="4";
button4.className="number btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button4);

let button5=document.createElement("button");
button5.innerText="5";
button5.className="number btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button5);

let button6=document.createElement("button");
button6.innerText="6";
button6.className="number btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button6);

let button7=document.createElement("button");
button7.innerText="7";
button7.className="number btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button7);

let button8=document.createElement("button");
button8.innerText="8";
button8.className="number btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button8);

let button9=document.createElement("button");
button9.innerText="9";
button9.className="number btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button9);

let button10=document.createElement("button");
button10.innerText="10";
button10.className="number btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button10);

let button11=document.createElement("button");
button11.innerText="+";
button11.className="function btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button11);

let button12=document.createElement("button");
button12.innerText="-";
button12.className="function btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button12);

let button13=document.createElement("button");
button13.innerText="*";
button13.className="function btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button13);

let button14=document.createElement("button");
button14.innerText="/";
button14.className="function btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button14);

let button15=document.createElement("button");
button15.innerText="0";
button15.className="number btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button15);

let button16=document.createElement("button");
button16.innerText="00";
button16.className="number btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(button16);

let buttondot=document.createElement("button");
buttondot.innerText=".";
buttondot.className="extra btn btn-secondary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(buttondot);

let buttonout=document.createElement("button");
buttonout.innerText="=";
buttonout.className="submit btn btn-primary btn-lg text-center btn btn-light col-lg-2 col-md-2 col-sd-4";
document.body.append(buttonout);

// clear(){
//     this.currentOperand = '';
//     this.previousOperand = '';
//     this.operation = undefined;
//   }

//   const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

//   number.forEach(button => {
//     button.addEventListener('click', () => {
//       calculator.appendNumber(button.innerText);
//       calculator.updateDisplay();
//     })
//   })

//   appendNumber(number){
//     if (number === '.' && this.currentOperand.includes('.')) return
//     this.currentOperand = this.currentOperand.toString() + number.toString()
//   }

//   operationButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       calculator.chooseOperation(button.innerText)
//       calculator.updateDisplay()
//     })
//   })
  
//   chooseOperation(operation){
//     if (this.currentOperand === '') return
//     if (this.previousOperand !== '') {
//       this.compute()
//     }
//     this.operation = operation
//     this.previousOperand = this.currentOperand
//     this.currentOperand = ''
// }
// compute() {
//     let computation
//     const prev = parseFloat(this.previousOperand)
//     const current = parseFloat(this.currentOperand)
//     if (isNaN(prev) || isNaN(current)) return
//     switch (this.operation) {
//       case '+':
//         computation = prev + current
//         break
//       case '-':
//         computation = prev - current
//         break
//       case '*':
//         computation = prev * current
//         break
//       case '÷':
//         computation = prev / current
//         break
//       default:
//         return
//     }
//     this.currentOperand = computation
//     this.operation = undefined
//     this.previousOperand = ''
//   }

//   Clear.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay()
//   })

//   delete() {
//     this.currentOperand = this.currentOperand.toString().slice(0, -1)
//   }

//   deleteButton.addEventListener('click', button => {
//     calculator.delete()
//     calculator.updateDisplay()
//   })




