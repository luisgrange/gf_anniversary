import React from 'react';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Col, Container, Row } from 'react-bootstrap';

import i2 from   "../../assets/imgs/img-2.jpeg";
import i4 from   "../../assets/imgs/img-4.jpeg";
import i5 from   "../../assets/imgs/img-5.jpeg";
import i8 from   "../../assets/imgs/img-8.jpeg";
import i7 from   "../../assets/imgs/img-7.jpeg";


const slide_img = [
  i2,
  i4,
  i5,
  i8,
  i7,
];

export function Photos(){
    return(
        <section id='photos'>
            <Container>
                <Row>
                    <Col>
                        <div className="img--box">
                            <img src={i4} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}