// Handle role selection and show login form based on the role selected
document.getElementById('role').addEventListener('change', function () {
    const role = this.value;

    // Show login form after role is selected
    if (role) {
        document.getElementById('loginForm').style.display = 'block';
    }
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capture the role, username, and password
    const role = document.getElementById('role').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation for demo purpose (replace with actual validation logic)
    if (username === "" || password === "") {
        alert('Please enter both username and password');
        return;
    }

    // Redirect based on the role selected
    if (role === 'patient') {
        window.location.href = 'patient.html';
    } else if (role === 'staff') {
        window.location.href = 'staff.html';
    } else if (role === 'admin') {
        window.location.href = 'admin.html';
    } else {
        alert('Please select a role');
    }
});
