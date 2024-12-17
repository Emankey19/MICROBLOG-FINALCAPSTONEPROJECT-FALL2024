const apiBaseURL = "http://localhost:5005";

function login(username, password) {
    fetch(`${apiBaseURL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("token", data.token);
        window.location.assign("posts.html");
    });
}

function logout() {
    localStorage.removeItem("token");
    window.location.replace("index.html");
}

document.getElementById("loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    login(username, password);
});

}
