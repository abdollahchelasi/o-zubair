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

            <Container>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Row>
                    <Col >
                        <Link href={"/img/i1.jpg"} target='_blank'>
                            <img className={styles.img1} src="/img/i1.jpg" width={200} />
                        </Link>
                    </Col>


                    <Col >
                        <Link href={"/img/i2.jpg"} target='_blank'>
                            <img className={styles.img1} src="/img/i2.jpg" width={200} />
                        </Link>
                    </Col>


                    <Col >
                        <Link href={"/img/i3.jpg"} target='_blank'>
                            <img className={styles.img1} src="/img/i3.jpg" width={200} />
                        </Link>
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default images;