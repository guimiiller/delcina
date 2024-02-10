import styles from './Header.module.css'
import Image from 'next/image'
import Icon1 from '../../public/assets/icon_home.png'
import Icon2 from  '../../public/assets/icon_about.png'
import Icon3 from  '../../public/assets/icon_house.png'
import Icon4 from  '../../public/assets/icon_contact.png'
import Link from 'next/link'

export const Header = () =>{
    return(
        <>
            <header className={styles.header} id="header">
                <nav className={styles.nav.container}>
                    <div className={styles.nav_menu} id="nav-menu">
                        <ul className={styles.nav_list}>
                            <li className={styles.nav_item}>
                                <Link href="/" className={styles.nav_link}>
                                    <Image src={Icon1} alt="Icon 1" width={24} height={24} className={styles.icon_nav}/>
                                    <span className={styles.nav_name}>Home</span>
                                </Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link href="#houses" className={styles.nav_link}>
                                    <Image src={Icon3} alt="Icon 3" width={24} height={24} className={styles.icon_nav}/>
                                    <span className={styles.nav_name}>Imóveis</span>
                                </Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link href="#about" className={styles.nav_link}>
                                    <Image src={Icon2} alt="Icon 2" width={24} height={24} className={styles.icon_nav}/>
                                    <span className={styles.nav_name}>Sobre</span>
                                </Link>
                            </li>
                            <li className={styles.nav_item}>
                                <Link href="#contact" className={styles.nav_link}>
                                    <Image src={Icon4} alt="Icon 4" width={24} height={24} className={styles.icon_nav}/>
                                    <span className={styles.nav_name}>Contato</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}