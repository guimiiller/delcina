import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/ImovelItem.module.css'
import IconBed from  '../../public/assets/icon_bed.png'
import IconShower from '../../public/assets/icon_shower.png'
import IconYardstick from '../../public/assets/icon_yardstick.png'
import IconPool from '../../public/assets/icon_pool.png'
import IconWhats from '../../public/assets/icon_what.png'
import IconInstagram from '../../public/assets/icon_insta.png'
import IconCheck from '../../public/assets/icon_check.png'
import IconGarage from '../../public/assets/icon_garage.png'
import IconHall from '../../public/assets/icon_hall.png'
import IconBack from '../../public/assets/icon_arrow.png'
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';  
import 'swiper/css/pagination';
import Head from 'next/head';


// Dados dos imóveis (ou você pode buscar esses dados de uma API como fizemos anteriormente)
const imoveisData = [
  {
    id: 1, 
    photos: ['/assets/houses/house1/img1_1.jpeg', '/assets/houses/house1/img1_2.jpeg', '/assets/houses/house1/img1_3.jpeg'], 
    city: 'Americana', 
    district: 'Americana', 
    price: 'R$ 1.550.000,00', 
    category: 'casa', 
    rooms: 3, 
    bathrooms: 4, 
    pool: true, 
    meters: '324 m²',
    garage: 1,
    hall: 2, 
    exchange: true, 
    financing: true,
    code: 'CA01',
    description: 'Sala de TV, Sala de jantar, Cozinha, Lavabo, 3 quartos (sendo  1 suíte), Linda área gourmet c/banheiro, Piscina, Terreno 324 m, Construção 180 m, Condomínio R$ 450, Excelente localização no condomínio. Entrego com aquecedor solar, Piscina aquecida, Energia solar, Móveis planejados a combinar' 
  },
  {
    id: 2, 
    photos: ['/assets/houses/house2/img2_1.jpeg', '/assets/houses/house2/img2_2.jpeg', '/assets/houses/house2/img2_3.jpeg', '/assets/houses/house2/img2_4.jpeg'], 
    city: 'Americana', 
    district: 'PQ. Universitário', 
    price: 'R$ 980.000,00', 
    category: 'casa', 
    rooms: 3, 
    bathrooms: 2, 
    pool: false, 
    meters: '186,60 m²',
    garage: 1,
    hall: 1,  
    exchange: true, 
    financing: true,
    code: 'CA02',
    description: 'Casa com acabamento de alto padrão. Metragem terreno esquina 186 m2, Área construída 143 m2, Garagem p/ 02 (dois) carros. Cozinha em conceito aberto integrada com a sala de tv e jantar, Pé direito de 4 m, Jardim, Área gourmet com churrasqueira, Lavabo/ (WC), Lavandeira, 03 (três) dormitórios sendo 01 (uma) suíte, 01 clousd, 01 áreas de luminação, Documentação OK'
  },
  {
    id: 3, 
    photos: ['/assets/houses/house3/img3_1.jpeg', '/assets/houses/house3/img3_2.jpeg', '/assets/houses/house3/img3_3.jpeg', '/assets/houses/house3/img3_4.jpeg'], 
    city: 'Americana', 
    district: 'JD. Terramérica', 
    price: 'R$ 520.000,00', 
    category: 'casa', 
    rooms: 2, 
    bathrooms: 1, 
    pool: false, 
    meters: '156,25 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: true,
    code: 'CA03',
    description: 'Linda casa no Jd Terramérica. Possui 2 dormitórios, Cozinha integrada com sala de jantar e sala de TV, Banheiro com box, Espelho e lavatório de granito, Lavanderia, Churrasqueira com pia, 3 vagas de garagem, Portão eletrônico, Imóvel todo reformado com piso em porcelanato e pintura nova, A casa possui projeto estrutura e fundação para sobrado e dispõe de um espaçoso gramado ideal para construção de uma piscina.'
  },
  {
    id: 4, 
    photos: ['/assets/houses/house4/img4_1.jpeg', '/assets/houses/house4/img4_2.jpeg', '/assets/houses/house4/img4_3.jpeg', '/assets/houses/house4/img4_4.jpeg'], 
    city: 'Americana', 
    district: 'Res. Boa Vista', 
    price: 'R$ 840.000,00', 
    category: 'casa', 
    rooms: 3, 
    bathrooms: 2, 
    pool: true, 
    meters: '372 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: true,
    code: 'CA04',
    description: ' 372m² de terreno, 228m² de construção, Casa térrea, Sala dois ambientes com móveis planejados, 3 dormitórios sendo 1 suíte com Closet, Ar condicionado nos ambientes, Móveis planejados em todos os cômodos, Pé direito alto, Sala e cozinha integradas (conceito aberto), Área gourmet com churrasqueira e piscina, Casa com sistema de energia solar, Portão eletrônico e cerca elétrica, Garagem coberta para 3 carros'
  },
  {
    id: 5, 
    photos: ['/assets/houses/house5/img5_1.jpeg', '/assets/houses/house5/img5_2.jpeg', '/assets/houses/house5/img5_3.jpeg', '/assets/houses/house5/img5_4.jpeg'], 
    city: 'Americana', 
    district: 'Vila Carioba', 
    price: 'R$ 650.000,00', 
    category: 'casa', 
    rooms: 3, 
    bathrooms: 1, 
    pool: false, 
    meters: '300 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: true,
    code: 'CA05',
    description: '300 m terreno, 3 dormitórios sendo uma suite, Área Gourmet ampla, Todos móveis planejados, Aceita financiamento, Estuda permuta'
  },
  {
    id: 6, 
    photos: ['/assets/houses/house6/img6_1.jpeg', '/assets/houses/house6/img6_2.jpeg', '/assets/houses/house6/img6_3.jpeg', '/assets/houses/house6/img6_4.jpeg'], 
    city: 'Limeira', 
    district: 'Pires de Cima', 
    price: 'R$ 850.000,00', 
    category: 'chácara', 
    rooms: 3, 
    bathrooms: 1, 
    pool: true, 
    meters: '3000 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: false,
    code: 'CHA01',
    description: '2 casas, 3 dormitórios sendo uma suite, Sala jantar, Sala tv, Cozinha ampla conjugada com sala de jantar conceito aberto, Casa toda avarandada, Piscina, Churrasqueira, Várias árvores frutíferas, 3000 mil m, Aceita permuta com imóveis em Campinas'
  },
  {
    id: 7, 
    photos: ['/assets/houses/house7/img7_1.jpeg', '/assets/houses/house7/img7_2.jpeg', '/assets/houses/house7/img7_3.jpeg', '/assets/houses/house7/img7_4.jpeg'], 
    city: 'Nova Odessa', 
    district: 'Recreio Represa', 
    price: 'R$ 950.000,00', 
    category: 'chácara', 
    rooms: 2, 
    bathrooms: 1, 
    pool: true, 
    meters: '5.680 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: true,
    code: 'CHA02',
    description: 'Terreno de 5.680 m² e construção de 148 m², 02 dormitórios (01 suíte máster), Sala, Cozinha planejada e 01 banheiro social com gabinete, Poço artesiano com água poço artesiano 120 metros documentado com vasão de 10.000 mil litros por hora de água mineral, Área gourmet com churrasqueira, Piscina, Campo de futebol, 08 Palmeiras imperiais de 25 m altura e com saída para a represa nos fundos da propriedade, Estuda permuta até 50% do valor de venda, Estuda parcelamento direto com o proprietário e aceita financiamento'
  },
  {
    id: 8, /*FALTA O VALOR */
    photos: ['/assets/houses/house8/img8_1.jpeg', '/assets/houses/house8/img8_2.jpeg', '/assets/houses/house8/img8_3.jpeg', '/assets/houses/house8/img8_4.jpeg'], 
    city: 'Americana', 
    district: 'Praia dos Namorados', 
    price: 'R$ 1.300.000.00', 
    category: 'chácara', 
    rooms: 2, 
    bathrooms: 1, 
    pool: true, 
    meters: '3.600 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: true,
    code: 'CHA03',
    description: '3.600 m² com fundo para a represa da Praia dos Namorados, Piscina, 02 churrasqueiras e deck para jet sky ou barco, 02 dormitórios, Sala 02 ambientes, Cozinha, Banheiro, Área de serviço avarandada com vista para a represa e garagem para vários carros, Casa de caseiro com 02 dormitórios, Sala, Cozinha, 01 banheiro, Aceita financiamento, Estuda troca até 50% (sob análise mercadológica da permuta), Possui escritura e habite se'
  },
  {
    id: 9,
    photos: ['/assets/houses/house9/img9_1.jpeg', '/assets/houses/house9/img9_2.jpeg', '/assets/houses/house9/img9_3.jpeg', '/assets/houses/house9/img9_4.jpeg'], 
    city: 'Limeira', 
    district: 'Cond. Santa Mônica', 
    price: 'R$ 450.000,00', 
    category: 'chácara', 
    rooms: 2, 
    bathrooms: 2, 
    pool: true, 
    meters: '1070 m²', 
    garage: 1,
    hall: 1, 
    exchange: false, 
    financing: false,
    code: 'CHA04C',
    description: '2 dormitórios, Sala, Cozinha com churrasqueira, 2 banheiros social, Piscina, Portão eletrônico, 1070 m2, Casa toda avarandada, Telhas em cimento madeiramento emparelhado, Piscina 8x5 x 1.40, Janelas em madeira, Condomínio com  80 chácaras sendo a metade de morador fixo e não pode alugar'
  },
  {
    id: 10,
    photos: ['/assets/houses/house10/img10_1.jpeg', '/assets/houses/house10/img10_2.jpeg', '/assets/houses/house10/img10_3.jpeg', '/assets/houses/house10/img10_4.jpeg'], 
    city: 'Limeira', 
    district: 'Pires de cima', 
    price: 'R$ 690.000,00', 
    category: 'chácara', 
    rooms: 3, 
    bathrooms: 1, 
    pool: true, 
    meters: '3.000 m²', 
    garage: 1,
    hall: 1, 
    exchange: false, 
    financing: false,
    code: 'CHA05',
    description: 'Área do terreno 3.424 m2, Área construída aproximadamente, Casa 115 m2 e casa do fundo deve ser uns 60 m2, Varanda na casa inteira aproximadamente 200 mts2, Vendo ou troco excelente chácara em Limeira SP Bairro Pires de cima, Casa ampla toda avarandada, Excelente acabamento, Sendo 5 dormitórios com uma suíte, Sala Jantar conjugada com sala de TV conceito aberto, Cozinha ampla, Sala, Cozinha, Banheiros, Área Gourmet, Piscina, Várias árvores frutíferas, Excelente localização, Duas casas'
  },
  {
    id: 11,
    photos: ['/assets/houses/house11/img11_1.jpeg', '/assets/houses/house11/img11_2.jpeg', '/assets/houses/house11/img11_3.jpeg', '/assets/houses/house11/img11_4.jpeg'], 
    city: 'Limeira', 
    district: 'Limeira Balsa', 
    price: 'R$ 690.000,00', /*PREÇO */
    category: 'chácara', 
    rooms: 2, 
    bathrooms: 2, 
    pool: true, 
    meters: '500 m²', 
    garage: 1,
    hall: 1, 
    exchange: false, 
    financing: false,
    code: 'CHA06C',
    description: ' 2 dormitórios, Salão integrado na cozinha com churrasqueira, 2 banheiros, Piscina, Quarto para ferramenta e 500 m2.'
  },
  {
    id: 12,
    photos: ['/assets/houses/house12/img12_1.jpeg', '/assets/houses/house12/img12_2.jpeg', '/assets/houses/house12/img12_3.jpeg', '/assets/houses/house12/img12_4.jpeg'], 
    city: 'Limeira', 
    district: 'Limeira Balsa',  /*Cidade e Bairro*/
    price: 'R$ 900.000,00',
    category: 'casa', 
    rooms: 2, 
    bathrooms: 3, 
    pool: true, 
    meters: '1.100 m²', 
    garage: 1,
    hall: 1, 
    exchange: false, 
    financing: false,
    code: 'CA07C',
    description: '2 dormitórios com espaço para o terceiro dormitório, Sala de estar com lareira integrada com a sala de jantar, Copa, Cozinha, Lavanderia, 3 banheiros social, Churrasqueira, Piscina aquecida, Pequena edícula com banheiro, Galpão, Quarto de despejo, Garagem para 6 carros, Portão eletrônico, 1.100 m2 terreno, 300 m2 construção'
  },
  {
    id: 13,
    photos: ['/assets/houses/house13/img13_1.jpg', '/assets/houses/house13/img13_2.jpg', '/assets/houses/house13/img13_3.jpg', '/assets/houses/house13/img13_4.jpg'], 
    city: 'Santa Bárbara d Oeste', 
    district: 'Cruzeiro do Sul',
    price: 'R$ 530.000,00',
    category: 'chácara', 
    rooms: 2, 
    bathrooms: 2, 
    pool: true, 
    meters: '730 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: false,
    code: 'CHA07',
    description: 'PISCINA, VARANDA, ESPAÇO do CHURRASCO com FOGÃO A LENHA, POMAR  PRODUZINDO, CASA DE 2 DORMITÓRIOS, 2 BANHEIROS, TERRENO DE 730 m², ESCRITURA, PRATICAMENTE no ASFALTO!! (300 metros do asfalto), Lugar lindo, Fácil acesso, Linda vista, Perfeito para Morar ou Lazer, MERCADOS, PADARIAS, AÇOUGUES, LANCHONETES,  RESTAURANTES, ESCOLA, CRECHE, POSTO MÉDICO, ACADEMIA, SALÕES DE BELEZA, ÔNIBUS, UBER, ENTREGA de COMPRAS p/ APLICATIVOS (mercado-livre - i-food - shopee), INTERNET, CORREIO, COLETA DE LIXO, ILUMINAÇÃO RUAS, ÁGUA e ESGOTO ENCANADOS'
  },
  {
    id: 14, /*FALTA Desc arrumar*/
    photos: ['/assets/houses/house14/img14_1.jpeg', '/assets/houses/house14/img14_2.jpeg', '/assets/houses/house14/img14_3.jpeg', '/assets/houses/house14/img14_4.jpeg'], 
    city: 'Santa Barbara d Oeste', 
    district: 'Boa Vista',
    price: 'R$ 899.000,00',
    category: 'casa', 
    rooms: 3, 
    bathrooms: 2, 
    pool: false, 
    meters: '500 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: true,
    code: 'CA07',
    description: 'PISCINA, VARANDA, ESPAÇO do CHURRASCO com FOGÃO A LENHA,  POMAR  PRODUZINDO, CASA DE 2 DORMITÓRIOS, 2 BANHEIROS, TERRENO DE 730 m². ESCRITURA. PRATICAMENTE no ASFALTO!! (300 metros do asfalto)! Lugar lindo!! Fácil acesso!! Linda vista!! Perfeito para Morar ou Lazer!! BAIRRO COMPLETO: MERCADOS, PADARIAS, AÇOUGUES, LANCHONETES,  RESTAURANTES, ESCOLA, CRECHE,  POSTO MÉDICO, ACADEMIA, SALÕES DE BELEZA, ÔNIBUS, UBER, ENTREGA de COMPRAS p/ APLICATIVOS (mercado livre,  i-food, shopee, etc), INTERNET, CORREIO, COLETA DE LIXO, ILUMINAÇÃO RUAS, ÁGUA e ESGOTO ENCANADOS, etc '
  },
  {
    id: 15,
    photos: ['/assets/houses/house15/img15_1.jpeg', '/assets/houses/house15/img15_2.jpeg', '/assets/houses/house15/img15_3.jpeg', '/assets/houses/house15/img15_4.jpeg'], 
    city: 'Limeira', 
    district: 'Balsa',
    price: 'R$ 899.000,00',
    category: 'chácara', 
    rooms: 2, 
    bathrooms: 1, 
    pool: false, 
    meters: '1000 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: false,
    code: 'CHA08',
    description: '2 dormitórios, 1 sala, 1 cozinha, 1 banheiro, Área de churrasqueira, Forno a lenha, Fogão de lenha, Churrasqueira'
  },
  {
    id: 16,
    photos: ['/assets/houses/house16/img16_1.jpeg', '/assets/houses/house16/img16_2.jpeg', '/assets/houses/house16/img16_3.jpeg', '/assets/houses/house16/img16_4.jpeg'], 
    city: 'Limeira', 
    district: 'Pinhal',
    price: 'R$ 1.000.000',
    category: 'casa', 
    rooms: 2, 
    bathrooms: 1, 
    pool: false, 
    meters: '23.000 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: false,
    code: 'CHA09',
    description: 'Sitio 23 mil metros quadrados, Riacho nos fundos, Casa, 2 dormitórios, Banheiro, Sala, Cozinha, Área, Banheiro externo, Poço, Árvores frutíferas'
  },
  {
    id: 17, /*FALTA PREÇO */
    photos: ['/assets/houses/house17/img17_1.jpeg', '/assets/houses/house17/img17_2.jpeg', '/assets/houses/house17/img17_3.jpeg', '/assets/houses/house17/img17_4.jpeg'], 
    city: 'Limeira', 
    district: 'Cond. Jaguarandi',
    price: 'R$ 1.000.000',
    category: 'chácara', 
    rooms: 4, 
    bathrooms: 2, 
    pool: true, 
    meters: '1.600 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: false,
    code: 'CHA10',
    description: '2 casas, 4 dormitórios um com suíte, Sala, Copa, 3 banheiros, Área com churrasqueira, Fogão a lenha, Piscina, Lavanderia, Garagem, Tanque com carpas ornamentais, Pés de frutas, Internet Fibra Ótica, TV, Portão do condomínio abre portas pelo aplicativo ou controle, Valor do condomínio 180 já incluso água, Documentação fundiária em andamento'
  },
  {
    id: 18,
    photos: ['/assets/houses/house18/img18_1.jpeg', '/assets/houses/house18/img18_2.jpeg', '/assets/houses/house18/img18_3.jpeg', '/assets/houses/house18/img18_4.jpeg'], 
    city: 'Piracicaba', 
    district: 'Santa Isabel',
    price: 'R$ 450.000,00',
    category: 'chácara', 
    rooms: 2, 
    bathrooms: 1, 
    pool: true, 
    meters: '1.356 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: false,
    code: 'CHA11',
    description: ' 2 dormitórios(1 suíte), Sala, Cozinha, Banheiro  social, Área de serviço, Varanda, Churrasqueira, Forno a lenha, Piscina, Poço artesiano, Amplo espaço verde, Garagem para 5 carros'
  },
  {
    id: 19,
    photos: ['/assets/houses/house19/img19_1.jpeg', '/assets/houses/house19/img19_2.jpeg', '/assets/houses/house19/img19_3.jpeg', '/assets/houses/house19/img19_4.jpeg'], 
    city: 'Limeira', 
    district: 'Portal dos Eucaliptos',
    price: 'R$ 350.000,00',
    category: 'chácara', 
    rooms: 3, 
    bathrooms: 1, 
    pool: true, 
    meters: '1.356 m²',  /*FALTA METROS */
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: false,
    code: 'CHA12',
    description: 'Condomínio fechado, 3 dormitórios sendo uma suíte, Sala, Cozinha, Área de festa com churrasqueira e piscina, Piso superior planejado para ser uma área de jogos '
  },
  {
    id: 20,
    photos: ['/assets/houses/house20/img20_1.jpeg', '/assets/houses/house20/img20_2.jpeg', '/assets/houses/house20/img20_3.jpeg', '/assets/houses/house20/img20_4.jpeg'], 
    city: 'Limeira', 
    district: 'Jd. do lago',
    price: 'R$ 350.000,00', /*FALTA PREÇO */
    category: 'casa', 
    rooms: 2, 
    bathrooms: 2, 
    pool: false, 
    meters: '186 m²',
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: false,
    code: 'CA08',
    description: '2 quartos, 1 suíte, Sala, Cozinha, Área gourmet, Garagem coberta para 2 carros, Cerca elétrica, Energia solar, Ar condicionado em todos os cômodos, Cozinha planejada ( armário embutido), Suite planejada.'
  },
];

export async function getStaticPaths() {
  // Extrai os IDs dos imóveis
  const imoveisIds = imoveisData.map((imovel) => imovel.id);

  // Mapeia os IDs dos imóveis para os paths necessários
  const paths = imoveisIds.map((id) => ({
    params: { imovelId: id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Busca os dados do imóvel com base no ID fornecido na rota dinâmica
  const imovelId = params.imovelId;
  const imovelData = imoveisData.find(imovel => imovel.id === parseInt(imovelId));

  return {
    props: {
      imovelData,
    },
  };
}

export default function Imovel({ imovelData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  const formatDescriptionToList = (description) => {
    // Substitua o caractere delimitador desejado, como vírgula, ponto-e-vírgula, etc.
    const delimiter = ',';
    return description.split(delimiter).map(item => item.trim());
  };

  const descricaoItens = formatDescriptionToList(imovelData.description);

  return (
    <div className={styles.imovel_container}>
      <Head>
        <title>D.A Imóvel {imovelData.id}</title>
      </Head>
      <div className={styles.icon_back}><Link href={'/'} ><Image src={IconBack} alt='Icon Back'/></Link></div>
      <div className={styles.imovel_content}>
        <div className={styles.imovel_img}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className={styles.slider}
            key={imovelData.id}
          >
            {imovelData.photos.map((photo, index) =>(
              <SwiperSlide key={index}><Image key={index} src={photo} alt='Slide' width={500} height={400} className={styles.photo_main}></Image></SwiperSlide>
            ))}
            
          </Swiper>
          <div className={styles.imovel_icons}>
            <div><Image src={IconBed} alt='Icon Bed'/>{imovelData.rooms > 1 ? <p>{imovelData.rooms} Quartos</p> : <p>{imovelData.rooms} Quarto</p>}</div>
            <div><Image src={IconShower} alt='Icon Shower'/><p>{imovelData.bathrooms} Banheiro</p></div>
            <div><Image src={IconYardstick} alt='Icon Yardstick'/><p>{imovelData.meters}</p></div>
            {imovelData.pool && <div><Image src={IconPool} alt='Icon Pool' /> <p>Piscina</p></div>}
            <div><Image src={IconGarage} alt='Icon Garage'/>{imovelData.garage > 1 ? <p>{imovelData.garage} Garagens</p> : <p>{imovelData.garage} Garagem</p>}</div>
            <div><Image src={IconHall} alt='Icon Hall' />{imovelData.hall > 1 ? <p>{imovelData.hall} Salas</p> : <p>{imovelData.hall} Sala</p>}</div>
          </div>
        </div>
        <div className={styles.imovel_contact}>
         <div className={styles.imovel_contact_content}>
          <div className={styles.imovel_price}>
              <h5>{imovelData.city}</h5>
              <h1>{imovelData.district}</h1>
              <h3>{imovelData.price}</h3>
              {imovelData.exchange ? <h4>Aceita Permuta <Image src={IconCheck} alt='Icon Check'/></h4> : <h4>Não aceita permuta</h4>}
              {imovelData.financing ? <h4>Aceita financiamento <Image src={IconCheck} alt='Icon Check'/></h4> : <h4>Não aceita financiamento</h4>}
            </div>
            <div className={styles.means_contact}>
              <h2>Entre em contato</h2>
              <Link href='https://api.whatsapp.com/send?phone=5519984179295' target='_blank'><div><button><p>Whatsapp</p><Image src={IconWhats} alt='Icon Whats'/></button></div></Link>
              <Link href='https://www.instagram.com/delcinandrade/' target='_blank'><div><button><p>Instagram</p><Image src={IconInstagram} alt='Icon Instagram'/></button></div></Link>
            </div>
            <div className={styles.code_container}>
              {imovelData.code}
            </div>
         </div>
        </div>
      </div>
      <div className={styles.description_container}>
        <h2>Descrição</h2>
        <div>
          <ul>
            {descricaoItens.map((item, index) => (
              <li key={index}>• {item.trim()}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


/* 
  X - Códigos CHA24C(claudia) - CHA24K(Karem) - CHA24(Del) - CA(Casa); 
  Descrição em lista;
*/