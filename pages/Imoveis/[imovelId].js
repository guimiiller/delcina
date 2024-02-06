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
  },
  {
    id: 2, 
    photos: ['/assets/houses/house2/img2_1.jpeg', '/assets/houses/house2/img2_2.jpeg', '/assets/houses/house2/img2_3.jpeg', '/assets/houses/house2/img2_4.jpeg'], 
    city: 'Americana', 
    district: 'PQ Universitário', 
    price: 'R$ 980.000,00', 
    category: 'casa', 
    rooms: 3, 
    bathrooms: 2, 
    pool: false, 
    meters: '186,60 m²',
    garage: 1,
    hall: 1,  
    exchange: true, 
    financing: true
  },
  {
    id: 3, 
    photos: ['/assets/houses/house3/img3_1.jpeg', '/assets/houses/house3/img3_2.jpeg', '/assets/houses/house3/img3_3.jpeg', '/assets/houses/house3/img3_4.jpeg'], 
    city: 'Americana', 
    district: 'JD Terramérica', 
    price: 'R$ 520.000,00', 
    category: 'casa', 
    rooms: 2, 
    bathrooms: 1, 
    pool: false, 
    meters: '156,25 m²', 
    garage: 1,
    hall: 1, 
    exchange: true, 
    financing: true
  },
  {id: 4, photos: {}, city: 'Americana',district: 'Cidade Nova', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: false},
  {id: 5, photos: {}, city: 'Americana',district: 'San Marino', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: true},
  {id: 6, photos: {}, city: 'Americana',district: 'Jardim Esmeralda', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: false},
  {id: 7, photos: {}, city: 'Nova Odessa',district: 'Jardim da Paz', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: false},
  {id: 8, photos: {}, city: 'Santa Barbara d Oeste',district: 'Cidade Nova', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: true},
  {id: 9, photos: {}, city: 'Santa Barbara d Oeste',district: 'San Marino', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: false}
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
          >
            {imovelData.photos.map((photo, index) =>(
              <SwiperSlide><img key={index} src={photo} alt='' className={styles.photo_main}></img></SwiperSlide>
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
              <a href='https://api.whatsapp.com/send?phone=5519984179295' target='_blank'><div><button><p>Whatsapp</p><Image src={IconWhats} alt='Icon Whats'/></button></div></a>
              <a href='https://www.instagram.com/delcinandrade/' target='_blank'><div><button><p>Instagram</p><Image src={IconInstagram} alt='Icon Instagram'/></button></div></a>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
}