let result=document.createElement("textarea");
result.className="result col-lg-12 col-md-12 col-sd-12";
document.body.append(result);

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


//   Clear.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay()
//   })

//   delete(){
//     this.currentOperand = this.currentOperand.toString().slice(0, -1)
//   }

//   deleteButton.addEventListener('click', button => {
//     calculator.delete()
//     calculator.updateDisplay()
//   })

// updateDisplay() {
//     if (this.operation != null) {
//       this.previousOperandTextElement.innerText =
//         `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
 
//         updateDisplay() {
//             this.currentOperandTextElement.innerText =
//               this.getDisplayNumber(this.currentOperand)
//             if (this.operation != null) {
//               this.previousOperandTextElement.innerText =
//                 `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//             } else {
//               this.previousOperandTextElement.innerText = ''
//             }
//           }
//         }

//         getDisplayNumber(number) {
//             const floatNumber = parseFloat(number)
//             if (isNaN(floatNumber)) return ''
//             return floatNumber.toLocaleString('en')
//         }
//     }
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

// getDisplayNumber(number) {
//     const stringNumber = number.toString()
//     const integerDigits = parseFloat(stringNumber.split('.')[0])
//     const decimalDigits = stringNumber.split('.')[1]
//     let integerDisplay
//     if (isNaN(integerDigits)) {
//       integerDisplay = ''
//     } else {
//       integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
//     }
//     if (decimalDigits != null) {
//       return `${integerDisplay}.${decimalDigits}`
//     } else {
//       return integerDisplay
//     }
//   }
   
//   getDisplayNumber(number) {
//     if (decimalDigits != null) {
//           return `${integerDisplay}.${decimalDigits}`
//         } else {
//           return integerDisplay
//         }
//       }

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





// equalsButton.addEventListener('click', button => {
//     calculator.compute()
//     calculator.updateDisplay()
//   })

function calculate(value) {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
      res.value = "Can't divide 0 with 0";
      setTimeout(() => {
        res.value = "";
      }, 1300);
    } else {
      res.value = calculatedValue;
    }
   // tarea.innerHTML=res.value;
   //console.log(res.value);
  }
  //Displays entered value on screen.
  let res={};
  function liveScreen(enteredValue) {
    // if (!res.value) {
    //   res.value = "";
    // }
    res.value += enteredValue;
  }
  
  //adding event handler on the document to handle keyboard inputs
  document.addEventListener("keydown", keyboardInputHandler);
  
  //function to handle keyboard inputs
  function keyboardInputHandler(e) {
    // to fix the default behavior of browser,
    // enter and backspace were causing undesired behavior when some key was already in focus.
    e.preventDefault();
    //grabbing the liveScreen
    //numbers
    if (e.key === "0") {
      res.value += "0";
    } else if (e.key === "1") {
      res.value += "1";
    } else if (e.key === "2") {
      res.value += "2";
    } else if (e.key === "3") {
      res.value += "3";
    } else if (e.key === "4") {
      res.value += "4";
    } else if (e.key === "5") {
      res.value += "5";
    } else if (e.key === "6") {
      res.value += "6";
    } else if (e.key === "7") {
      res.value += "7";
    } else if (e.key === "7") {
      res.value += "7";
    } else if (e.key === "8") {
      res.value += "8";
    } else if (e.key === "9") {
      res.value += "9";
    }
  
    //operators
    if (e.key === "+") {
      res.value += "+";
    } else if (e.key === "-") {
      res.value += "-";
    } else if (e.key === "*") {
      res.value += "*";
    } else if (e.key === "/") {
      res.value += "/";
    }
  
    //decimal key
    if (e.key === ".") {
      res.value += ".";
    }
  
    //press enter to see result
    if (e.key === "Enter") {
        calculate(result.value);
      }

      if (e.key === "C") {
        res.value = "";
      }
  
    //backspace for removing the last input
    if (e.key === "Backspace") {
      const resultInput = res.value;
      //remove the last element in the string
      res.value = resultInput.substring(0, res.value.length - 1);
    }
  }

  buttonclear.addEventListener("onclick",liveScreen("C"));
  buttonback.addEventListener("onclick",liveScreen("Backspace"));
  button1.addEventListener("onclick",liveScreen("1"));
  button2.addEventListener("onclick",liveScreen("2"));
  button3.addEventListener("onclick",liveScreen("3"));
  button4.addEventListener("onclick",liveScreen("4"));
  button5.addEventListener("onclick",liveScreen("5"));
  button6.addEventListener("onclick",liveScreen("6"));
  button7.addEventListener("onclick",liveScreen("7"));
  button8.addEventListener("onclick",liveScreen("8"));
  button9.addEventListener("onclick",liveScreen("9"));
  button10.addEventListener("onclick",liveScreen("10"));
  button11.addEventListener("onclick",liveScreen('+'));
  button12.addEventListener("onclick",liveScreen('-'));
  button13.addEventListener("onclick",liveScreen('*'));
  button14.addEventListener("onclick",liveScreen('/'));
  button15.addEventListener("onclick",liveScreen("0"));
  button16.addEventListener("onclick",liveScreen("00"));
  buttondot.addEventListener("onclick",liveScreen('.'));
  buttonout.addEventListener("onclick",calculate(result.value));
  

