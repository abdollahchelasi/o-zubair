import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/Home.module.css'
import Head from "next/head";
import Link from "next/link";
import Navbb from "./Navbb";
import Image from "next/image";

const Layout = ({ children }) => {
    return (
        <div className={styles.divbody} dir='rtl'>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/omaricon.jpg" />
                <title>عمر الزبير المرزوقي </title>


            </Head>
            <Navbb />

            <Container>
                <Row>
                    <Col sm={12}>{children}</Col>
                </Row>
            </Container>

            <footer className={styles.footer}>
                <Container fluid>
                    <Row>
                        <Col className={styles.dastebandi}>
                            <div>
                                <h3>Omar Mohammed Zubair Al Marzouqi</h3>
                                <hr />
                                <Link href={"/"}>
                                    <p className={styles.pfoot}>الرئيسية</p>
                                </Link>
                                <Link href={"/news"}>
                                    <p className={styles.pfoot}>أخبار الرياضة</p>

                                </Link>
                                <Link href={"/images"}>
                                    <p className={styles.pfoot}>صور رياضية</p>

                                </Link>

                                <Link href={"/video"}>
                                    <p className={styles.pfoot}>فيديوهات رياضية</p>

                                </Link>
                            </div>
                        </Col>
                        <Col className={styles.omarz}>
                            <div>
                                <Image className={styles.omaricon} src="/omaricon.jpg" alt="Omar Zubair" layout='fixed' height={50}  width={50} />
                                <p>عمر الزبير المرزوقي</p>
                            </div>
                        </Col>

                        <Col className={styles.develop} sm={12}>
                            <p>Developer By <a href="https://abdollahchelasi.vercel.app" target={"#"}><span className={styles.abdo}>ABDOLLAH <Image className={styles.imgabdo} src="/a.jpg" alt="Abdollah Chelasi" layout='fixed' height={50}  width={50}/> CHELASI</span></a> </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default Layout