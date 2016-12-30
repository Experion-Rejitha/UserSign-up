
$(document).ready(function () {

   // datepicker
      $('#dob').datepicker({
      format: "dd MM yyyy",
      autoclose: true,
      pickerPosition: "bottom-left",
      todayHighlight: true,
    });

// Function that hide SpouseName field when marital status is Single
    $("#status").change(function () {
        if ($(this).find(':selected').text() === 'Married') {
            $("#spouse_hide").show();
        }
        else if ($(this).find(':selected').text() === 'Single') {
            $("#spouse_hide").hide();
        }
        else if ($(this).find(':selected').text() === '--Select--') {
                $("#spouse_hide").hide();
        }
        else {
                $("#spouse_hide").show();
        }
    });

// Function for submit button
    $('#save_btn').click(function (e) {
         e.preventDefault();
         var new_gen=$('input[name=gender]:checked').val();
        if ($('#fname').val() == ""){
             alert('Please fill the FirstName field');
          }
         else if ($('#lname').val() == ""){
            alert('Please fill the LastName field');
         }
         else if ($('#email').val() == ""){
            alert('Please fill the email field');
         }
         else if ($('#gender:checked').length === 0)
        {
          alert('Please select the gender');
        }
         else if ($('#pno').val() == ""){
            alert('Please fill the Number field');
         }
         else if ($('#dob').val() == ""){
            alert('Please select Date of Birth');
         }
         else if ($('#status').val() == "--Select--"){
           alert('Please select the marital status');
         }
         else if ($('#fa_name').val() == ""){
           alert('Please fill the father name field');
         }
         else if ($('#ma_name').val() == ""){
            alert('Please fill the mother name field');
         }
         else if ($('#cname').val() == ""){
            alert('Please fill the company name field');
         }
         else if ($('#desig').val() == ""){
            alert('Please fill the gesignation field');
         }
         else {
                  var new_fname = $('#fname').val();
                  var new_lname = $('#lname').val();
                  var new_email = $('#email').val();
                  var new_pno = $('#pno').val();
                  var new_gen=$('input[name=gender]:checked').val();
                  var new_dob = $('#dob').val();
                  var new_mstatus = $('#status').val();
                  var new_faname = $('#fa_name').val();
                  var new_maname = $('#ma_name').val();
                  var new_spname = $('#sp_name').val();
                  var new_cname = $('#cname').val();
                  var new_desig = $('#desig').val();

                  // Validate email address
                  if (validateEmail(new_email)) 
                  {
                        alert('Nice!! your Email is valid, now you can continue..');
                  }
                 else{
                        alert('Invalid Email Address');
                        e.preventDefault();
                    }
                    //  Function that validates email address through a regular expression.
                 function validateEmail(new_email) {
                    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
                        if (filter.test(new_email)) {
                             return true;
                        }
                       else {
                               return false;
                       }
                 
                   }


                // Validate Indian phone number
                  if (validatePhoneno(new_pno)) 
                  {
                        alert('Your phone number is valid, now you can continue..');
                  }
                 else{
                        alert('Invalid Phone Number');
                        e.preventDefault();
                    }

                   function validatePhoneno(new_pno)  
                        {  
                             var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
                            if((new_pno.match(phoneno)))
                                 {  
                                     return true;  
                                  }  
                             else  
                                  {  
                                     return false;  
                                 }  
                        }  

                   localStorage.setItem('FirstName',new_fname);
                   localStorage.setItem('LastName',new_lname);
                   localStorage.setItem('Email',new_email);
                   localStorage.setItem('Phno',new_pno);
                   localStorage.setItem('Gender',new_gen);
                   localStorage.setItem('DOB',new_dob);
                   localStorage.setItem('Mstatus',new_mstatus);
                   localStorage.setItem('FatherName',new_faname);
                   localStorage.setItem('MotherName',new_maname);
                   localStorage.setItem('SpouseName',new_spname);
                   localStorage.setItem('CName',new_cname);
                   localStorage.setItem('Designation',new_desig);

                // Redirect to userDetails.html
                   window.location.replace("E:/Exam/userDetails.html");
         }
    });
});



