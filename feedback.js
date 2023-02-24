
function validateForm() {

    let returnval = true;

    let name = document.forms["MyForm"]["fname"].value;
    let email = document.forms["MyForm"]["femail"].value;
    let password = document.forms["MyForm"]["fpassword"].value;
    let PhoneNo = document.forms["MyForm"]["fnumber"].value;
    const rating = document.getElementsByName('radAnswer');


    if (name == "") {
        alert(" **Name must be filled out");
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
    else if (PhoneNo == "" || isNaN(PhoneNo)) {
        alert(" **please enter a valid Phone no.");
        returnval = false;
    }
    else if (PhoneNo.length != 10) {
        alert("**Phone no. should be of 10 digits");
        returnval = false;
    }
    else if ((rating[0].checked == false) && (rating[1].checked == false) && (rating[2].checked == false)) {
        alert("Please choose the rating");
        returnval = false;
    }


    return returnval;
}

