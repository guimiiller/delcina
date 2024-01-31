import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header/Header'
import Delcina from '../public/assets/delcina.png'
import { Slide } from '../components/Slider'
import IconFacebook from '../public/assets/icon_face.png'
import IconInstagram from '../public/assets/icon_insta.png'
import IconWhats from '../public/assets/icon_what.png'
import IconGallery1 from '../public/assets/icon_gallery1.png'
import IconGallery2 from '../public/assets/icon_gallery2.png'
import IconGallery3 from '../public/assets/icon_gallery3.png'
import IconSpecial1 from '../public/assets/icon_special1.png'
import IconSpecial2 from '../public/assets/icon_special2.png'
import IconSpecial3 from '../public/assets/icon_special3.png'
import IconSpecial4 from '../public/assets/icon_special4.png'
import IconSpecial5 from '../public/assets/icon_special5.png'
import IconSpecial6 from '../public/assets/icon_special6.png'
import 'swiper/css';
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Home() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [data, setData] = useState([])

  const sendEmail = (e) =>{
    e.preventDefault()

    if(name === '' || email === '' || message === ''){
      alert('Preencha todos os campos')
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_qfg9hvh", "template_g3hvc3o", templateParams, "Tv4Z-FHBebrHiV_oi")
    .then((response) =>{
      console.log("EMAIL ENVIADO", response.data, response.text)
      setEmail('')
      setName('')
      setMessage('')
    }, (err) =>{
      console.log("ERRO: ", err)
    })
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>D.A Imóveis</title>
          <link rel="icon" href="./favicon.ico" />  
        </Head>
        <Header />
        <div className={styles.banner_content}>
          <h1>DA</h1>
          <h2>Delcina Andrade</h2>
          <h3>Creci 196258</h3>
        </div>
      </div>

      <Slide/>

      <div className={styles.gallery_container}>
        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className={styles.slider}
          loop={true}
          autoplay={{
              delay: 2000,
              disableOnInteraction: false
          }}
        >
          <SwiperSlide><div className={styles.gallery_img1}><Image src={IconGallery1} alt=''/></div></SwiperSlide>
          <SwiperSlide><div className={styles.gallery_img2}><Image src={IconGallery2} alt=''/></div></SwiperSlide>
          <SwiperSlide><div className={styles.gallery_img3}><Image src={IconGallery3} alt=''/></div></SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.about} id='about'>
        <div className={styles.about_content}>
          <div className={styles.about_text}>
            <div className={styles.about_line_content}>
              <div className={styles.about_line}></div>
              <div className={styles.about_h4}>
                  <h4>Sobre</h4>
              </div>
            </div>
            <h2>Quem sou eu?</h2>
            <h3>Corretora de Imóveis</h3>
            <p>Olá, meu nome é Delcina e sou Corretora de Imóveis. Carrego comigo uma experiência de mais de 8 anos na área de vendas, sempre executando meu trabalho com amor e excelência.</p>
          </div>
          <div className={styles.about_image}>
            <Image src={Delcina} alt='Delcina' className={styles.about_profile}/>
            <h3>Delcina Andrade</h3>
            <div className={styles.about_icons_content}>
              <a href='https://www.facebook.com/profile.php?id=100010263167239' target='_blank'><Image src={IconFacebook} alt='Face Icon' className={styles.about_icon}/></a>
              <a href='https://www.instagram.com/delcinandrade/' target='_blank'><Image src={IconInstagram} alt='Insta Icon' className={styles.about_icon}/></a> 
            </div>
          </div>
        </div>
      </div>

      <div className={styles.interior_container}>
        <div className={styles.interior_content}>
          <div className={styles.interior_img1}><div><h2>Rústica</h2></div></div>
          <div className={styles.interior_img2}><div><h2>Tradicional</h2></div></div>
          <div className={styles.interior_img3}><div><h2>Moderna</h2></div></div>
          <div className={styles.interior_img4}><div><h2>Clássica</h2></div></div>
        </div>
      </div>

      <div className={styles.specialization_container}>
        <div className={styles.specialization_content}> 
            <div className={styles.specialization_text}>
              <div className={styles.specialization_line_content}>
                <div className={styles.specialization_h4}>
                    <h4>Especializações</h4>
                </div>
              </div>
              <h2>Minhas Especializações</h2>
            </div>
          
          <div className={styles.specialization_grid}>
            <div><Image src={IconSpecial1} alt=''/><h3>Alto Padrão</h3></div>
            <div><Image src={IconSpecial2} alt=''/><h3>Casas Confortáveis</h3></div>
            <div><Image src={IconSpecial3} alt=''/><h3>Design Moderno</h3></div>
            <div><Image src={IconSpecial4} alt=''/><h3>Localização Previlegiada</h3></div>
            <div><Image src={IconSpecial5} alt=''/><h3>Vistas Incríveis</h3></div>
            <div><Image src={IconSpecial6} alt=''/><h3>Ótimos Preços</h3></div>
          </div>
        </div>
      </div>

      <div className={styles.gallery2_container}>
          <div className={styles.gallery2_content}>
            <div className={styles.gallery2_img1}></div>
            <div className={styles.gallery2_img2}></div>
            <div className={styles.gallery2_img3}></div>
          </div>
      </div>

      <div className={styles.contact_container} id='contact'>
        <div className={styles.contact_content}>
          <div className={styles.contact_text}>
              <div className={styles.contact_text}>
                <div className={styles.contact_line_content}>
                  <div className={styles.contact_line}></div>
                  <div className={styles.contact_h4}>
                    <h4>Contato</h4>
                  </div>
                </div>
                <h2>Entre em contato comigo</h2>
                <h3>Me mande uma mensagem</h3>
                <p>Estou a disposição 24 horas para te atender, negociar e esclarecer qualquer dúvida.</p>
              </div>
          </div>
          <div className={styles.form_container}>
            <form className={styles.form} onSubmit={sendEmail}>
                <div className={styles.input_box}>
                  <input 
                    type='text'
                    className={styles.input_user}
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    name='name' 
                    required
                  />
                  <label htmlFor='name' className={styles.label_input}>Nome</label>
                </div>
                <div className={styles.input_box}>
                  <input 
                    type='email' 
                    className={styles.input_user}
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                    name='email' 
                    required
                  />
                  <label htmlFor='email' className={styles.label_input}>Email</label>
                </div>
                <div className={styles.input_box}>
                  <textarea 
                    className={styles.input_user}
                    value={message}
                    onChange={e => setMessage(e.target.value)} 
                    name='textarea' 
                    required
                  >
                  </textarea>
                  <label htmlFor='textarea' className={styles.label_input}>Mande uma mensagem</label>
                </div>
                <input className={styles.button} type='submit' value='Enviar'/>
            </form>
          </div>
        </div>
      </div>
      
      <div className={styles.btn_what}>
        <a href='https://api.whatsapp.com/send?phone=5519984179295' target='_blank'>
          <Image src={IconWhats} alt='Fale comigo pelo WhatsApp' title='Fale comigo pelo WhatsApp'/>
        </a>
      </div>
    </>
  )
}
