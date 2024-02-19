let message = document.querySelector("#field-message").value

// to encrypt message
document.querySelector('#encrypt-btn').addEventListener("click", () => {

    encrypt_message = []
    encrypted = false
    for (i in message) {
        // to encrypt "e" to "enter"
        if (message[i] == "e") {
            encrypt_message.push("enter")
            encrypted = true
        }

        // to encrypt "i" to "imes"
        if (message[i] == "i") {
            encrypt_message.push("imes")
            encrypted = true
        }
        
        // to encrypt "a" to "ai"
        if (message[i] == "a") {
            encrypt_message.push("ai")
            encrypted = true
        }

        // to encrypt "o"
        if (message[i] == "o") {
            encrypt_message.push("ober")
            encrypted = true
        }

        // to encrypt "u"
        if (message[i] == "u") {
            encrypt_message.push("ufat")
            encrypted = true
        }
        
        if (!encrypted) {
            encrypt_message.push(message[i])
        }
        encrypted = false
    }
    alert(encrypt_message.toString().replace(/,/g, ""))
})

// to decrypt message
document.querySelector('#decrypt-btn').addEventListener("click", () => {

})