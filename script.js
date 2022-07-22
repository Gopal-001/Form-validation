$(document).ready(()=>{
    $('#usernamevalidation').hide();
    $('#emailvalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    var error= true;
    var email = true;
    var password_error=true;
    var confirm_password_error=true;

    $('#username').on('keyup',()=>{
        username_validation();
    });

    $('#email').keyup(()=>{
        email_validation();
    });

    $('#password').keyup(()=>{
        password_validation();
    });

    $('#conpassword').keyup(()=>{
        confirm_password_validation();
    });

    function username_validation(){
        let username_val = $('#username').val();
        if(username_val.trim() === ""){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username cannot be empty!! ');
            $('#usernamevalidation').css('color','red');
            error = false;
            return false;
        }else if(username_val.length < 4){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username should contains atleast 4 characters!! ');
            $('#usernamevalidation').css('color','red');
            error = false;
            return false;
        }
        
        else {
            error = true;
            $('#usernamevalidation').hide();
        }
    }

    function email_validation(){
        let check = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        let email_val = $('#email').val();
        if(email_val === ""){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Email is empty !!!');
            $('#emailvalidation').css('color','red');
            email = false;
            return false;
        }else if(!check.test(email_val)){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Please Enter a valid email !!!');
            $('#emailvalidation').css('color','red');
            email = false;
            return false;
        }else{
            email = true;
            $('#emailvalidation').hide();
        }
    }

    function password_validation(){
        let check = RegExp(/^(?=^.{8,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*$/);
        let one = RegExp(/^(?=^.{8,}$).*$/);
        let two = RegExp(/^(?=.*[0-9]).*$/);
        let three = RegExp(/^(?=.*[A-Z]).*$/);
        let four = RegExp(/^(?=.*[a-z]).*$/);
        let five = RegExp(/^(?=.*[^A-Za-z0-9]).*$/);
        var password_val = $('#password').val();
        // console.log(check.test(password_val));
        if(password_val === ""){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html(`Password is empty!!`);
            $('#passwordvalidation').css('color','red');
            password_error = false;
            return false;
        }else if(!check.test(password_val)){
            $('#passwordvalidation').show();
            let ans = ``;
            if(!one.test(password_val)){
                ans = ans + `should contain at least 8 from the mentioned characters<br>`;
            }
            if(!two.test(password_val)){
                ans = ans + `should contain at least one digit<br>`;
            }
            if(!three.test(password_val)){
                ans = ans + `should contain at least one upper case<br>`;
            }
            
            if(!four.test(password_val)){
                ans = ans + `should contain at least one lower case<br>`;
            }
            if(!five.test(password_val)){
                ans = ans + `should contain at least one special case<br>`;
            }
            $('#passwordvalidation').html(ans);
            $('#passwordvalidation').css('color','red');
            password_error = false;
            return false;
        }
        else{
            password_error=true;
            $('#passwordvalidation').hide();
        }
    }

    function confirm_password_validation(){
        
        var con_password = $('#conpassword').val();
        var password = $('#password').val();
        if(con_password !== password){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('The passwrod is not same!!');
            $('#confirmpasswordvalidation').css('color','red');
            confirm_password_error=false;
            return false;
        }
        else{
            confirm_password_error=true;
            
            $('#confirmpasswordvalidation').hide();
        }
    }

    $('#submitvalidation').click(()=>{
        username_validation();
        email_validation();
        password_validation();
        confirm_password_validation();

        if(error && email && password_error && confirm_password_error){
            return true;
        }
        else return false;
    });
});

