import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Head from "next/head";


const news3 = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="(Former UAE soccer stars, Sports Councils' members feted by Omar Al Zubair) عمر الزبير المرزوقي - أخبار الرياضة" />
                <link rel="icon" href="/news3.jpg" />
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
                        <Link href={"/news3.jpg"}>
                            <img className={styles.n1} src="/news3.jpg" width={100} />
                        </Link>
                        <h4 className={styles.pnews1}>
Former UAE soccer stars, Sports Councils' members feted by Omar Al Zubair
</h4>

                    </Col>

                    <Col className={styles.n2} >
                        <p>
                        International Olympic handball referee Omar Al Zubair Al Marzouqi with dignitaries poses for a picture after the felicitation ceremony.

Recognizing the efforts, the international Olympic handball referee Omar Al Zubair Al Marzouqi honoured eminent UAE sports personalities in a ceremony held at his majlis inside his house in Al Warqa, Dubai.

A number of former football players, Sports Council members and board members of the local clubs were feted during the ceremony.

The ceremony was held in association with some institutions and private companies.

During the discussion, the former players and dignitaries stressed on the importance of sports councils role in framing ideas, activating community communication and promoting local talent.

They said that schools and ‘Al Furjan’ are mines for discovering sports talents in light of the apparent decline in its discovery over the past years.

Earlier, Omar Al Zubair Al Marzouqi, welcomed the attendees and thanked the them for their keenness to participate such discussions adding that the goal of meeting of different generations of athletes contributes to strengthening social cohesion and launching initiatives that support development, based on the values inherited from the Emirati society.
                        </p>
                    </Col>


                </Row>
            </Container>
        </div>
    );
}

export default news3;