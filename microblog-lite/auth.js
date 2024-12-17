const apiBaseURL = "http://microbloglite.us-east-2.elasticbeanstalk.com"; // API Base URL

// Login function
function login(username, password) {
    fetch(`${apiBaseURL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (!response.ok) throw new Error("Invalid login credentials");
        return response.json();
    })
    .then(data => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
        window.location.assign("posts.html");
    })
    .catch(err => alert(err.message));
}

// Logout function
function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.replace("index.html");
}

// Check if the user is authenticated
function enforceAuth() {
    const token = localStorage.getItem("token");
    if (!token) window.location.replace("index.html");
}

// Get login data
function getLoginData() {
    return {
        token: localStorage.getItem("token"),
        username: localStorage.getItem("username"),
    };
}
