const express = require('express');
const app = express();
app.use(express.json());

app.post('/incoming-call', async (req, res) => {
  console.log('Någon ringer!');
  
  let xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
  <Response>
    <Say>Hej! Välkommen till vår företag. AI receptionisten är under uppbyggnad.</Say>
  </Response>`;
  
  res.set('Content-Type', 'application/xml');
  res.send(xmlResponse);
});

app.get('/', (req, res) => {
  res.send('AI Receptionist Server är online!');
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log('Server lyssnar på port ' + PORT);
});
