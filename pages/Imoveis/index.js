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
import House11_1 from '../../public/assets/houses/house11/img11_1.jpeg';
import House12_1 from '../../public/assets/houses/house12/img12_1.jpeg';
import House13_1 from '../../public/assets/houses/house13/img13_1.jpg';
import House14_1 from '../../public/assets/houses/house14/img14_1.jpeg';
import House15_1 from '../../public/assets/houses/house15/img15_1.jpeg';
import House16_1 from '../../public/assets/houses/house16/img16_1.jpeg';
import House17_1 from '../../public/assets/houses/house17/img17_1.jpeg';
import House18_1 from '../../public/assets/houses/house18/img18_1.jpeg';
import House19_1 from '../../public/assets/houses/house19/img19_1.jpeg';
import House20_1 from '../../public/assets/houses/house20/img20_1.jpeg';
import House21_1 from '../../public/assets/houses/house21/img21_1.jpeg';
import House22_1 from '../../public/assets/houses/house22/img22_1.jpeg';
import House23_1 from '../../public/assets/houses/house23/img23_1.jpeg';
import House24_1 from '../../public/assets/houses/house24/img24_1.jpeg';
import House25_1 from '../../public/assets/houses/house25/img25_1.jpeg';
import House26_1 from '../../public/assets/houses/house26/img26_1.jpeg';
import House27_1 from '../../public/assets/houses/house27/img27_1.jpeg';
import House28_1 from '../../public/assets/houses/house28/img28_1.jpeg';
import House29_1 from '../../public/assets/houses/house29/img29_1.jpeg';

const Imoveis = () => {
    const [bairroValue, setBairroValue] = useState('');
    const [cidadeValue, setCidadeValue] = useState('');
    const [categoriaValue, setCategoriaValue] = useState('');

   
    const imoveis = [
        {id: 1, photo: House1_1, city: 'Americana', district: 'Americana', price: 'R$ 1.550.000,00', category: 'casa', rooms: 3, bathrooms: 1, meters: '324 m²'},
        {id: 2, photo: House2_1, city: 'Americana', district: 'PQ. Universitário', price: 'R$ 980.000,00', category: 'casa', rooms: 3, bathrooms: 2, pool: 1, meters: '186,60 m²'},
        {id: 3, photo: House3_1, city: 'Americana', district: 'JD. Terramérica', price: 'R$ 520.000,00', category: 'casa', rooms: 2, bathrooms: 1, meters: '156,25 m²'},
        {id: 4, photo: House4_1, city: 'Americana', district: 'Res. Boa Vista', price: 'R$ 840.000,00', category: 'casa', rooms: 3, bathrooms: 1, meters: '372 m²'},
        {id: 5, photo: House5_1, city: 'Americana', district: 'Vila Carioba', price: 'R$ 650.000,00', category: 'casa', rooms: 3, bathrooms: 1, meters: '300 m²'},
        {id: 6, photo: House6_1, city: 'Limeira', district: 'Pires de Cima', price: 'R$ 850.000,00', category: 'chácara', rooms: 3, bathrooms: 1, meters: '3000 m²'},
        {id: 7, photo: House7_1, city: 'Americana', district: 'Recreio Represa', price: 'R$ 950.000,00', category: 'chácara', rooms: 2, bathrooms: 1, meters: '5.680 m²'},
        {id: 8, photo: House8_1, city: 'Americana', district: 'Praia dos Namorados', price: 'R$ 800.000,00', category: 'chácara', rooms: 2, bathrooms: 1, meters: '3.600 m²'},
        {id: 9, photo: House9_1, city: 'Limeira', district: 'Cond. Santa Mônica', price: 'R$ 450.000,00', category: 'chácara', rooms: 2, bathrooms: 2, meters: '1070 m²'},
        {id: 10, photo: House10_1, city: 'Limeira', district: 'Pires de cima', price: 'R$ 690.000,00', category: 'chácara', rooms: 3, bathrooms: 1, meters: '3.000 m²'},
        {id: 11, photo: House11_1, city: 'Limeira', district: 'Limeira Balsa', price: 'R$ 690.000,00', category: 'chácara', rooms: 2, bathrooms: 2, meters: '500 m²'},
        {id: 12, photo: House12_1, city: 'Limeira', district: 'Limeira Balsa', price: 'R$ 900.000,00', category: 'casa', rooms: 2, bathrooms: 3, meters: '1.100 m²'},
        {id: 13, photo: House13_1, city: 'Santa Barbara d Oeste', district: 'Cruzeiro do Sul', price: 'R$ 530.000,00', category: 'chácara', rooms: 2, bathrooms: 2, meters: '730 m²'},
        {id: 14, photo: House14_1, city: 'Santa Barbara d Oeste', district: 'Boa Vista', price: 'R$ 899.000,00', category: 'casa', rooms: 3, bathrooms: 2, meters: '500 m²'},
        {id: 15, photo: House15_1, city: 'Limeira', district: 'Balsa', price: 'R$ 899.000,00', category: 'chácara', rooms: 2, bathrooms: 1, meters: '1.000 m²'},
        {id: 16, photo: House16_1, city: 'Limeira', district: 'Pinhal', price: 'R$ 1.000.000', category: 'casa', rooms: 2, bathrooms: 1, meters: '23.000  m²'},
        {id: 17, photo: House17_1, city: 'Limeira', district: 'Cond. Jaguarandi', price: 'R$ 1.000.000', category: 'chácara', rooms: 4, bathrooms: 3, meters: '1.600 m²'},
        {id: 18, photo: House18_1, city: 'Piracicaba', district: 'Santa Isabel', price: 'R$ 450.000,00', category: 'chácara', rooms: 2, bathrooms: 1, meters: '1.356 m²'},
        {id: 19, photo: House19_1, city: 'Limeira', district: 'Cond. Portal dos Eucaliptos', price: 'R$ 350.000,00', category: 'chácara', rooms: 3, bathrooms: 1, meters: '1.250 m²'},
        {id: 20, photo: House20_1, city: 'Limeira', district: 'Jd. do Lago', price: 'R$ 350.000,00', category: 'casa', rooms: 2, bathrooms: 2, meters: '186 m²'},
        {id: 21, photo: House21_1, city: 'Americana', district: 'Carioba', price: 'R$ 510.000,00', category: 'casa', rooms: 3, bathrooms: 1, meters: '175 m²'},
        {id: 22, photo: House22_1, city: 'Americana', district: 'Nossa Senhora do Carmo', price: 'R$ 380.000,00', category: 'casa', rooms: 3, bathrooms: 1, meters: '300 m²'},
        {id: 23, photo: House23_1, city: 'Nova Odessa', district: 'Jd. do Lago', price: 'R$ 320.000,00', category: 'casa', rooms: 1, bathrooms: 1, meters: '250 m²'},
        {id: 24, photo: House24_1, city: 'Santa Barbara d Oeste', district: 'Mollon', price: 'R$ 600.000,00', category: 'casa', rooms: 3, bathrooms: 2, meters: '150 m²'},
        {id: 25, photo: House25_1, city: 'Santa Barbara d Oeste', district: 'Candido Bertine', price: 'R$ 790.000,00', category: 'casa', rooms: 3, bathrooms: 2, meters: '250 m²'},
        {id: 26, photo: House26_1, city: 'Americana', district: 'São Vito', price: 'R$ 450.000,00', category: 'casa', rooms: 4, bathrooms: 2, meters: '230 m²'},
        {id: 27, photo: House27_1, city: 'Americana', district: 'Terramérica', price: 'R$ 1.380.000,00', category: 'casa', rooms: 3, bathrooms: 4, meters: '300 m²'},
        {id: 28, photo: House28_1, city: 'Americana', district: 'Praia dos Namorados', price: 'R$ 300.000,00', category: 'casa', rooms: 2, bathrooms: 2, meters: '300 m²'},
        {id: 29, photo: House29_1, city: 'Americana', district: 'Praia dos Namorados', price: 'R$ 1.999.000,00', category: 'casa', rooms: 3, bathrooms: 2, meters: '5000 m²'},
    ];

    
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
