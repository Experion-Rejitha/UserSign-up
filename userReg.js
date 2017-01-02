
$(document).ready(function () {
   
   // date validation
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }

    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("dob").setAttribute("max", today);

     $("#spouse_hide").hide();    // Initialy hide spouse field

    // Function that hide SpouseName field when marital status is Single
    $("#status").change(function () {
        if ($(this).find(':selected').text() === 'Single') {
            $("#spouse_hide").hide();
        }
        else if ($(this).find(':selected').text() === 'Married') {
            $("#spouse_hide").show();
        }

     });

     var base64value;
     var img_flag=1;
     // Function that convert image into base64 string
     function readFile() {

         // validation for  image file
          var val = $("#image_file").val();
          if (!val.match(/(?:jpg|png)$/)) {
             alert("inputted file path is not an image!");
             img_flag=0;
          }
        if (this.files && this.files[0]) {
        var FR= new FileReader();
        FR.onload = function(e) {
        document.getElementById("img").src       = e.target.result;
        document.getElementById("b64").innerHTML = e.target.result;
        base64value = e.target.result; 
        // console.log(img.src);
        };       
        FR.readAsDataURL( this.files[0] );
         }
    }
    // Set image into div with id image_file
    document.getElementById("image_file").addEventListener("change", readFile, false);


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
            alert('Please fill the designation field');
         }
         else {

                var alphabets = /^[a-zA-Z]+$/;
                var  numbers = /^[0-9]+$/;
                var flag=1;

                if(!alphabets.test($("#fname").val())){
                     alert("FirstName can have only alphabets .");
                     flag=0;
                }
                else{
                    var new_fname = $('#fname').val();
                }
                if(!alphabets.test($("#lname").val())){
                     alert("LastName can have only alphabets .");
                     flag=0;
                }
                else{
                    var new_lname = $('#lname').val();
                }
                  var new_email = $('#email').val();

                  var new_pno = $('#pno').val();
                  var new_gen=$('input[name=gender]:checked').val();
                  var new_dob = $('#dob').val();
                  var new_mstatus = $('#status').val();
                  if(!alphabets.test($("#fa_name").val())){
                     alert("Father's Name can have only alphabets .");
                      flag=0;
                }
                else{
                    var new_faname = $('#fa_name').val();
                 }
                 if(!alphabets.test($("#ma_name").val())){
                     alert("Mother's Name can have only alphabets .");
                     flag=0;
                }
                else{
                     var new_maname = $('#ma_name').val();
                }
                if(new_mstatus==='Married')
                {
                 if(!alphabets.test($("#sp_name").val())){
                     alert("Spouse's Name can have only alphabets .");
                     flag=0;
                }
                else{
                    var new_spname = $('#sp_name').val();
                }
                }
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
                             var phoneno = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
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
                   localStorage.setItem('base64string',base64value);
                   localStorage.setItem('Mstatus',new_mstatus);
                   localStorage.setItem('FatherName',new_faname);
                   localStorage.setItem('MotherName',new_maname);
                   localStorage.setItem('SpouseName',new_spname);
                   localStorage.setItem('CName',new_cname);
                   localStorage.setItem('Designation',new_desig);

                // Redirect to userDetails.html
                 if (validateEmail(new_email) && (validatePhoneno(new_pno)) && flag==1 )
                 {
                      window.location.replace("E:/Exam/UserSign-up/userDetails.html");

                 }

         }
    });
});
