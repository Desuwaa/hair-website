    // file-operations.js
    const fs = require('fs');

    // Write to a file
    fs.writeFileSync('welcome.txt', 'Hello Node\n');

    // Read from a file
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log(data);
    });