const fs = require('fs');
const path = require('path');

// Path to the source file
const source = path.join(__dirname, 'style.css');
// Path to the destination directory (root of the project)
const destination = path.join(__dirname, 'style.css');

// Function to copy the file
function copyFile(src, dest) {
    fs.copyFile(src, dest, (err) => {
        if (err) {
            console.error('Error copying the file:', err);
        } else {
            console.log('File copied successfully.');
        }
    });
}

// Execute the copy function
copyFile(source, destination);
