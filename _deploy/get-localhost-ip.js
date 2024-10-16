#!/usr/bin/node
const os = require('os');

// Get the list of network interfaces
const networkInterfaces = os.networkInterfaces();

// Filter for IPv4 addresses
const ipv4Addresses = Object.keys(networkInterfaces).reduce((result, iface) => {
  const addresses = networkInterfaces[iface];
  addresses.forEach((address) => {
    if (address.family === 'IPv4' && !address.internal) {
      result.push(address.address);
    }
  });
  return result;
}, []);

// If you want to return the first IPv4 address found, you can do:
if (ipv4Addresses.length > 0) {
  console.log('IPv4 Address:', ipv4Addresses);
} else {
  console.error('No IPv4 address found.');
}

module.exports = {
  ipv4Addresses,
};
