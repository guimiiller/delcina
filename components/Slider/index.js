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
import { useState, useEffect } from 'react';

export const Slide = () =>{

    const [getImoveis, setGetImoveis] = useState([])

    const getAllImoveis = async () =>{
        try{
            const response = await fetch('http://localhost:3000/api/imoveis')
            const data = await response.json()
            setGetImoveis(data)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        getAllImoveis()
    }, [])
    
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
                    
                    {getImoveis.map((item) =>(
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


