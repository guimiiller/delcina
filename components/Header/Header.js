import styles from './Header.module.css'
import Image from 'next/image'
import Icon1 from '../../public/assets/icon_home.png'
import Icon2 from  '../../public/assets/icon_about.png'
import Icon3 from  '../../public/assets/icon_house.png'
import Icon4 from  '../../public/assets/icon_contact.png'

export const Header = () =>{
    return(
        <>
            <header className={styles.header} id="header">
                <nav className={styles.nav.container}>
                    <div className={styles.nav_menu} id="nav-menu">
                        <ul className={styles.nav_list}>
                            <li className={styles.nav_item}>
                                <a href="/" className={styles.nav_link}>
                                    <Image src={Icon1} alt="Icon 1" width={24} height={24} className={styles.icon_nav}/>
                                    <span className={styles.nav_name}>Home</span>
                                </a>
                            </li>
                            <li className={styles.nav_item}>
                                <a href="#houses" className={styles.nav_link}>
                                    <Image src={Icon3} alt="Icon 3" width={24} height={24} className={styles.icon_nav}/>
                                    <span className={styles.nav_name}>Imóveis</span>
                                </a>
                            </li>
                            <li className={styles.nav_item}>
                                <a href="#about" className={styles.nav_link}>
                                    <Image src={Icon2} alt="Icon 2" width={24} height={24} className={styles.icon_nav}/>
                                    <span className={styles.nav_name}>Sobre</span>
                                </a>
                            </li>
                            <li className={styles.nav_item}>
                                <a href="#contact" className={styles.nav_link}>
                                    <Image src={Icon4} alt="Icon 4" width={24} height={24} className={styles.icon_nav}/>
                                    <span className={styles.nav_name}>Contato</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}