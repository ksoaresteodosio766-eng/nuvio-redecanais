module.exports = (req, res) => {
  // Configura os cabeçalhos de CORS exigidos pelo Nuvio/Stremio
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Content-Type', 'application/json');

  res.status(200).json({
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
        name: 'RedeCanais'
      }
    ]
  });
};
