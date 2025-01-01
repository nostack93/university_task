# University System JSON Manager

This program manages a nested JSON structure representing a university system. It supports CRUD operations, data validation, and file operations.

## Setup Instructions

1. **Install Node.js**: Ensure Node.js is installed on your system.
2. **Clone the Repository**: Clone this repository to your local machine.
3. **Run the Program**: Navigate to the project directory and run the program using Node.js:
   ```bash
   node index.js

   
Function Documentation
addEntry(departmentName, type, entry)
Adds a new entry (professor or student) to the specified department.

updateEntry(departmentName, type, id, updatedEntry)
Updates an existing entry in the specified department.

deleteEntry(departmentName, type, id)
Deletes an entry from the specified department.

searchEntry(departmentName, type, id)
Searches for an entry in the specified department.
