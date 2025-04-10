let bill = 0
  let tipPorcentage = 0
  let numberOfPeople = 0
  let buttomSelected = null
 
 
     function reciveBillValue(){
     bill = document.querySelector("#bill").valueAsNumber
     
     }
 
     function receiveOfpeopleValue(){
       numberOfPeople = document.querySelector("#people").valueAsNumber
     }
     function receiveTipPercentageValue(value) {
        tipPorcentage = value / 100
        
        removeClassButtomSelected()
       document.querySelector("#custom-tip").value = ""
      buttomSelected = document.querySelector(`#button-${value}`)
     buttomSelected.classList.add("button-selected")
      }
    
      function removeClassButtomSelected() {
       if (buttomSelected !== null) {
        buttomSelected.classList.remove("button-selected")
        buttomSelected = null
      }
      }