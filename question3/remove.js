const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');


function removeLogs() {
  
    const files = fs.readdirSync(logsDirectory);
    
    console.log('Files to delete:');
    files.forEach((file) => {
      console.log(file);
      fs.unlinkSync(path.join(logsDirectory, file));
    });
  
}
module.exports = {removeLogs}

