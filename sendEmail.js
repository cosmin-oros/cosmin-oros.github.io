function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "username",
        Password : "password",
        To : 'oroscosmin09@gmail.com',
        From : document.getElementById("email").value, 
        Subject : "Contact form enquiry",
        Body : "Name: " + document.getElementById("Name").value
            + "<br> Email: " + document.getElementById("Email").value
            + "<br> Message: " + document.getElementById("Message").value
    }).then(
      message => alert("Email sent! :)")
    );
}