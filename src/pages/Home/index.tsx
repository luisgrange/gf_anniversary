import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Typewriter from 'typewriter-effect';

import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import circle from '../../assets/imgs/img-2.jpeg'
import { Page, SeeMore } from '../../components/Components';

import i2 from   "../../assets/imgs/img-2.jpeg";
import i4 from   "../../assets/imgs/img-4.jpeg";
import i5 from   "../../assets/imgs/img-5.jpeg";
import i8 from   "../../assets/imgs/img-8.jpeg";
import i7 from   "../../assets/imgs/img-7.jpeg";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);
const slide_img = [
  i2,
  i4,
  i5,
  i8,
  i7,
];

export function Home(){
    return(
        <Page id="home">
            <Container>
                <Row>
                    <Col>
                        <h1 className='title'>Feliz aniversário, meu amor!</h1>
                        <div className="box--circle">

                        <Swiper
                                effect={"slide"}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={"auto"}
                                autoplay={true}
                                className="mySwiper"
                            >
                                {slide_img.map((img, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                    <img src={img} alt="" />
                                    </SwiperSlide>
                                );
                                })}
                            </Swiper>


                            {/* <img src={circle} alt="a gente" /> */}
                        </div>
                        <div className='text'>
                            <Typewriter
                                options={{
                                    autoStart:  true,
                                }}

                                onInit={(typewriter) => {
                                    typewriter.typeString('Espero que esse dia seja tão especial quanto você é para mim. A cada dia me apaixono mais e mais por você! Parabéns, meu amor. <br/>Obrigado por estar comigo todo esse tempo ouvindo minhas piadas, memes duvidosos e reclamações... sempre me dando muito amor. Espero que eu possa retribuir tudo de bom que faz por mim.')
                                    .start();
                                    }
                                }
                            />
                        </div>

                        <SeeMore href='#us'>Se me ama, clica aqui!!</SeeMore>

                    </Col>
                </Row>
            </Container>
        </Page>
    );
}