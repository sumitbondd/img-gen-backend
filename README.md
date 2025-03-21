
# Image Generation Backend

This is the backend service for the AI image generation application.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file based on `.env.example` and add your Replicate API key:
   ```
   REPLICATE_API_KEY=your_api_key_here
   PORT=3001
   FRONTEND_URL=http://localhost:8080
   ```

3. Start the server:
   ```
   npm start
   ```

## Deployment

This backend can be deployed to services like:
- Render
- Digital Ocean
- Railway
- Heroku

Remember to set the environment variables in your deployment platform.
