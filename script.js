function Set() {
    // inputs given by the user

    let name = document.querySelector('#name-field').value
    let email = document.querySelector('#email-field').value
    let gender
    let message = document.querySelector('#message-field').value

    // assigining the gender by given by the user

    if (document.querySelector('#male').checked) {
        gender = 'male'
    }
    else if (document.querySelector('#female').checked) {
        gender = 'female'
    }
    else if (document.querySelector('#other').checked) {
        gender = 'other'
    }
    else {
        gender = null
    }

    // Checking if values given are correct

    // for name of the user
    if (name != "" && name.search(" ") != -1 && !name.endsWith(" ")) {
        let result
        for (let i = 65; i <= 122; i++) {
            if (!(i > 90 && i < 97)) {
                result = name.search(String.fromCharCode(i))
                if (result != -1) {
                    break
                }
            }
        }

        if (result === -1) {
            alert('Incorrect Name')
            return
        }
    } else {
        alert('Incorrect Name')
        return
    }

    // for email of the user
    if (email.search("@") === -1 || email.search(".") === -1 || email.endsWith("@") || email.endsWith(".")) {
        alert("Invaild Email!")
        return
    }


    alert("Your info is: " + "\n\n" + "Name: " + name + "\n" + "Email: " + email + "\n" + "Gender: " + gender + "\n" + "Your message: " + message)
}
