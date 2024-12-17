const apiBaseURL = "http://localhost:5005";

function fetchPosts() {
    fetch(`${apiBaseURL}/api/posts`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` },
    })
    .then(response => response.json())
    .then(posts => {
        const postsContainer = document.getElementById("postsContainer");
        postsContainer.innerHTML = posts.map(post => `
            <div class="card mb-3">
                <div class="card-body">
                    <p>${post.content}</p>
                    <small class="text-muted">By ${post.username}</small>
                </div>
            </div>
        `).join("");
    });
}

document.addEventListener("DOMContentLoaded", fetchPosts);
