const express = require('express');
const app = express();

// Libera requisições de qualquer origem (CORS)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  next();
});

const manifest = {
  id: 'org.redecanais.nuvio',
  version: '1.0.0',
  name: 'RedeCanais',
  description: 'Addon do RedeCanais para Nuvio',
  resources: ['catalog', 'stream'],
  types: ['movie', 'series', 'tv'],
  catalogs: [
    {
      type: 'movie',
      id: 'redecanais_movies',
      name: 'RedeCanais Filmes'
    }
  ]
};

// Rota principal do Manifesto
app.get('/manifest.json', (req, res) => {
  res.json(manifest);
});

// Rota de Catálogo (necessária para o Nuvio listar os conteúdos)
app.get('/catalog/:type/:id.json', (req, res) => {
  res.json({
    metas: [
      {
        id: 'redecanais_live',
        type: 'movie',
        name: 'RedeCanais Ao Vivo / Filmes',
        poster: 'https://redecanais.ooo/favicon.ico',
        description: 'Transmissão do RedeCanais'
      }
    ]
  });
});

// Rota de Stream (links de vídeo)
app.get('/stream/:type/:id.json', (req, res) => {
  res.json({
    streams: [
      {
        title: 'RedeCanais - Sinal Ao Vivo',
        url: 'https://redecanais.ooo/'
      }
    ]
  });
});

module.exports = app;
