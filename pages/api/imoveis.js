import House1_1 from '../../public/assets/houses/house1/img1_1.jpeg'
import House2_1 from '../../public/assets/houses/house2/img2_1.jpeg'
import House3_1 from '../../public/assets/houses/house3/img3_1.jpeg'
import House4_1 from '../../public/assets/houses/house4/img4_1.jpeg'
import House5_1 from '../../public/assets/houses/house5/img5_1.jpeg'
import House6_1 from '../../public/assets/houses/house6/img6_1.jpeg'
import House7_1 from '../../public/assets/houses/house7/img7_1.jpeg'
import House8_1 from '../../public/assets/houses/house8/img8_1.jpeg'
import House9_1 from '../../public/assets/houses/house9/img9_1.jpeg'
import House10_1 from '../../public/assets/houses/house10/img10_1.jpeg'

// Dados dos imóveis
const imoveisData = [
  {id: 1, photo: House1_1, city: 'Americana', district: 'Americana', price: 'R$ 1.550.000,00', category: 'casa', rooms: 3, bathrooms: 1, meters: '324 m²'},
  {id: 2, photo: House2_1, city: 'Americana', district: 'PQ. Universitário', price: 'R$ 980.000,00', category: 'casa', rooms: 3, bathrooms: 2, pool: 1, meters: '186,60 m²'},
  {id: 3, photo: House3_1, city: 'Americana', district: 'JD. Terramérica', price: 'R$ 520.000,00', category: 'casa', rooms: 2, bathrooms: 1, meters: '156,25m²'},
  {id: 4, photo: House4_1, city: 'Americana', district: 'Res. Boa Vista', price: 'R$ 840.000,00', category: 'casa', rooms: 3, bathrooms: 1, meters: '372 m²'},
  {id: 5, photo: House5_1, city: 'Americana', district: 'Vila Carioba', price: 'R$ 650.000,00', category: 'casa', rooms: 3, bathrooms: 1, meters: '300 m²'},
  {id: 6, photo: House6_1, city: 'Limeira', district: 'Limeira', price: 'R$ 850.000,00', category: 'chácara', rooms: 3, bathrooms: 1, meters: '3000 m²'},
  {id: 7, photo: House7_1, city: 'Americana', district: 'Recreio Represa', price: 'R$ 950.000,00', category: 'chácara', rooms: 2, bathrooms: 1, meters: '5.680 m²'},
  {id: 8, photo: House8_1, city: 'Americana', district: 'Praia dos Namorados', price: 'R$ 800.000,00', category: 'chácara', rooms: 2, bathrooms: 1, meters: '3.600 m²'},
  {id: 9, photo: House9_1, city: 'Limeira', district: 'Pires de cima', price: 'R$ 800.000,00', category: 'chácara', rooms: 5, bathrooms: 2, meters: '3.424,15 m²'},
  {id: 10, photo: House10_1, city: 'Limeira', district: 'Pires de cima', price: 'R$ 690.000,00', category: 'chácara', rooms: 3, bathrooms: 1, meters: '3.000 m²'}
]
  
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
  