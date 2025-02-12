
    function calculate_bmi() {
        
        var uname = document.getElementById('uname').value;
        var height = parseFloat(document.getElementById('height').value);
        var weight = parseFloat(document.getElementById('weight').value);

        
        if (height <= 0 || weight <= 0) {
            alert("Please enter valid height and weight values.");
            return;
        }

       
        var bmi = weight / (height * height);

        alert("Hello " + uname + ", your BMI is: " + bmi);

        
    }

