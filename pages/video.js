
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/Home.module.css'

const video = () => {
    return (
        <>
            <Head>
                <title>عمر المرزوقی - فيديوهات رياضية</title>
            </Head>

            <Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col sm={12}>
                        <h3 className={styles.news111}>فيديوهات رياضیة</h3>
                    </Col>

                    <Container fluid className={styles.contvid}>
                        <Row>



                            <Col sm={4}>

                                <video className={styles.vid} controls  src="/video/v1.mp4" />

                            </Col>
                            <Col sm={4}>

                                <video className={styles.vid} controls  src="/video/v2.mp4" />

                            </Col>

                            <Col sm={4}>

                                <video className={styles.vid} controls  src="/video/v3.mp4" />

                            </Col>

                            <Col sm={6}>

                                <video className={styles.vid} controls  src="/video/v5.mp4" />

                            </Col>

                            <Col sm={6}>

                                <video className={styles.vid} controls  src="/video/v6.mp4" />

                            </Col>

                            <Col sm={4}>

                                <video className={styles.vid} controls  src="/video/v7.mp4" />

                            </Col>

                            <Col sm={4}>

                                <video className={styles.vid} controls src="/video/v8.mp4" />

                            </Col>


                            <Col sm={4}>

                                <video className={styles.vid} controls  src="/video/v9.mp4" />

                            </Col>

                            <Col sm={6}>

                                <video className={styles.vid} controls  src="/video/v10.mp4" />

                            </Col>


                            <Col sm={6}>

                                <video className={styles.vid} controls  src="/video/v11.mp4" />

                            </Col>

                            <Col sm={6}>

                                <video className={styles.vid} controls  src="/video/v12.mp4" />

                            </Col>

                            <Col sm={6}>

                                <video className={styles.vid} controls  src="/video/v13.mp4" />

                            </Col>

                            <Col sm={6}>

                                <video className={styles.vid} controls  src="/video/v14.mp4" />

                            </Col>

                            <Col sm={6}>

                                <video className={styles.vid} controls src="/video/v15.mp4" />

                            </Col>

                        </Row>
                    </Container>


                </Row>
            </Container>
        </>
    );
}

export default video;