# LiveKit Inspect API Proxy Server

This is a Node.js Express API server that acts as a proxy to the LiveKit Inspect API for self-hosted LiveKit servers.
It allows you to monitor rooms, participants, nodes, agents, and server health via HTTP endpoints.

## Features
- List active rooms
- Get participants in a room
- List SFU nodes info
- Check LiveKit agents status
- Monitor server health

## Prerequisites
- Node.js installed
- Access to a self-hosted LiveKit server with Inspect API enabled
- LiveKit API Key and Secret

## Setup
1. Clone this repo or generate project files
2. Install dependencies:

```

npm install

```

3. Configure environment variables in `.env` file:

```

LIVEKIT_HOST=http://YOUR_LIVEKIT_HOST:7880
LIVEKIT_API_KEY=your_api_key_here
LIVEKIT_API_SECRET=your_api_secret_here

```

4. Start the server:

```
npm start

```


## API Endpoints
- `GET /api/rooms` - List active rooms
- `GET /api/rooms/:roomName/participants` - List participants in a room
- `GET /api/nodes` - List SFU nodes info
- `GET /api/agents` - List active LiveKit agents
- `GET /api/health` - Server health status

## Authorization to LiveKit Inspect API
This server uses Basic Authentication using LiveKit API Key as username and API Secret as password to query the Inspect API.
Your API Key and Secret should have sufficient permissions for admin access.

## Notes
- This server does not expose your LiveKit API credentials to clients.
- Use your own authentication/authorization to protect this proxy server in production.
