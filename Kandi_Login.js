function checkCreds(){
    console.log("checkCreds() function started");
    let firstName = document.getElementById("fName").value; //this is the area you put your first name in letters//
    let lastName = document.getElementById("lName").value; //this is the area you put your last name in letters//
    let badeNumb = document.getElementById("badgeID").value; //this is the area you put your badge number in numbers//
    let fullName = firstName + " " + lastName; //this is where your first and last name are inputted with a space in between, making it your full name//
    // alert("Hello, " + fullName); //this alert welcomes you by your full name on the top of the page//

    if(fullName.length > 20 || fullName < 2){
        document.getElementById("loginStatus").innerHTML = 
            "Invalid full name! Please try again..."; //if your full name is less than 2 characters or more than 20 characters you will receive an error "Invalid full name! Please try again..."//
    } else if(badeNumb > 999 || badeNumb < 0){
        document.getElementById("loginStatus").innerHTML = 
            "Invalid Badge number! Please try again..."; //if your badge number is less than 0 or more than 999 you will receive an error "Invalid Badge number! Please try again..."//
    }
    
    else {
        alert("Welcome, " + fullName);
        location.replace("Kandi_Login.html") //if you complete the full name and badge number correctly it will direct you to the UAT Space Page//
    }
}
