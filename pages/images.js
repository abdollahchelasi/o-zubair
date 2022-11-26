import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/Home.module.css'

const images = () => {
    return (
        <>
            <Head>
                <title>عمر المرزوقی - صور رياضية</title>
            </Head>

            <Container fluid className={styles.contimg}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row>
                    
                    <Col sm={12} >
                        <Link href={"/img/i1.jpg"} target='_blank'>
                            <img className={styles.img1} src="/img/i1.jpg" />
                        </Link>
                    </Col>


                    <Col sm={6} >
                        <Link href={"/img/i2.jpg"} target='_blank'>
                            <img className={styles.img1} src="/img/i2.jpg" />
                        </Link>
                    </Col>


                    <Col sm={4} >
                        <Link href={"/img/i3.jpg"} target='_blank'>
                            <img className={styles.img1} src="/img/i3.jpg" />
                        </Link>
                    </Col>

                    <Col sm={8} >
                        <Link href={"/img/i4.jpg"} target='_blank'>
                            <img className={styles.img1} src="/img/i4.jpg" />
                        </Link>
                    </Col>

                    <Col sm={10} >
                        <Link href={"/img/i5.jpg"} target='_blank'>
                            <img className={styles.img1} src="/img/i5.jpg" />
                        </Link>
                    </Col>











































                </Row>
            </Container>
        </>
    );
}

export default images;