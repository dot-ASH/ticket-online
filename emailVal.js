


function regValid() {
    var form = document.getElementById("my-form");
    var name    = form.Uname;
    var email   = form.Umail;
    var phone   = form.Uphn;
    var address = form.Uadd;
    if (name.value === "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (email.value === "" || validateEmail(email.value) === false) {

        window.alert("Please enter a valid e-mail address.");
        email.value="";
        email.placeholder="eg. xyz@gmail.com";
        email.focus();
        return false;
    }

    if (phone.value === "" || validPhn(phone.value) === false) {
        window.alert(
            "Please enter a valid phone number.");
        phone.value="";
        phone.placeholder="eg. +8801963652150";
        phone.focus();
        return false;
    }

    if (address.value ==="") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }
    document.querySelector(".bookTicket").style.color = "#3c7553";
    sendEmail(name.value, email.value);
    return true;
}
function validateEmail(email)
{
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

function validPhn(phone)
{
    var regex = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
    return regex.test(phone);
}

function sendEmail(name, email) {

    Email.send({
        Host : "smtp.gmail.com",
        Username : "19202103403@cse.bubt.edu.bd",
        Password : "ntgwuuouwihgqvxj",
        To : email,
        From : "19202103403@cse.bubt.edu.bd",
        Subject : `${name}, your Registration was successful!`,
        Body : "Thank you for your participation. You are more than welcome!"
    }).then(
        message => alert("Check your Inbox!")
    );
}

