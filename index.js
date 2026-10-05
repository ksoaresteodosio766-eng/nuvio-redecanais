const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.get('/manifest.json', (req, res) => {
  res.json({
    id: 'org.redecanais.nuvio',
    version: '1.0.0',
    name: 'RedeCanais',
    description: 'Addon do RedeCanais para Nuvio',
    resources: ['stream'],
    types: ['movie', 'series', 'tv'],
    catalogs: []
  });
});

app.get('/stream/:type/:id.json', (req, res) => {
  res.json({
    streams: [
      {
        title: 'RedeCanais - Sinal Original',
        type: 'hls',
        url: 'https://redecanais.ooo/', 
        behaviorHints: {
          notSupported: false,
          proxyHeaders: {
            request: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
              'Referer': 'https://redecanais.ooo/'
            }
          }
        }
      }
    ]
  });
});

module.exports = app;
