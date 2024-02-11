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
    bathrooms: 1, 
    pool: true, 
    meters: '324 m²',
    garage: 1,
    hall: 2, 
    exchange: true, 
    financing: true,
    description: 'Sala de tv, sala de jantar, cozinha, lavabo, 3 quartos (sendo  1 suíte), linda área gourmet c/banheiro,  piscina, terreno 324 mts, construção 180 mts, condomínio 450 reais, excelente localização no condomínio. Entrego com aquecedor solar, piscina aquecida, energia solar, móveis planejados, a combinar, tenho várias indicações, mas não esta incluso no preço.' 
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
    description: 'Casa com acabamento de alto padrão. Metragem terreno esquina 186,60m2, área construída 143,66m2, garagem p/ 02 (dois) carros. Cozinha em conceito aberto integrada com a sala de tv e jantar, pé direito de 4,50m, jardim, área gourmet com churrasqueira, lavabo/ (WC), lavandeira, 03 (três) dormitórios, sendo 01 (uma) suíte, 01 clousd, 01 áreas de luminação. Documentação, OK. '
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
    description: 'Linda casa no Jd Terramérica. Possui 2 dormitórios, cozinha integrada com sala de jantar e sala de TV, banheiro com box, espelho e lavatório de granito, lavanderia, churrasqueira com pia,  3 vagas de garagem, portão eletrônico... Imóvel todo reformado com piso em porcelanato e pintura nova. A casa possui projeto, estrutura e fundação para sobrado e dispõe de um espaçoso gramado ideal para construção de uma piscina.'
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
    description: ' 372m² de terreno, 228m² de construção, casa térrea, sala dois ambientes com móveis planejados, 3 dormitórios sendo 1 suíte com Closet, ar condicionado nos ambientes, móveis planejados em todos os cômodos, pé direito alto, sala e cozinha integradas (conceito aberto), área gourmet com churrasqueira e piscina, casa com sistema de energia solar, portão eletrônico e cerca elétrica, garagem coberta para 3 carros.'
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
    description: 'Belíssima casa Bairro Vila Carioba, Americana SP, 300 mtrs terreno, 3 dormitórios sendo uma suite, área Gourmet ampla, todos móveis planejados, aceita financiamento, estuda permuta.'
  },
  {
    id: 6, 
    photos: ['/assets/houses/house6/img6_1.jpeg', '/assets/houses/house6/img6_2.jpeg', '/assets/houses/house6/img6_3.jpeg', '/assets/houses/house6/img6_4.jpeg'], 
    city: 'Limeira', 
    district: 'Limeira', 
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
    description: '2 casas. A principal: 3 dormitórios sendo uma suite, sala jantar, sala tv, cozinha ampla conjugada com sala de jantar conceito aberto, casa toda avarandada, piscina, churrasqueira, várias árvores frutíferas, 3000 mil mtrs. Aceita permuta com imóveis em Campinas.'
  },
  {
    id: 7, 
    photos: ['/assets/houses/house7/img7_1.jpeg', '/assets/houses/house7/img7_2.jpeg', '/assets/houses/house7/img7_3.jpeg', '/assets/houses/house7/img7_4.jpeg'], 
    city: 'Americana', 
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
    description: 'R$ 950.000,00-Chácara ESCRITURADA no Bairro Recreio Represa com fundo para a represa, entrada pela Praia Azul, com terreno de 5.680 m² e construção de 148 m², com 02 dormitórios (01 suíte máster), sala,  cozinha planejada e 01 banheiro social com gabinete. A chácara conta com benfeitorias: poço artesiano, com água poço artesiano 120 metros documentado com vasão de 10.000 mil litros por hora de água mineral, área gourmet com churrasqueira, piscina, campo de futebol, 08 Palmeiras imperiais de 25 m altura e com saída para a represa nos fundos da propriedade. Estuda permuta até 50% do valor de venda. Estuda parcelamento direto com o proprietário e aceita financiamento.'
  },
  {
    id: 8, /*FALTA O VALOR */
    photos: ['/assets/houses/house8/img8_1.jpeg', '/assets/houses/house8/img8_2.jpeg', '/assets/houses/house8/img8_3.jpeg', '/assets/houses/house8/img8_4.jpeg'], 
    city: 'Americana', 
    district: 'Praia dos Namorados', 
    price: 'R$ 800.000,00', 
    category: 'chácara', 
    rooms: 2, 
    bathrooms: 1, 
    pool: true, 
    meters: '3.600 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: true,
    description: 'Excelente chácara no asfalto em Americana, com 3.600 m² com fundo para a represa da Praia dos Namorados. Com piscina, 02 churrasqueiras e deck para jet sky ou barco. Casa sede com 02 dormitórios, sala 02 ambientes, cozinha, banheiro, área de serviço, toda avarandada com vista para a represa e garagem para vários carros. Casa de caseiro com 02 dormitórios, sala, cozinha e 01 banheiro. Aceita financiamento. Estuda troca até 50% (sob análise mercadológica da permuta). Possui escritura e habite se.'
  },
  {
    id: 9, /*FALTA O VALOR */
    photos: ['/assets/houses/house9/img9_1.jpeg', '/assets/houses/house9/img9_2.jpeg', '/assets/houses/house9/img9_3.jpeg', '/assets/houses/house9/img9_4.jpeg'], 
    city: 'Limeira', 
    district: 'Pires de cima', 
    price: 'R$ 800.000,00', 
    category: 'chácara', 
    rooms: 5, 
    bathrooms: 2, 
    pool: true, 
    meters: '3.424,15 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: false,
    description: 'Área do terreno 3.424,15 m2. Área construída aproximadamente, casa 115 m2, casa do fundo deve ser uns 60 m2. Varanda na casa inteira... aproximadamente 200 mts2. Vendo ou troco excelente chácara, Limeira SP, Bairro Pires de cima. Casa ampla toda avarandada, exelente acabamento, sendo 3 dormitórios com uma suíte, sala Jantar conjugada com sala de TV conceito aberto, cozinha ampla. Segunda Casa, 2 dormitórios, sala, cozinha, banheiros, área Gourmet, piscina, várias árvores frutíferas, excelente localização.'
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
    description: 'Área do terreno 3.424,15 m2. Área construída aproximadamente, casa 115 m2 e casa do fundo deve ser uns 60 m2. Varanda na casa inteira... aproximadamente 200 mts2. Vendo ou troco excelente chácara, Limeira SP, Bairro Pires de cima. Casa ampla toda avarandada, exelente acabamento, sendo 3 dormitórios com uma suíte, sala Jantar conjugada com sala de TV conceito aberto, cozinha ampla. Segunda Casa, 2 dormitórios, sala, cozinha, banheiros, área Gourmet, piscina, várias árvores frutíferas, excelente localização.'
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
    description: 'Chácara à venda na Balsa Limeira, 2 dormitórios, salão integrado na cozinha com churrasqueira, 2 banheiros, piscina, quarto para ferramenta e 500 m2.'
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
    description: '2 dormitórios com espaço para o terceiro dormitório, sala de estar com lareira integrada com a sala de jantar, copa, cozinha, lavanderia, 3 banheiros social, churrasqueira, piscina aquecida, pequena edícula  com banheiro, galpão, quarto de despejo, garagem para 6 carros, portão eletrônico, 1.100 m2 terreno, 300 m2 construção'
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
         </div>
        </div>
      </div>
      <div className={styles.description_container}>
        <h2>Descrição</h2>
        <div>
          <p>{imovelData.description}</p>
        </div>
      </div>
    </div>
  );
}