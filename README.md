# Multi-Page React Application

## Project Description

This multi-page React application allows users to explore users and albums using the JSONPlaceholder API. The application leverages `react-router-dom` for navigation and provides a seamless experience for accessing detailed information about users and their albums.

### Key Features

- **User Management:** View a list of users and navigate to detailed user profiles.
- **Album Management:** View a list of albums and access individual album details.
- **Dynamic Routing:** Utilizes URL parameters to fetch and display specific user or album data.
- **404 Not Found Page:** Displays a custom "Not Found" page for invalid routes.

## Pages

- **Users Page:** Displays a list of users fetched from the API.
- **User Detail Page:** Displays detailed information about a specific user, including their albums.
- **Albums Page:** Displays a list of albums available in the API.
- **Album Detail Page:** Displays details of a specific album.
- **404 Not Found Page:** A fallback page for any unknown routes.

## Technologies Used

- **React:** For building the user interface.
- **react-router-dom:** For managing navigation and routing in the application.
- **JSONPlaceholder API:** Provides fake data for users and albums.

## Installation and Setup

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-multi-page-app.git
   cd react-multi-page-app
