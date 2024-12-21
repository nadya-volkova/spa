# Multi-Page React Application

## Project Description

This multi-page React application allows users to explore users and albums using the JSONPlaceholder API. The application leverages `react-router-dom` for navigation and provides a seamless experience for accessing detailed information about users and their albums.

<img src="https://github.com/user-attachments/assets/9f52fe38-6cc0-489b-9db1-af110472a313" alt="SPA" width="600"/>

### Key Features

- **User Management:** View a list of users and navigate to detailed user profiles.
- **Album Management:** View a list of albums and access individual album details.
- **Dynamic Routing:** Utilizes URL parameters to fetch and display specific user or album data.

## Pages

- **Users Page:** Displays a list of users fetched from the API.
- **User Detail Page:** Displays detailed information about a specific user, including their albums.
- **Albums Page:** Displays a list of albums available in the API.
- **Album Detail Page:** Displays details of a specific album.
- **404 Not Found Page:** A fallback page for any unknown routes.
  
## Routing Overview

The application uses `createBrowserRouter` to define the following routes:

- `/` - Redirects to `/users`.
- `/users` - Displays the list of users.
- `/users/:userId` - Displays details for a specific user.
- `/albums` - Displays the list of albums.
- `/albums/:albumId` - Displays details for a specific album.
- `*` - Catches all undefined routes and shows the "Not Found" page.

## Technologies Used

- **React:** For building the user interface.
- **react-router-dom:** For managing navigation and routing in the application.
- **JSONPlaceholder API:** Provides fake data for users and albums.

## Installation and Setup
   ```bash
  npm install
  npm start
