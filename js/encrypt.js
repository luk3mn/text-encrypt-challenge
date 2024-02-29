let result = document.querySelector("#result-field")
let copyButton = document.querySelector("#btn-copy")
let textField = document.querySelector(".text__field")
let emptyField = document.querySelector("#empty-field")

// to encrypt message
document.querySelector('#encrypt-btn').addEventListener("click", () => {
    
    let message = document.querySelector("#field-message").value
    encrypt_message = []
    for (i in message) {
        encrypted = false

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
    }
    result.innerHTML = encrypt_message.toString().replace(/,/g, "")
    modalField(textField, emptyField)
})

// to decrypt message
document.querySelector('#decrypt-btn').addEventListener("click", () => {
    let message = document.querySelector("#field-message").value
    encrypt_words = message.split(" ")
    
    for (i in encrypt_words) {  
        // convert "enter" to "e"
        encrypt_words[i] = verifyToDecrypt("enter", "e", encrypt_words[i])

        // convert "ai" to "a"
        encrypt_words[i] = verifyToDecrypt("ai", "a", encrypt_words[i])
        
        // convert "imes" to "i"
        encrypt_words[i] = verifyToDecrypt("imes", "i", encrypt_words[i])
        
        // convert "ober" to "o"
        encrypt_words[i] = verifyToDecrypt("ober", "o", encrypt_words[i])
        
        // convert "ufat" to "u"
        encrypt_words[i] = verifyToDecrypt("ufat", "u", encrypt_words[i])
    }

    result.innerHTML = encrypt_words.join().replaceAll(","," ")
    modalField(textField, emptyField)
})

function verifyToDecrypt(key, value, decrypt_word) {  
    decrypt_word = decrypt_word.replaceAll(key,value); 
    return decrypt_word;
}

function modalField(fieldToShow, fieldToHide) {
    fieldToShow.style.display = "flex"
    fieldToHide.style.display = "none"
    document.querySelector("#field-message").value = ''
}
