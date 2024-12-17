document.addEventListener("DOMContentLoaded", () => {
    enforceAuth();
    fetchPosts();
});

// Fetch and render posts
function fetchPosts() {
    fetch(`${apiBaseURL}/api/posts`, {
        headers: { Authorization: `Bearer ${getLoginData().token}` },
    })
    .then(response => response.json())
    .then(posts => renderPosts(posts))
    .catch(err => console.error(err));
}

// Render posts
function renderPosts(posts) {
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = posts.map(post => `
        <div class="card mb-3 shadow-sm">
            <div class="card-body">
                <p>${post.text}</p>
                <small class="text-muted">By ${post.username} | ${new Date(post.createdAt).toLocaleString()}</small>
                <div class="d-flex justify-content-between mt-2">
                    <button class="btn btn-outline-primary btn-sm" onclick="toggleLike('${post._id}', '${post.likes}')">
                        ❤️ ${post.likes.length} Like(s)
                    </button>
                    ${post.username === getLoginData().username ? `<button class="btn btn-outline-danger btn-sm" onclick="deletePost('${post._id}')">Delete</button>` : ""}
                </div>
            </div>
        </div>
    `).join("");
}

// Like/Unlike a post
function toggleLike(postId) {
    fetch(`${apiBaseURL}/api/posts/${postId}/likes`, {
        method: "POST",
        headers: { Authorization: `Bearer ${getLoginData().token}` },
    })
    .then(() => fetchPosts())
    .catch(err => console.error(err));
}

// Delete a post
function deletePost(postId) {
    fetch(`${apiBaseURL}/api/posts/${postId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${getLoginData().token}` },
    })
    .then(() => fetchPosts())
    .catch(err => console.error(err));
}

// Sort posts
function sortPosts(criteria) {
    fetch(`${apiBaseURL}/api/posts`, {
        headers: { Authorization: `Bearer ${getLoginData().token}` },
    })
    .then(response => response.json())
    .then(posts => {
        if (criteria === "likes") {
            posts.sort((a, b) => b.likes.length - a.likes.length);
        } else if (criteria === "author") {
            posts.sort((a, b) => a.username.localeCompare(b.username));
        }
        renderPosts(posts);
    })
    .catch(err => console.error(err));
}
