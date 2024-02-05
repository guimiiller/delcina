import House1_1 from '../../public/assets/houses/house1/img1_1.jpeg'
import House2_1 from '../../public/assets/houses/house2/img2_1.jpeg'
import House3_1 from '../../public/assets/houses/house3/img3_1.jpeg'

// Dados dos imóveis
const imoveisData = [
  {id: 1, photo: House1_1, city: 'Americana', district: 'Americana', price: 'R$ 1.550.000,00', category: 'casa', rooms: 3, bathrooms: 1, pool: 1, meters: '324 m²',},
  {id: 2, photo: House2_1, city: 'Americana', district: 'Pq. Universitário', price: 'R$ 980.000,00', category: 'casa', rooms: 3, bathrooms: 2, pool: 1, meters: '186,60 m²',},
  {id: 3, photo: House3_1, city: 'Nova Odessa',district: 'Jardim da Paz', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: true},
  {id: 4, photo: {}, city: 'Americana',district: 'Cidade Nova', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: false},
  {id: 5, photo: {}, city: 'Americana',district: 'San Marino', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: true},
  {id: 6, photo: {}, city: 'Americana',district: 'Jardim Esmeralda', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: false},
  {id: 7, photo: {}, city: 'Nova Odessa',district: 'Jardim da Paz', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: false},
  {id: 8, photo: {}, city: 'Santa Barbara d Oeste',district: 'Cidade Nova', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: true},
  {id: 9, photo: {}, city: 'Santa Barbara d Oeste',district: 'San Marino', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: false}
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
  