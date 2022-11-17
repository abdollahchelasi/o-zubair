import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Head from "next/head";


const news4 = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="(Omar Al Zubair Al Marzouqi honours Deepak Kumar, managing director of Ayal Perfumes LLC) عمر الزبير المرزوقي - أخبار الرياضة" />
                <link rel="icon" href="/news4.jpg" />
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
                        <Link href={"/news4.jpg"}>
                            <img className={styles.n1} src="/news4.jpg" width={100} />
                        </Link>
                        <h4 className={styles.pnews1}>
                        Omar Al Zubair Al Marzouqi honours Deepak Kumar, managing director of Ayal Perfumes LLC
                        </h4>

                    </Col>

                    <Col className={styles.n2} >
                        <p>
                        Abdulaziz Al-Nuaimi, former Chairman of the Board of Directors of Khorfakkan Club, raised several questions about the decline in football in terms of local participation, in contrast to the development witnessed by the country in various fields and national achievements that have contributed to strengthening its prestigious position at the global level.

Salem Johar, former UAE national soccer team star, said : “Sports councils are of great importance because they bring together athletes and provide a wide opportunity to exchange ideas and suggest programmes that are of great importance to developing sports.”

He also called for raising the level of programmes and events that lead to the discovery and development of talent, especially at the school level.

Juma Al Abdouli, manager of Dibba Al Fujairah team, praised the goals of the sports councils.

He said that on a personal level, he succeeded in forming good relations in the sports community from which he benefited greatly in enriching knowledge and exchanging ideas because sport is an arena that brings people together.

Saif Al Rahman Amir, Chairman of the Board of Directors, Hudhayfa Ibrahim, a founding member of the team, and Asim Mohsen, Leader of the Creativity and Innovation Committee, honored the attendees with shields and certificates of appreciation.

Deepak Kumar, director of Ayal perfume stores in Dubai, supported the event.
                        </p>
                    </Col>


                </Row>
            </Container>
        </div>
    );
}

export default news4;