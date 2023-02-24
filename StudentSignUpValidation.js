
function validateForm() {
    let returnval = true;

    let name = document.forms["MyForm"]["fname"].value;
    let uni = document.forms["MyForm"]["funiversity"].value;
    let branch = document.forms["MyForm"]["fbranch"].value;
    let regno = document.forms["MyForm"]["fregno"].value;
    let dob = document.forms["MyForm"]["fdob"].value;
    let email = document.forms["MyForm"]["femail"].value;
    let password = document.forms["MyForm"]["fpassword"].value;
    let contactno = document.forms["MyForm"]["fcontactno"].value;
    const gender = document.getElementsByName('radAnswer');


    if (name == "") {
        alert(" **Name must be filled out");
        returnval = false;
    }
    else if (uni == "") {
        alert(" **Please fill the university");
        returnval = false;
    }
    else if (branch == "") {
        alert(" **Please mention your Branch");
        returnval = false;
    }
    else if (isNaN(regno)) {
        console.log(isNaN(regno));
        alert(" **please enter a valid registration number");
        returnval = false;
    }
    else if (regno == "") {
        alert("Please enter the registration number");
        returnval = false;
    }
    else if (dob == "") {
        alert("**please enter date of birth");
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
    else if ((gender[0].checked == false) && (gender[1].checked == false) && (gender[2].checked == false)) {
        alert("Please select your gender");
        returnval = false;
    }


    return returnval;
}

