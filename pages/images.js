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
                        <Link href={"/a.jpg"} target="#">
                            <img className={styles.img1} src="/a.jpg" width={200} />
                        </Link>
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default images;