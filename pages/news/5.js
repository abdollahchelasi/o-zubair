import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";


const news5 = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="(Handball referee Al Marzouqi to adjudicate at qualifying event Official pencilled in for Men’s Olympic Qualification Tournament to be held in Malmo, Sweden) عمر الزبير المرزوقي - أخبار الرياضة" />
                <link rel="icon" href="/news5.jpg" />
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
                        <Link href={"/news5.jpg"}>
                            <Image className={styles.n1} src="/news5.jpg" layout='fixed' alt="khabar5" height={150}  width={300} />
                        </Link>
                        <h4 className={styles.pnews1}>
                        Handball referee Al Marzouqi to adjudicate at qualifying event

Official pencilled in for Men’s Olympic Qualification Tournament to be held in Malmo, Sweden
                        </h4>

                    </Col>

                    <Col className={styles.n2} >
                        <p>
                        Dubai: The UAE’s Omar Zubair Al Marzouqi will be one of the senior officials at next week’s International Handball Federation (IHF) Men’s Olympic Qualification Tournament to be held in Malmo, Sweden.

The international body for handball is conducting a final series of three qualifiers at the same time in Sweden, Denmark and Poland and Al Marzouqi has got the nod for supervising the four-team competition in Malmo.

As per the format for Olympic Games, the best five teams coming through various international competitions, including the World Championships, join hosts Brazil in the main draw. The remaining six teams will advance to Rio through next week’s three qualifiers.

Egypt, France, Argentina, Qatar and Germany will join Brazil as the six teams who have earned qualification, while the three qualifying rounds will finalise the other six teams.

This is the fourth time Al Marzouqi has made the grade in officiating at an international handball competition.

Iran, Sweden, Spain and Slovenia have been confirmed for the qualifier in Malmo to be held from April 8 to 10. Hosts Poland, Macedonia, Chile and Tunisia will play in Gdansk, while the other hosts Denmark will be joined by Croatia, Norway and Bahrain in Herning.

Only the top two finishers will book their ticket to Rio at the end of three days of action.

There will be three qualifying rounds to decide the six teams who can advance to Rio.

Each of the three rounds will enable the two top finishers to advance for a meeting with the six teams who have already qualified through the earlier competitions.
                        </p>
                    </Col>


                </Row>
            </Container>
        </div>
    );
}

export default news5;