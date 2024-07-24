# Devzery Test Case Management App

## Overview

The Devzery Test Case Management App is a web application designed to manage test cases. It allows users to view, add, update, and delete test cases. The app is built using React for the frontend and Flask with PostgreSQL for the backend.

## Features

- **View Test Cases:** Display a list of all test cases in a table format.
- **Add Test Cases:** Add new test cases with details such as name, estimate time, module, priority, and status.
- **Update Test Cases:** Update existing test cases by modifying their details.
- **Delete Test Cases:** Remove test cases from the list.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Axios for HTTP requests

- **Backend:**
  - Flask
  - Flask-SQLAlchemy
  - PostgreSQL
  - Flask-Migrate for database migrations

- **Development Tools:**
  - Docker for containerization
  - Adminer for database management

## Getting Started

### Prerequisites

- Docker
- Node.js and npm
- Python and pip

### Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>

### Backend Setup

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Build and start the Docker containers:**

    ```bash
    docker-compose up --build
    ```

3. **Run the Flask migration commands:**

    ```bash
    docker-compose exec web flask db upgrade
    ```

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Start the React development server:**

    ```bash
    npm start
    ```

### Access the Application

- The frontend should be accessible at [http://localhost:3000](http://localhost:3000).
- The backend API is running at [http://127.0.0.1:5000/](http://127.0.0.1:5000/).

## API Endpoints

- **GET /api/testcases** - Retrieve all test cases.
- **POST /api/testcases** - Add a new test case.
- **PUT /api/testcases/<id>** - Update an existing test case.
- **DELETE /api/testcases/<id>** - Delete a test case.

## Docker Setup

The `docker-compose.yml` file sets up the following services:

- **db**: PostgreSQL database.
- **adminer**: Web-based database management tool.

## Configuration

- **Backend Configuration**: Located in `backend/config.py`.
- **Frontend Configuration**: API endpoints are specified in the Axios calls in the frontend React components.

## Contributing

Contributions are welcome! Please submit a pull request with your changes or open an issue to discuss any problems or suggestions.
