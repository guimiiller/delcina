import { useRouter } from 'next/router';
import Image from 'next/image';
import House1 from '../../public/assets/houses/house1.jpeg'
import House2 from '../../public/assets/houses/house2.jpeg'
import styles from '../../styles/ImovelItem.module.css'
import IconBed from  '../../public/assets/icon_bed.png'
import IconShower from '../../public/assets/icon_shower.png'
import IconYardstick from '../../public/assets/icon_yardstick.png'
import IconWhats from '../../public/assets/icon_what.png'
import IconInstagram from '../../public/assets/icon_insta.png'
import IconCheck from '../../public/assets/icon_check.png'
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';  
import 'swiper/css/pagination';


// Dados dos imóveis (ou você pode buscar esses dados de uma API como fizemos anteriormente)
const imoveisData = [
  {id: 1, photo: {House1, House2}, city: 'Santa Barbara d Oeste', district: 'Planalto do SoL', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: true},
  {id: 2, photo: {House1, House2}, city: 'Americana',district: 'Jardim Esmeralda', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: false},
  {id: 3, photo: {House1, House2}, city: 'Nova Odessa',district: 'Jardim da Paz', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: true},
  {id: 4, photo: {House1, House2}, city: 'Americana',district: 'Cidade Nova', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: false},
  {id: 5, photo: {House1, House2}, city: 'Americana',district: 'San Marino', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: true},
  {id: 6, photo: {House1, House2}, city: 'Americana',district: 'Jardim Esmeralda', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: false},
  {id: 7, photo: {House1, House2}, city: 'Nova Odessa',district: 'Jardim da Paz', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: false},
  {id: 8, photo: {House1, House2}, city: 'Santa Barbara d Oeste',district: 'Cidade Nova', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: true},
  {id: 9, photo: {House1, House2}, city: 'Santa Barbara d Oeste',district: 'San Marino', price: 'R$ 200.000', category: 'casa', rooms: 4, bathrooms: 2, meters: '330 m²', permuta: false}
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
            <SwiperSlide><Image src={imovelData.photo.House1} alt='' className={styles.photo_main}/></SwiperSlide>
            <SwiperSlide><Image src={imovelData.photo.House2} alt='' className={styles.photo_main}/></SwiperSlide>
          </Swiper>
          <div className={styles.imovel_icons}>
            <div><Image src={IconBed} alt=''/><p>{imovelData.rooms}</p></div>
            <div><Image src={IconShower} alt=''/><p>{imovelData.bathrooms}</p></div>
            <div><Image src={IconYardstick} alt=''/><p>{imovelData.meters}</p></div>
          </div>
        </div>
        <div className={styles.imovel_contact}>
         <div className={styles.imovel_contact_content}>
          <div className={styles.imovel_price}>
              <h1>{imovelData.district}</h1>
              <h3>{imovelData.price}</h3>
              {imovelData.permuta ? <h4>Aceita Permuta <Image src={IconCheck} alt=''/></h4> : <h4>Não aceita permuta</h4>}
            </div>
            <div className={styles.means_contact}>
              <h2>Entre em contato</h2>
              <a href='https://api.whatsapp.com/send?phone=5519984179295' target='_blank'><div><button><p>Whatsapp</p><Image src={IconWhats} alt=''/></button></div></a>
              <a href='https://www.instagram.com/delcinandrade/' target='_blank'><div><button><p>Instagram</p><Image src={IconInstagram} alt=''/></button></div></a>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
}