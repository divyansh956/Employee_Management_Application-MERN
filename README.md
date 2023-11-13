# Employee Management Application

This application allows users to manage employee details by adding new employees through a form and deleting existing employees.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Features
- Add new employees through a form
- Delete existing employees

## Technologies Used
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB

## Getting Started
Clone the repository:
   ```bash
   git clone https://github.com/your-username/employee-management-app.git
   ```
## Install dependencies for the frontend and backend:

```
cd employee-management-app/client
npm install
cd ../server
npm install
```
### Start the frontend and backend:

```
# In the client directory
cd ../client
npm start
```
```
# In the server directory
cd ../server
npm run dev
```
### Usage
- Open your browser and go to http://localhost:3000 to access the frontend.
- Use the form to add new employees.
- View the list of employees and use the delete button to remove them.
## API Endpoints
- GET /getallUsers: Get a list of all employees.
- POST /createUser: Add a new employee.
- DELETE /deleteUser/:id : Delete an employee by ID.
### Contributing
- Contributions are welcome! Please follow the Contribution Guidelines.



