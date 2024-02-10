import Link from "next/link";
import styles from '../../styles/Imoveis.module.css';
import Image from 'next/image';
import IconBed from '../../public/assets/icon_bed.png';
import IconShower from '../../public/assets/icon_shower.png';
import IconYardstick from '../../public/assets/icon_yardstick.png';
import IconBack from '../../public/assets/icon_arrow.png';
import { useState } from "react";
import Head from "next/head";
import House1_1 from '../../public/assets/houses/house1/img1_1.jpeg';
import House2_1 from '../../public/assets/houses/house2/img2_1.jpeg';
import House3_1 from '../../public/assets/houses/house3/img3_1.jpeg';
import House4_1 from '../../public/assets/houses/house4/img4_1.jpeg';
import House5_1 from '../../public/assets/houses/house5/img5_1.jpeg';
import House6_1 from '../../public/assets/houses/house6/img6_1.jpeg';
import House7_1 from '../../public/assets/houses/house7/img7_1.jpeg';
import House8_1 from '../../public/assets/houses/house8/img8_1.jpeg';
import House9_1 from '../../public/assets/houses/house9/img9_1.jpeg';
import House10_1 from '../../public/assets/houses/house10/img10_1.jpeg';

const Imoveis = () => {
    const [bairroValue, setBairroValue] = useState('');
    const [cidadeValue, setCidadeValue] = useState('');
    const [categoriaValue, setCategoriaValue] = useState('');

    // Dados locais
    const imoveis = [
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
    ];

    // Extrair apenas as cidades dos imóveis
    const cidades = [...new Set(imoveis.map(imovel => imovel.city))];
    const categorias = [...new Set(imoveis.map(imovel => imovel.category))];

    const filteredByCidade = cidadeValue ? imoveis.filter(item => item.city.toLowerCase().includes(cidadeValue.toLowerCase())) : imoveis;
    const filteredByBairro = bairroValue ? filteredByCidade.filter(item => item.district.toLowerCase().includes(bairroValue.toLowerCase())) : filteredByCidade;
    const filteredByCategoria = categoriaValue ? filteredByBairro.filter(item => item.category.toLowerCase() === categoriaValue.toLowerCase()) : filteredByBairro;

    return (
        <div className={styles.container}>
            <Head>
                <title>D.A - Mais Imóveis</title>
            </Head>
            <div className={styles.input_container}>
                <div className={styles.link_back}>
                    <Link href={'/'}><Image src={IconBack} alt="" /></Link>
                </div>
                <div className={styles.searchcontainer}>
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
                            value={categoriaValue}
                            onChange={(e) => setCategoriaValue(e.target.value)}
                        >
                            <option value="">Selecione a Categoria</option>
                            {categorias.map((categoria, index) => (
                                <option key={index} value={categoria}>{categoria}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className={styles.more_grid}>
                {filteredByCategoria.map((imovel) => (
                    <div key={imovel.id}>
                        <Link href={`/Imoveis/${imovel.id}`}><Image src={imovel.photo} alt="Photo" /></Link>
                        <h3>{imovel.price}</h3>
                        <h2>{imovel.district}</h2>
                        <div className={styles.more_icons}>
                            <div><Image src={IconBed} alt='Icon Bed' /> <p>{imovel.rooms}</p></div>
                            <div><Image src={IconShower} alt='Icon Shower' /><p>{imovel.bathrooms}</p></div>
                            <div><Image src={IconYardstick} alt='Icon Yardstick' /><p>{imovel.meters}</p></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Imoveis;
