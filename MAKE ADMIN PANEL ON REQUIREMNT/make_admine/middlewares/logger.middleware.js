const fs = require('fs');

const logger = (req, res, next) => {
    const timestamp = new Date().toISOString(); // Use ISO format for a standard timestamp
    const logMessage = `URL: ${req.url}, Method: ${req.method}, Timestamp: ${timestamp}\n`;

    // Append log to a file (e.g., logs.txt)
    fs.appendFileSync('logs.txt', logMessage);

    // Console log for real-time monitoring
    console.log(logMessage);

    // Pass control to the next middleware
    next();
};

module.exports = logger;