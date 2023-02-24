/* 
----BOLI UZ VIANOCE?----

const stedryDen = dayjs("2023-12-24")
const dnes = dayjs()


if (dnes.isAfter(stedryDen)){
    alert("Bohužiaľ si už Vianoce zmeškal.")
}else{
    alert("Jupí, Vianoce nás ešte len čakajú.")
}






----KONTORLA EMAILU----

const email = prompt("Zadaj svoj email")

const isEmail = validator.isEmail(email)
const messageElement = document.querySelector('.msg')

if (isEmail) {
    messageElement.textContent = 'E-mail v pořádku'
    messageElement.classList.add('msg--valid')
} else {
    messageElement.textContent = 'Neplatný e-mail'
    messageElement.classList.add('msg--invalid')
} 




let date1 = dayjs();
let date2 = new Date("05/17/2023");

let oznam = document.querySelector(".anonie")

if (date1.isAfter(date2)){
    oznam.textContent = "ANO"
}else{
    oznam.textContent = "NIE"
}


*/





// To calculate the time difference of two dates
let Difference_In_Time = date2.getTime() - date1;

// To calculate the no. of days between two dates
let Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));

//To display the final no. of days (result)
const howManyDaysToBirthday = document.querySelector(".odpocet")

howManyDaysToBirthday.textContent = "Kubko do tvojich narodenín ostáva" + " " + Difference_In_Days + " " + "dní" 



/*

function mojeFunkce(){
    console.log("Volanie mojej funkcie.")

}

const mojeDruhaFunkce = function(){

}

const mojeTretiFunkce = () => {


}


const plochaTrojuhelniku = (sirka, vyska) => {
    return (sirka*vyska)/2
}

console.log(plochaTrojuhelniku(20, 10)) 









const zprava = document.querySelector(".msg")

const overeniDelkyHesla = (password) => {
    if (password.length > 12){
        console.log("Heslo je bezpečené.")
    }else{
        console.log("Heslo nie je bezpečné.")
        
    }

}

const overeniHesla = (password) => {
    if (password == "123456"){
        zprava.textContent = "Heslo bolo zadané správne: Možeme zobraziť skrytý obsah."
        zprava.classList.add("msg--valid")
    }else{
        zprava.textContent = "Nesprávne heslo."
        zprava.classList.add("msg--invalid")
    }
}

let zadeniOdUzivatele = prompt("Zadaj heslo:")

overeniHesla(zadeniOdUzivatele)

overeniDelkyHesla(zadeniOdUzivatele)


const pi = Math.PI
const ellipseArea = (width, height) => {
    return ((width/2)*height/2) * pi
}

console.log(ellipseArea(1, 2))






const max2 = (cislo1, cislo2) => {
    if (cislo1 > cislo2){
        console.log(cislo1)
    }else{
        console.log(cislo2)
    }
}

max2(5,9)





const isDic = (inputStr) => {
    if (inputStr.length < 11){
        return false
    }
    
    if (inputStr.length > 12){
        return false
    }
    const prefix = inputStr.slice(0, 2)
    if (prefix !== "CZ" ) {
        return false
    }
    
    const digits = inputStr.slice(2)
    if (!validator.isInt(digits)){
        return false
    }
    
    return true
    
}

isDic("CZ123456789")

*/



