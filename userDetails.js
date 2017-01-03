$(document).ready(function () {

     $("#spouse_hide").hide(); 

    // Get data from localStorage
    var fname=(localStorage.getItem('FirstName'));
    var lname=(localStorage.getItem('LastName'));
    var mail=(localStorage.getItem('Email'));
    var pno=(localStorage.getItem('Phno'));
    var gen=(localStorage.getItem('Gender'));
    var age=(localStorage.getItem(''));
    var faname=(localStorage.getItem('FatherName'));
    var maname=(localStorage.getItem('MotherName'));
    var mstatus=(localStorage.getItem('Mstatus'));
    var spname=(localStorage.getItem('SpouseName'));
    var cname=(localStorage.getItem('CName'));
    var desig=(localStorage.getItem('Designation'));
    var image = localStorage.getItem("base64string");

     var newDate = (localStorage.getItem('DOB'));
     var age;

     //Parse Date of birth
     var d = new Date(newDate);
     bday = d.getDate();
     bmo = (d.getMonth())+1;
     byr = d.getFullYear();

     //Parse Current Date
     var now = new Date();
     tday=now.getDate();
     tmo=(now.getMonth());
     tyr=(now.getFullYear());

    // calculate age
     if((tmo > bmo)||(tmo==bmo & tday>=bday)){
         age=byr
     }
    else{
        age=byr+1
    }
  
    // set values to the html element

   
    document.getElementById("profile_img").src= image;
    $("#fname").text(fname);
    $("#lname").text(lname);
    $("#mail").text(mail);
    $("#pno").text(pno);
    $("#gen").text(gen);
    $("#age").text(tyr-age);
    $("#fa-name").text(faname); 
    $("#ma-name").text(maname);
    $("#mstatus").text(mstatus);
    $("#comp-name").text(cname);
    $("#desig").text(desig);

    // Show SpouseName field 
    if(mstatus=== 'Married'){

        $("#spouse_hide").show(); 
        $("#sp-name").text(spname);
    }
    
});