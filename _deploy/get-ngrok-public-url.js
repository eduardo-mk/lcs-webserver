const { execSync } = require('child_process');
let ngrokPublicUrl;
try {
    // Execute the ngrok command synchronously and capture the output
    const output = execSync('curl http://127.0.0.1:4040/api/tunnels', { encoding: 'utf-8' });

    // Parse the output to find the ngrok URL
    const tunnels = JSON.parse(output).tunnels;
    ngrokPublicUrl = tunnels[0]?.public_url; // Capture the first tunnel's public URL

    if (ngrokPublicUrl) {
        console.log(`Ngrok URL: ${ngrokPublicUrl}`); // Output the URL
    } else {
        console.error('No ngrok HTTP tunnel found');
    }
} catch (error) {
    console.error('Error fetching ngrok URL:', error.message);
}

module.exports = {
    ngrokPublicUrl
}