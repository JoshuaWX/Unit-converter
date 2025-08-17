/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 
let meterFeet = document.getElementById("meter-feet")
let litGal = document.getElementById("lit-gal")
let kgP = document.getElementById("kg-p")
let convertInput = document.getElementById("convert-input")
let convertBtn = document.getElementById("convert-btn")
let customAlert = document.getElementById('custom-alert')

convertBtn.addEventListener("click", function(){
    if (convertInput.value === ""){
        customAlert.textContent= "Please enter a value"
        customAlert.style.background = "red"
        customAlert.style.display = 'block'
        
        setTimeout(() => {
            customAlert.style.display = 'none'
        }, 500)

    } else{
        convertToFeet()
        convertToMeter()
        convertToGallon()
        convertToLiters()
        convertToPounds()
        convertToKg()
        btnClicked()
    
    }
})

function convertToFeet(){
    let feetU = Number(convertInput.value )* 3.281
    let feet = feetU.toFixed(3)
    meterFeet.textContent = `${convertInput.value} meters = ${feet} feets | `
}
function convertToMeter(){
    let meterU = Number(convertInput.value )/ 3.281
    let meter = meterU.toFixed(3)
    meterFeet.textContent += `${convertInput.value} feets = ${meter} meters`
}
function convertToGallon(){
    let gallonU = Number(convertInput.value ) * 0.264
    let gallon = gallonU.toFixed(3)
    litGal.textContent = `${convertInput.value} liters = ${gallon} gallons | `
}
function convertToLiters(){
    let literU = Number(convertInput.value ) / 0.264
    let liter = literU.toFixed(3)
    litGal.textContent += `${convertInput.value} gallons = ${liter} liters`
}
function convertToPounds(){
    let poundU = Number(convertInput.value ) * 2.204
    let pound = poundU.toFixed(3)
    kgP.textContent = `${convertInput.value} kilograms = ${pound} pounds | `
}
function convertToKg(){
    let kgU = Number(convertInput.value ) / 2.204
    let kg = kgU.toFixed(3)
    kgP.textContent += `${convertInput.value} pounds = ${kg} kilograms`
}
function btnClicked(){
    convertInput.value = ""
    customAlert.textContent= "Converting Values..."
    customAlert.style.background = "#6943FF"
    customAlert.style.display = 'block'

    setTimeout(() => {
        customAlert.style.display = 'none'
    }, 500)
}


