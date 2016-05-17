// read all
$(document).ready(function(){

	// create a new user's data
	$("#opener-register").click(function(){

        // get the value by id
		var email = $("#register-email").val();
        var password = $("#register-password").val();
        var ref = new Firebase("https://flickering-torch-1772.firebaseio.com/");

        // input the email and password to create a new user
        ref.createUser({
        	email: email,
        	password: password
        }, function(error,userData) {

            // cheack the user identify
            // if the user registered before, it will showes error
        	if (error) {
        		console.log("Error creating user:", error);

        	} else {

                // if a new user register, it will succeed
        		console.log("Successfully created user account :", userData.uid);
                window.location.href="http://whitecrazy.com/AAU/617/login/login.html";
        	}

        });
		return false;
	});



    // user login
	$("#opener-login").click(function(){

        // get the value by id
		var email = $("#login-email").val();
        var password = $("#login-password").val();
        var ref = new Firebase("https://flickering-torch-1772.firebaseio.com/");

        // auth the email and password from the database
        ref.authWithPassword({
        	email: email,
        	password: password
        }, function(error,authData) {

            // if the email and password do not match with each other, it will fail to login
        	if (error) {
        		console.log("Error login user:", error);

        	} else {

                // if the email and password matches with each other, it will succeed to login
        		console.log("Successfully created user account :", authData);
        		window.location.href="http://whitecrazy.com/AAU/617/login/login.html";
        	}

        });
		return false;
	});

    
});