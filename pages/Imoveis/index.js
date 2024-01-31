import Link from "next/link"
import styles from '../../styles/Imoveis.module.css'
import Image from 'next/image';
import IconBed from '../../public/assets/icon_bed.png'
import IconShower from '../../public/assets/icon_shower.png'
import IconYardstick from '../../public/assets/icon_yardstick.png'
import { useState } from "react";
import Head from "next/head";

const Imoveis = ({imoveis}) =>{
    const [inputValue, setInputValue] = useState('')

    const lowerBusca = inputValue.toLowerCase()
    const getFiltered = imoveis.filter(item => item.district.toLowerCase().includes(lowerBusca))

    return(
        <div className={styles.container}>
            <Head>
                <title>DA - Mais Imóveis</title>
            </Head>
            <div className={styles.searchcontainer}>
                <input 
                    type='search' 
                    placeholder='Digite o Bairro'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} 
                />
            </div>
           <div className={styles.more_grid}>
                {getFiltered.map((imovel) =>(
                    <div key={imovel.id}>
                        <Link href={`/Imoveis/${imovel.id}`}><Image src={imovel.photo}/></Link>
                        <h3>{imovel.price}</h3>
                        <h2>{imovel.district}</h2>
                        <div className={styles.more_icons}>
                            <div><Image src={IconBed} alt=''/> <p>{imovel.rooms}</p></div>
                            <div><Image src={IconShower} alt=''/><p>{imovel.bathrooms}</p></div>
                            <div><Image src={IconYardstick} alt=''/><p>{imovel.meters}</p></div>
                        </div>

                    </div>
                ))}
           </div>
        </div>
    )
}


export default Imoveis


export async function getStaticProps() {
    const data = await fetch('http://localhost:3000/api/imoveis')
    const imoveis = await data.json()

    return{
        props: { imoveis }
    }
}