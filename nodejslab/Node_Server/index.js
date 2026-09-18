// os-demo.js

const os = require("os");

console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Release:", os.release());

console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());
console.log("Temp Directory:", os.tmpdir());

// Memory information (in bytes)
const totalMemGB = (os.totalmem()/ 1024 / 1024 / 1024).toFixed(2);
const freeMemGB = (os.freemem()/ 1024 / 1024 / 1024).toFixed(2);
console.log(`Total Memory: ${totalMemGB} GB`);
console.log(`Free Memory: ${freeMemGB} GB`);

// CPU information
const cpus = os.cpus();
console.log(`CPU: ${cpus[0].model}`);
console.log(`Cores: ${cpus.length}`);

// System uptime in hours
const uptimeHours = (os.uptime()/ 3600).toFixed(2);
console.log(`Uptime: ${uptimeHours} hours`);

// Network interfaces
const networkInterfaces = os.networkInterfaces();
console.log("Network Interfaces:", Object.keys(networkInterfaces));