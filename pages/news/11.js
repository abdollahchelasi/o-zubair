import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Head from "next/head";


const news11 = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="(الشارة الدولية 2003 والاعتزال 2014) عمر الزبير المرزوقي - أخبار الرياضة" />
                <link rel="icon" href="/news11.jpg" />
                <title>عمر الزبير المرزوقي - أخبار الرياضة</title>
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
                <br />
                <Row>
                    <Col className={styles.n01}>
                        <Link href={"/news11.jpg"}>
                            <img className={styles.n1} src="/news11.jpg" />
                        </Link>
                        <h4 className={styles.pnews1}>
                        الشارة الدولية 2003 والاعتزال 2014
                        </h4>

                    </Col>

                    <Col className={styles.n2} >
                        <p>
                        بدا عمر الزبير مسيرته في كرة اليد بنادي النصر عام 1984 وحتى 1998، ثم انتقل إلى التحكيم عام 1996 وحصل على الشارة القارية 2000، والشارة الدولية في 2003، واعتزل التحكيم الدولي عام 2014، وتسلم مهام سكرتير لجنة المنتخبات على مدار 9 سنوات. وقال: شاركت في 60 بطولة مختلفة على المستوى الدولي والآسيوي والعربي والخليجي كحكم دولي، وأدرت 5 نهائيات في البطولات الآسيوية.
                        </p>
                    </Col>


                </Row>
            </Container>
        </div>
    );
}

export default news11;