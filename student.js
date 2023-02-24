function validateForm() {
    let returnval = true;

    let email = document.forms["MyForm"]["femail"].value;
    let password = document.forms["MyForm"]["fpassword"].value;



    if (email == "") {
        alert("**please give an email");
        returnval = false;
    }
    else if (!(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
        alert("invalid Email!!");
        returnval = false;
    }
    else if (password == "") {
        alert("**you have to give a password");
        returnval = false;
    }


    return returnval;
}
