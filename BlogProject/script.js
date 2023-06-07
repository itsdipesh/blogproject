// Login form submit event
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Perform login logic (e.g., make an AJAX request to the backend)
    // ...
    // Upon successful login, you can redirect the user or perform other actions as needed
  });
  