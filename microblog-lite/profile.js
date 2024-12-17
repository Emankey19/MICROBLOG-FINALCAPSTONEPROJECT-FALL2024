document.addEventListener("DOMContentLoaded", () => {
    enforceAuth();
    fetchProfile();
    document.getElementById("updateProfileForm").addEventListener("submit", updateProfile);
    document.getElementById("newPostForm").addEventListener("submit", createPost);
});

// Fetch and display user profile
function fetchProfile() {
    const { username } = getLoginData();

    fetch(`${apiBaseURL}/api/users/${username}`, {
        headers: { Authorization: `Bearer ${getLoginData().token}` },
    })
    .then(response => response.json())
    .then(user => {
        document.getElementById("profileInfo").innerHTML = `
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Bio:</strong> ${user.bio || "No bio set."}</p>
            <img src="https://www.gravatar.com/avatar/${md5(user.username)}" alt="Profile Icon" width="100" />
        `;
    })
    .catch(err => console.error(err));
}

// Update profile
function updateProfile(e) {
    e.preventDefault();
    const bio = document.getElementById("bio").value;
    const password = document.getElementById("password").value;

    fetch(`${apiBaseURL}/api/users`, {
        method: "PUT",
        headers: { 
            "Content-Type": "application/json",
            Authorization: `Bearer ${getLoginData().token}`
        },
        body: JSON.stringify({ bio, password }),
    })
    .then(() => {
        alert("Profile updated successfully!");
        fetchProfile();
    })
    .catch(err => console.error(err));
}

// Create a new post
function createPost(e) {
    e.preventDefault();
    const postContent = document.getElementById("postContent").value;

    fetch(`${apiBaseURL}/api/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getLoginData().token}`,
        },
        body: JSON.stringify({ text: postContent }),
    })
    .then(() => {
        alert("Post created successfully!");
        document.getElementById("postContent").value = "";
    })
    .catch(err => console.error(err));
}