
# Employee CSV express 

### About
Express application that reads a CSV file of employees and returns information based on two queries.
- Search by ID (required): outputs employee information based in their ID.
- Search by field (optional): outputs the value of the input field.

### Requirements
- Express. 
- Node.
- CLI.
- Nodemon.

### Installation

Clone the repository: 

    https://github.com/keupa/employees-csv-node.git

@ the employees-csv-express directory: 

    npm install 
Start the application: 

    nodemon 

### Usage 

After starting the application, open in browser:  `localhost:3000`

To search by ID (from 1 to 10): 

    http://localhost:3000/employee/<EMPLOYEE_ID>

To search by field:

    http://localhost:3000/employee/<EMPLOYEE_ID>/<QUERY>

Available queries: 
-id
-first_name
-last_name
-email
-ip_address

This exercise was made as part of the Rockstar program @enroute :-) 

