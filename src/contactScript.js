function validateInput(){

    const contactName = document.getElementById("name");
    

    if(contactName.value.length<4){
        alert("Please enter a valid name");
        return false;
    }

    const contactEmail = document.getElementById("email");
    if(contactEmail.value==""){
        alert("Please enter your email address");
        return false;
    }

    const contactNumber = document.getElementById("mobileNumber");
    if(contactNumber.value.length!=7){
        alert("Please enter a valid mobile number");
        return false;
    }

    const eventAddress = document.getElementById("address");
    if(eventAddress.value.length<10){
        alert("Please enter the full address of the event");
        return false;
    }

    const eventEircode = document.getElementById("eircode");
    if(eventEircode.value.length<7 || eventEircode.value.length>8){
        alert("Please enter a valid 7 character eircode")
        return false;
    }

    const eventDate = document.getElementById("date");

    if(eventDate.value==""){
        alert("Please enter the date of your event")
        return false;
    }


    const form = document.getElementById("contactForm");
    form.style.display="none";

    const returnMessage = document.getElementById("returnMessage");
    returnMessage.style.display="block";
        
}