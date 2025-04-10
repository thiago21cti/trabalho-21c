let bill = 0
  let tipPorcentage = 0
  let numberOfPeople = 0
  let buttonSelected = null
 
 
     function reciveBillValue(){
     bill = document.querySelector("#bill").valueAsNumber
     
     }
 
     function receiveOfpeopleValue(){
       numberOfPeople = document.querySelector("#people").valueAsNumber
     }
     function receiveTipPercentageValue(value) {
        tipPorcentage = value / 100
        buttonSelected = document.querySelector(`#button-${value}`)
        buttonSelected.classList.add("button-selected")
        }