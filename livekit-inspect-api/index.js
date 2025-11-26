const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const LIVEKIT_HOST = process.env.LIVEKIT_HOST;
const API_KEY = process.env.LIVEKIT_API_KEY;
const API_SECRET = process.env.LIVEKIT_API_SECRET;

// Basic axios instance with auth
const axiosInstance = axios.create({
baseURL: LIVEKIT_HOST,
auth: {
 username: API_KEY,
 password: API_SECRET
},
timeout: 5000
});

app.use(express.json());

// Route: List rooms
app.get('/api/rooms', async (req, res) => {
try {
 const response = await axiosInstance.get('/inspector/rooms');
 res.json(response.data);
} catch (error) {
 res.status(500).json({error: error.toString()});
}
});

// Route: List participants in a room
app.get('/api/rooms/:roomName/participants', async (req, res) => {
try {
 const { roomName } = req.params;
 const response = await axiosInstance.get(`/inspector/participants?room=${roomName}`);
 res.json(response.data);
} catch (error) {
 res.status(500).json({error: error.toString()});
}
});

// Route: List nodes
app.get('/api/nodes', async (req, res) => {
try {
 const response = await axiosInstance.get('/inspector/nodes');
 res.json(response.data);
} catch (error) {
 res.status(500).json({error: error.toString()});
}
});

// Route: List agents
app.get('/api/agents', async (req, res) => {
try {
 const response = await axiosInstance.get('/inspector/agents');
 res.json(response.data);
} catch (error) {
 res.status(500).json({error: error.toString()});
}
});

// Route: Server health
app.get('/api/health', async (req, res) => {
try {
 const response = await axiosInstance.get('/inspector/health');
 res.json(response.data);
} catch (error) {
 res.status(500).json({error: error.toString()});
}
});

app.listen(port, () => {
console.log(`LiveKit Inspect API proxy server running on port ${port}`);
});
