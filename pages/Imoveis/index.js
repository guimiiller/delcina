import Link from "next/link"
import styles from '../../styles/Imoveis.module.css'
import Image from 'next/image';
import IconBed from '../../public/assets/icon_bed.png'
import IconShower from '../../public/assets/icon_shower.png'
import IconYardstick from '../../public/assets/icon_yardstick.png'
import IconBack from '../../public/assets/icon_arrow.png'
import { useState } from "react";
import Head from "next/head";

const Imoveis = ({imoveis}) =>{
    const [bairroValue, setBairroValue] = useState('')
    const [cidadeValue, setCidadeValue] = useState('');

    const cidades = [...new Set(imoveis.map(imovel => imovel.city))]

    const filteredByBairro = bairroValue ? imoveis.filter(item => item.district.toLowerCase().includes(bairroValue.toLowerCase())) : imoveis;
    const filteredByCidade = cidadeValue ? filteredByBairro.filter(item => item.city.toLowerCase().includes(cidadeValue.toLowerCase())) : filteredByBairro;

    return(
        <div className={styles.container}>
            <Head>
                <title>DA - Mais Imóveis</title>
            </Head>
            <div className={styles.input_container}>
                <div className={styles.link_back}>
                    <Link href={'/'}><Image src={IconBack} alt="" /></Link>
                </div>
                <div className={styles.searchcontainer}>
                    <div className={styles.input_search}>
                        <input 
                            type='search' 
                            placeholder='Digite o Bairro'
                            value={bairroValue}
                            onChange={(e) => setBairroValue(e.target.value)} 
                        />
                    </div>
                    <div className={styles.input_search}>
                        <select 
                            value={cidadeValue}
                            onChange={(e) => setCidadeValue(e.target.value)}
                        >
                            <option value="">Selecione a Cidade</option>
                            {cidades.map((cidade, index) => (
                                <option key={index} value={cidade}>{cidade}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
           <div className={styles.more_grid}>
                {filteredByCidade.map((imovel) =>(
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