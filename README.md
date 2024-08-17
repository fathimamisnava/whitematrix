# Grievance Management Website

## Overview

The Grievance Management Website is designed to streamline the process of submitting, tracking, and managing user grievances. It offers features such as user registration, secure login, grievance submission, and an admin panel for managing grievances. The system also includes automatic email notifications for admins when new grievances are submitted.

## Features

- **User Registration:** Users can create accounts by providing their name, email, and password.
- **User Login:** Secure login functionality for registered users.
- **Grievance Submission:** Users can submit grievances with necessary details and supporting documents.
- **Admin Dashboard:** Admins can view, manage, and resolve grievances.
- **Responsive Design:** Works seamlessly across desktop, tablet, and mobile devices.
- **Security:** User data is securely encrypted, and JWT is used for session management.

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript 
- **Backend:** Node.js with Express framework
- **Database:** MongoDB
- **Email Service:** SMTP using Nodemailer
- **Deployment:** Git and Render

## Installation

To get started with the Grievance Management Website, first clone the repository using `git clone https://github.com/yourusername/whitematrix.git` and navigate to the project directory with `cd whitematrix`. Then, install the necessary dependencies by running `npm install`. Next, configure your environment variables by creating a `.env` file in the root directory with the following content: `PORT=3000`, `MONGO_URI=mongodb://localhost:27017/grievance_db`, `JWT_SECRET=your_jwt_secret_key`, `EMAIL_USER=your_email_user`, and `EMAIL_PASS=your_email_password`. Finally, start the application using `npm start`.

## Deployment

### Deploying on Render

1. **Push to GitHub:**

   Ensure your local changes are committed and pushed to GitHub with the following commands:

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
### Create a New Web Service on Render

2. Go to [Render](https://render.com) and sign up or log in.
3. Click on **New Web Service**.
4. Connect your GitHub account and select the repository.
5. Configure the following settings:
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:** Add the variables from your `.env` file.
6. Click **Create Web Service**.

### Monitor Deployment

Render will automatically build and deploy your application. Once deployed, you'll receive a live URL where your application is accessible.
