function validateForm() {

    let returnval = true;

    let name = document.forms["MyForm"]["fname"].value;
    let uni = document.forms["MyForm"]["funiversity"].value;
    let dep = document.forms["MyForm"]["fdepartment"].value;
    let email = document.forms["MyForm"]["femail"].value;
    let password = document.forms["MyForm"]["fpassword"].value;
    let contactno = document.forms["MyForm"]["fcontactno"].value;


    if (name == "") {
        alert(" **Name must be filled out");
        returnval = false;
    }
    else if (uni == "") {
        alert(" **Please fill the university");
        returnval = false;
    }
    else if (dep == "") {
        alert(" **Department is required");
        returnval = false;
    }
    else if (email == "") {
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
    else if (contactno == "" || isNaN(contactno)) {
        alert(" **please enter a valid contact no.");
        returnval = false;
    }
    else if (contactno.length != 10) {
        alert("**Contact no. should be of 10 numbers");
        returnval = false;
    }


    return returnval;
}