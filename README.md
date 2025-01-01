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



## Usage Examples

### Adding Entries
```javascript
addEntry("Computer Science", "professor", { id: 3, name: "Dr. Brown", courses: ["Networking"] });
addEntry("Computer Science", "student", { id: 102, name: "Alice Johnson", courses: ["Networking"] });
```

### Updating Entries
```javascript
updateEntry("Computer Science", "professor", 3, { name: "Dr. Brown Jr." });
updateEntry("Computer Science", "student", 102, { courses: ["Networking", "Algorithms"] });
```

### Deleting Entries
```javascript
deleteEntry("Computer Science", "professor", 3);
deleteEntry("Computer Science", "student", 102);
```

### Searching Entries
```javascript
searchEntry("Computer Science", "professor", 1);
searchEntry("Computer Science", "student", 102);
```
