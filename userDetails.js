$(document).ready(function () {

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

    // set values to the html element
    $("#fname").text(fname);
    $("#lname").text(lname);
    $("#mail").text(mail);
    $("#pno").text(pno);
    $("#gen").text(gen);
    $("#age").text(age);
    $("#fa-name").text(faname); 
    $("#ma-name").text(maname);
    $("#mstatus").text(mstatus);
    $("#sp-name").text(spname);
    $("#comp-name").text(cname);
    $("#desig").text(desig);

});