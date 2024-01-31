import House1 from '../../public/assets/houses/house1.jpeg'

// Dados dos imóveis
const imoveisData = [
    {id: 1, photo: House1, city: 'Santa Barbara d Oeste', district: 'Planalto do SoL', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²'},
    {id: 2, photo: House1, city: 'Santa Barbara d Oeste',district: 'Jardim Esmeralda', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²'},
    {id: 3, photo: House1, city: 'Santa Barbara d Oeste', district: 'Jardim da Paz', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²'},
    {id: 4, photo: House1, city: 'Santa Barbara d Oeste', district: 'Cidade Nova', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²'},
    {id: 5, photo: House1, city: 'Santa Barbara d Oeste', district: 'San Marino', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²'},
    {id: 6, photo: House1, city: 'Santa Barbara d Oeste', district: 'Jardim Esmeralda', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²'},
    {id: 7, photo: House1, city: 'Santa Barbara d Oeste', district: 'Jardim da Paz', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²'},
    {id: 8, photo: House1, city: 'Santa Barbara d Oeste', district: 'Cidade Nova', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²'},
    {id: 9, photo: House1, city: 'Santa Barbara d Oeste', district: 'San Marino', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²'}
  ];
  
  export default function handler(req, res) {
    // Verifica o método da requisição
    if (req.method === 'GET') {
      // Retorna os dados dos imóveis como resposta da API
      res.status(200).json(imoveisData);
    } else {
      // Se o método da requisição não for GET, retorna um erro 405 - Method Not Allowed
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  