module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Content-Type', 'application/json');

  res.status(200).json({
    streams: [
      {
        title: 'RedeCanais - Sinal Ao Vivo',
        url: 'https://redecanais.ooo/'
      }
    ]
  });
};
