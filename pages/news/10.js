import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";


const news10 = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="(مراقبة 22 مباراة في كأس العالم) عمر الزبير المرزوقي - أخبار الرياضة" />
                <link rel="icon" href="/news10.jpg" />
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
                        <Link href={"/news10.jpg"}>
                            <Image className={styles.n1} src="/news10.jpg" layout='fixed' alt="khabar10" height={150}  width={300} />
                        </Link>
                        <h4 className={styles.pnews1}>
                        مراقبة 22 مباراة في كأس العالم
                        </h4>

                    </Col>

                    <Col className={styles.n2} >
                        <p>
                        أشار عمر الزبير إلى أنه شارك في كأس العالم للشباب في البرازيل، وقام بمراقبة 22 مباراة، وقال: شاركت في التصفيات الآسيوية لأولمبياد ريو بالدوحة، وراقبت 25 مباراة كما راقبت 16 مباراة في كأس العالم للسيدات بالدنمارك، وشاركت في ملحق تصفيات أولمبياد ريو دي جانيرو بالسويد، وكشف الزبير أنه سيشارك في المراقبة الفنية ببطولة كأس العالم للشابات بموسكو يوليو 2016، وأولمبياد ريو بالبرازيل أغسطس 2016.
                        </p>
                    </Col>


                </Row>
            </Container>
        </div>
    );
}

export default news10;