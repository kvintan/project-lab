let form = document.getElementById("register-form");
let errorText = document.getElementById("error-text");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let first = document.getElementById("first-name");
    let last = document.getElementById("last-name");
    let address = document.getElementById("address");
    let email = document.getElementById("email");
    let gender = document.querySelector('input[name="gender"]:checked')
    
    let image1 = document.getElementById("image-first");
    let image2 = document.getElementById("image-last");
    let image3 = document.getElementById("image-address");
    let image4 = document.getElementById("image-email");


    let box1 = document.getElementById("change1");
    let box2 = document.getElementById("change2");
    let box3 = document.getElementById("change3");
    let box4 = document.getElementById("change4");
    let box5 = document.getElementById("change5");
    
    errorText.innerText = "";
    errorText.classList.remove("active");
    image1.classList.remove("active");
    image2.classList.remove("active");
    image3.classList.remove("active");
    image4.classList.remove("active");
    box1.classList.remove("active");
    box2.classList.remove("active");
    box3.classList.remove("active");
    box4.classList.remove("active");
    box5.classList.remove("active");
    //Macam Validasi : 
    // 1. Length V
    // 2. First Capital V
    // 3. Alphabet Only V
    // 4. Email Check V
    // 5. 

    // Check Length
    if (first.value.length < 1) { 
        errorText.innerText = "First Name must be filled.";
        errorText.classList.add("active");
        image1.classList.add("active");
        box1.classList.add("active");
        return;
    }

    // Check Capital
    else if (!isCapitalAlphabet(first.value.charAt(0))) {
        errorText.innerText = "First letter of First Name must be a capital alphabet.";
        errorText.classList.add("active");
        image1.classList.add("active");
        box1.classList.add("active");
        return;
    }
    
    // Check All Alphabet
    else if (!isAlphabetOnly(first.value)) {
        errorText.innerText = "First Name must contain only alphabets.";
        errorText.classList.add("active");
        image1.classList.add("active");
        box1.classList.add("active");
        return;
    }

    // Check length
    else if(last.value.length < 1)
    {
        errorText.innerText = "Last Name must be filled.";
        errorText.classList.add("active");
        image2.classList.add("active");
        box2.classList.add("active");
        return;
    }

    // Check Capital
    else if (!isCapitalAlphabet(last.value.charAt(0))) {
        errorText.innerText = "First letter of Last Name must be a capital alphabet.";
        errorText.classList.add("active");
        image2.classList.add("active");
        box2.classList.add("active");
        return;
    }
    
    // Check All Alphabet
    else if (!isAlphabetOnly(last.value)) {
        errorText.innerText = "Last Name must contain only alphabets.";
        errorText.classList.add("active");
        image2.classList.add("active");
        box2.classList.add("active");
        return;
    }

    // check radio
    else if (!gender) {
        errorText.innerText = "Gender must be selected.";
        errorText.classList.add("active");
        box3.classList.add("active");
        return;
    }

    // check Length
    else if(address.value.length<1)
    {
        errorText.innerText = "Address must be filled.";
        errorText.classList.add("active");
        image3.classList.add("active");
        box4.classList.add("active");
        return;
    }
    else if (!isAlphanumericWithSpaces(address.value) || !isAlphabet(address.value.charAt(0))) {
        errorText.innerText = "Address must contain only alphanumeric characters and spaces or '.' .";
        errorText.classList.add("active");
        image3.classList.add("active");
        box4.classList.add("active");
        return;
    }
    


    else if (email.value.length < 1) {
        errorText.innerText = "Email must be filled.";
        errorText.classList.add("active");
        image4.classList.add("active");
        box5.classList.add("active");
        return;
    }
    
    else if (!email.value.endsWith("@zendragon.ac.id")) {
        errorText.innerText = "Email must end with '@zendragon.ac.id'.";
        errorText.classList.add("active");
        image4.classList.add("active");
        box5.classList.add("active");
        return;
    }

    else{
        alert("Register Complete");
        window.open("../homepage/index.html");
    }
    
});

function isCapitalAlphabet(char) {
    return char >= 'A' && char <= 'Z';
}

// Function to check if a string contains only alphabets
function isAlphabetOnly(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z')) {
            return false;
        }
    }
    return true;
}


function isAlphabet(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function isNumber(char) {
    return char >= '0' && char <= '9';
}

function isAlphanumericWithSpaces(str) {
    for (let char of str) {
        if (!(isAlphabet(char) || isNumber(char) || char === ' ' || char ==='.')) {
            return false;
        }
    }
    return true;
}