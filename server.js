const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

// Din ElevenLabs API-nyckel
const ELEVENLABS_API_KEY = 'sk_b43537ecf64d6ad4f5f466e7c3086ec2aea36eddc47ad6cd';

app.post('/incoming-call', async (req, res) => {
  console.log('Någon ringer!');
  
  // 46Elks förväntar sig XML-svar
  let xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Play>https://ditt-webbhotell.com/svar.mp3</Play>
  </Response>`;
  
  res.set('Content-Type', 'application/xml');
  res.send(xmlResponse);
});

app.listen(3000, () => {
  console.log('Server lyssnar på port 3000');
});
