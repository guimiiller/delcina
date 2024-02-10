import styles from './Slide.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
import IconBed from '../../public/assets/icon_bed.png'
import IconShower from '../../public/assets/icon_shower.png'
import IconYardstick from '../../public/assets/icon_yardstick.png'
import House1_1 from '../../public/assets/houses/house1/img1_1.jpeg'
import House2_1 from '../../public/assets/houses/house2/img2_1.jpeg'
import House3_1 from '../../public/assets/houses/house3/img3_1.jpeg'
import House4_1 from '../../public/assets/houses/house4/img4_1.jpeg'
import House5_1 from '../../public/assets/houses/house5/img5_1.jpeg'
import House6_1 from '../../public/assets/houses/house6/img6_1.jpeg'

export const Slide = () =>{

    // Dados dos imóveis
    const imoveisData = [
    {id: 1, photo: House1_1, city: 'Americana', district: 'Americana', price: 'R$ 1.550.000,00', category: 'casa', rooms: 3, bathrooms: 1, meters: '324 m²'},
    {id: 2, photo: House2_1, city: 'Americana', district: 'PQ. Universitário', price: 'R$ 980.000,00', category: 'casa', rooms: 3, bathrooms: 2, pool: 1, meters: '186,60 m²'},
    {id: 3, photo: House3_1, city: 'Americana', district: 'JD. Terramérica', price: 'R$ 520.000,00',  rooms: 2, bathrooms: 1, meters: '156,25m²'},
    {id: 4, photo: House4_1, city: 'Americana', district: 'Res. Boa Vista', price: 'R$ 840.000,00', category: 'casa', rooms: 3, bathrooms: 1, meters: '372 m²'},
    {id: 5, photo: House5_1, city: 'Americana', district: 'Vila Carioba', price: 'R$ 650.000,00', category: 'casa', rooms: 3, bathrooms: 1, meters: '300 m²'},
    {id: 6, photo: House6_1, city: 'Limeira', district: 'Limeira', price: 'R$ 850.000,00', category: 'chácara', rooms: 3, bathrooms: 1, meters: '3000 m²'},
    ]
    return(
        <div className={styles.house_container} id='houses'>
            <h2>Imóveis</h2>
            <div className={styles.house_content}>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={4}
                    breakpoints={{
                    300:{
                        slidesPerView: 1
                    },
                    599:{
                        slidesPerView: 2  
                    },
                    900: {
                        slidesPerView: 3
                    },
                    1180: {
                        slidesPerView: 4 
                    }
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className={styles.slider}
                >
                    
                    {imoveisData.map((item) =>(
                        <SwiperSlide className={styles.house_img} key={item.id}>
                            <Image src={item.photo} alt='Photo'/>
                            <div>
                                <h3>{item.price}</h3>
                                <h2>{item.district}</h2>
                                <div className={styles.slide_icons}>
                                    <div><Image src={IconBed} alt='Icon Bed'/> <p>{item.rooms}</p></div>
                                    <div><Image src={IconShower} alt='Icon Shower'/><p>{item.bathrooms}</p></div>
                                    <div><Image src={IconYardstick} alt='Icon Yardstick'/><p>{item.meters}</p></div>
                                </div>
                            </div>
                            <Link href={`/Imoveis/${item.id}`}><button>Veja Mais</button></Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Link href={'/Imoveis'}><button>Veja Mais</button></Link>
        </div>
    )
}


