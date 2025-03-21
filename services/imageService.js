
const REPLICATE_API_URL = 'https://api.replicate.com/v1/predictions';

const generateImage = async (prompt) => {
  if (!process.env.REPLICATE_API_KEY) {
    throw new Error('Replicate API key not configured');
  }

  const response = await fetch(REPLICATE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
    },
    body: JSON.stringify({
      version: 'a9758cbfbd5f3c2094457d996681af52552901775aa2d6dd0b17fd15df959bef',
      input: {
        prompt,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || 'Failed to generate image');
  }

  return await response.json();
};

const checkGenerationStatus = async (id) => {
  if (!process.env.REPLICATE_API_KEY) {
    throw new Error('Replicate API key not configured');
  }

  const response = await fetch(`${REPLICATE_API_URL}/${id}`, {
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to check generation status');
  }
  
  return await response.json();
};

module.exports = {
  generateImage,
  checkGenerationStatus
};
