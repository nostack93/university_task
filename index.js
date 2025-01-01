const fs = require('fs');
const path = require('path');

// Sample JSON structure for the university system
const universityStructure = {
    university: "Tech University",
    departments: [
        {
            name: "Computer Science",
            professors: [
                { id: 1, name: "Dr. Smith", courses: ["Algorithms", "Data Structures"] }
            ],
            students: [
                { id: 101, name: "John Doe", courses: ["Algorithms"] }
            ]
        }
    ]
};

const filePath = path.join(__dirname, 'university.json');
const backupPath = path.join(__dirname, 'university_backup.json');

// Helper function to read JSON file
function readJSONFile() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading JSON file:", err.message);
        return null;
    }
}

// Helper function to write JSON file
function writeJSONFile(data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log("Data written to JSON file successfully.");
    } catch (err) {
        console.error("Error writing JSON file:", err.message);
    }
}

// Helper function to create a backup
function createBackup() {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        fs.writeFileSync(backupPath, data);
        console.log("Backup created successfully.");
    } catch (err) {
        console.error("Error creating backup:", err.message);
    }
}

// Add new entry at any nested level
function addEntry(departmentName, type, entry) {
    const data = readJSONFile();
    if (!data) return;

    const department = data.departments.find(dept => dept.name === departmentName);
    if (!department) {
        console.error("Department not found.");
        return;
    }

    if (type === "professor") {
        department.professors.push(entry);
    } else if (type === "student") {
        department.students.push(entry);
    } else {
        console.error("Invalid type specified.");
        return;
    }

    createBackup();
    writeJSONFile(data);
}

// Update existing data with validation
function updateEntry(departmentName, type, id, updatedEntry) {
    const data = readJSONFile();
    if (!data) return;

    const department = data.departments.find(dept => dept.name === departmentName);
    if (!department) {
        console.error("Department not found.");
        return;
    }

    let entries = type === "professor" ? department.professors : department.students;
    const entryIndex = entries.findIndex(entry => entry.id === id);
    if (entryIndex === -1) {
        console.error("Entry not found.");
        return;
    }

    entries[entryIndex] = { ...entries[entryIndex], ...updatedEntry };
    createBackup();
    writeJSONFile(data);
}

// Delete entry while maintaining data integrity
function deleteEntry(departmentName, type, id) {
    const data = readJSONFile();
    if (!data) return;

    const department = data.departments.find(dept => dept.name === departmentName);
    if (!department) {
        console.error("Department not found.");
        return;
    }

    let entries = type === "professor" ? department.professors : department.students;
    const entryIndex = entries.findIndex(entry => entry.id === id);
    if (entryIndex === -1) {
        console.error("Entry not found.");
        return;
    }

    entries.splice(entryIndex, 1);
    createBackup();
    writeJSONFile(data);
}

// Search through nested structures
function searchEntry(departmentName, type, id) {
    const data = readJSONFile();
    if (!data) return;

    const department = data.departments.find(dept => dept.name === departmentName);
    if (!department) {
        console.error("Department not found.");
        return;
    }

    let entries = type === "professor" ? department.professors : department.students;
    const entry = entries.find(entry => entry.id === id);
    if (!entry) {
        console.error("Entry not found.");
        return;
    }

    console.log("Search result:", entry);
}

// Initialize JSON file with sample data
if (!fs.existsSync(filePath)) {
    writeJSONFile(universityStructure);
}

// Example usage
addEntry("Computer Science", "professor", { id: 2, name: "Dr. Johnson", courses: ["Database Systems"] });
updateEntry("Computer Science", "professor", 1, { name: "Dr. Smith Jr." });
deleteEntry("Computer Science", "student", 101);
searchEntry("Computer Science", "professor", 2);