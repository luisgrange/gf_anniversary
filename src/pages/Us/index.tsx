import React from 'react';
import { Page } from '../../components/Components';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import img from '../../assets/imgs/img-1.jpeg'

import './styles.css';

export function Us(){
    return(
        <Page id='us'>
            <Container>
                <Row>
                    <Col>
                        <div className="wrapper--card">
                            <div className="card--head">
                                <img src={img} alt=""/>
                            </div>
                            <div className="card--body">
                                <p>
                                    E não importa como, onde ou o que aconteça, estarei sempre contigo.
                                    Feliz aniversário meu amor, que seu dia seja muito feliz... e que possamos passar essa data juntos mais vezes.
                                    Te amo ❤
                                </p>

                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Page>
    )
}