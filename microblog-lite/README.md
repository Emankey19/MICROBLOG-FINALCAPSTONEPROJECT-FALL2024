## Microblog Project

🦋 Butterfly: A lightweight microblogging platform where users can share brief messages and connect with others.

## Homepage screenshot 
![HomePage](C:\Users\student\MICROBLOG-FINALCAPSTONEPROJECT-FALL2024\microblog-lite\assets\homepage.png)

## Table of Contents
Project Overview
Features
Technologies Used
Setup Instructions
Usage
File Structure
Future Enhancements
Project Overview
Butterfly is a microblogging platform built to demonstrate the use of modern web development technologies. Users can:

Create an account.
Log in to the platform.
Post short messages.
View and interact with posts from all users.
Edit their profile information.
The project is connected to a backend server powered by Node.js and MongoDB for seamless data storage and retrieval.

## Features

User Authentication:

Register and log in with secure credentials.
Protected pages require users to log in.
Posts:

Create, read, and delete posts.
Like or unlike posts.
View posts sorted by likes or author.
User Profile:

Update bio and password.
View Gravatar-based profile icons.
Responsive Design:

Fully responsive user interface using Bootstrap.
Frontend:
HTML5
CSS3 (Bootstrap for styling)
JavaScript (ES6+)
Backend:
Node.js with Express.js
MongoDB (NoSQL database)
Development Tools:
Visual Studio Code
Live Server
Postman (for API testing)
Setup Instructions
1. Clone the Repository
bash
Copier le code
git clone https://github.com/your-username/microblog-project.git
cd microblog-project
2. Install Dependencies
For the Backend:
bash
Copier le code
cd microbloglite-capstone-backend
npm install
3. Run the Backend Server
Start MongoDB Locally:
Ensure MongoDB is running on your machine.
bash
Copier le code
mongod
Start the backend server:
bash
Copier le code
npm start
The server will run on http://localhost:5005.
4. Open the Frontend
Open the project folder in VS Code.
Start the frontend using Live Server or open the index.html file directly in your browser.
Usage
Register:
Navigate to the registration page to create an account.
Log In:
Enter your username and password to log in.
Post Messages:
Share posts from the posts page or profile page.
Like or Delete Posts:
Like/unlike posts or delete posts you authored.
Update Profile:
Add a bio or update your password from the profile page.

## File Structure

microblog-lite/
│-- assets/
│   └-- background.mp4       # Video file for the login page background
│-- index.html               # Login page
│-- registration.html        # Registration page
│-- posts.html               # Posts page
│-- profile.html             # Profile page
│-- global.css               # Combined CSS styles
│-- auth.js                  # Authentication logic
│-- landing.js               # Logic for the login page
│-- posts.js                 # Logic for the posts page
│-- profile.js               # Logic for the profile page

## Future Enhancements
Add comments on posts.
Allow users to follow/unfollow others.
Implement notifications for likes or replies.
Improve accessibility for visually impaired users.
Deploy the project to a cloud platform (e.g., AWS, Heroku).
Contributing
Feel free to submit pull requests or issues if you find bugs or want to suggest enhancements. Contributions are always welcome!

## License
This project is licensed under the MIT License.
