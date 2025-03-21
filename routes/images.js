
const express = require('express');
const router = express.Router();
const { generateImage, checkGenerationStatus } = require('../services/imageService');

// Generate image endpoint
router.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }
    
    const prediction = await generateImage(prompt);
    res.status(201).json(prediction);
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ error: error.message || 'Failed to generate image' });
  }
});

// Check status endpoint
router.get('/status/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({ error: 'Image ID is required' });
    }
    
    const result = await checkGenerationStatus(id);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error checking image status:', error);
    res.status(500).json({ error: error.message || 'Failed to check image status' });
  }
});

module.exports = router;
