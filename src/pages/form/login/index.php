<!DOCTYPE html>
<html>
<head>
	<title>Contact us</title>
	<link rel="stylesheet" type="text/css" href="style.css">
    
	<link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0">
	<script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
	</script>
	
	<script src=
"https://cdnjs.cloudflare.com/ajax/libs/bootstrap-3-typeahead/4.0.2/bootstrap3-typeahead.min.js">
	</script>
	
	<link href=
"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
		rel="stylesheet" />


</head>
<body>
		<div class="container">
		<div class="contact-box">
			<div class="left"></div>
			<div class="right">

				<form action="registeration_process.php" method="POST">
				<h2> Sign Up</h2>
				<input type="text" class="field" name = "fullname" placeholder="Your full Name" required>
				<input type="email" class="field" name = "email" placeholder="Your Email" required>
				<input type="tel" class="field phone" name = "phone" pattern="[6-9][0-9]{9}" title="Please enter valid phone number" name = "phone" placeholder="Indian no (+91)" required>
				<input type="text" class="field typeahead" 	data-provide="typeahead"
				placeholder="Enter your state name " name = "statename" required/>
				<input type="password" class="field"
				placeholder="Create Password" name = "createpassword" required/>
				
				<!-- <textarea placeholder="Message" class="field"></textarea> -->
			 <p style="color:grey;" > Already a Member? <span> <a href  = "login.html"> Log-In </a> </span>  </p> 
			
				<button class="btn" type="submit">Register as a Consumer</button>
			</form>
			</div>
		</div>
	</div>

	<script>
		var $input = $(".typeahead");
			$input.typeahead({
				source: [
					"Andhra Pradesh",
					"Arunachal Pradesh",
					"Assam",
					"Bihar",
					"Chhattisgarh",
					"Goa",
					"Gujarat",
					"Haryana",
					"Himachal Pradesh",
					"Jharkhand",
					"Karnataka",
					"Kerala",
					"Madhya Pradesh",
					"Maharashtra",
					"Manipur",
					"Meghalaya",
					"Mizoram",
					"Nagaland",
					"Odisha",
					"Punjab",
					"Rajasthan",
					"Sikkim",
					"Tamil Nadu",
					"Telangana",
					"Tripura",
					"Uttar Pradesh",
					"Uttarakhand",
					"West Bengal",
				],
				autoSelect: true,
			});
	
			$input.change(function () {
				var current = $input.typeahead("getActive");
				matches = [];
	
				if (current) {
	
					// Some item from your input matches
					// with entered data
					if (current.name == $input.val()) {
						matches.push(current.name);
					}
				}
			});


			<script>
			setTimeout(function () {
       window.location.href = "index.php";
    }, 1000); 
</script>
</script>

</body>
</html>