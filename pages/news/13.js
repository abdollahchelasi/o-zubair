import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";


const news13 = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="(الزبير , عميد حكام اليد يتدرب في البيت) عمر الزبير المرزوقي - أخبار الرياضة" />
                <link rel="icon" href="/news13.jpg" />
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
                        <Link href={"/news13.jpg"}>
                            <Image className={styles.n1} src="/news13.jpg" layout='fixed' alt="khabar13" height={150}  width={300} />
                        </Link>
                        <h4 className={styles.pnews1}>
                        «الزبير» عميد حكام اليد يتدرب في البيت
                        </h4>

                    </Col>

                    <Col className={styles.n2} >
                        <p>
                        يستثمر عمر الزبير المرزوقي «عميد حكام كرة اليد» هذه الأيام، الخبرات الكبيرة التي اكتسبها من مسيرته الحافلة بالإنجازات في الساحة الرياضة المحلية والدولية، والتي امتدت لأكثر من 30 عاماً، وذلك بممارسة الرياضة يومياً مع أفراد أسرته الرياضية، في ساحة بيته بمنطقة البرشاء بدبي، والتي جهزها بالعديد من المعدات الرياضية الخاصة للتدريب، كما يحرص على متابعة أبنائه والتزامهم بالتحصيل العلمي عن بُعد، ويعوضهم عن توقف النشاط الرياضي، إلتزاماً منه بالإجراءات الاحترازية للتغلب على تداعيات هذا الوباء العالمي، وأكد الزبير تعزيز علاقته مع زملائه حكام اللعبة بالتواصل معهم عن بعد. 
                        </p>
                    </Col>


                </Row>
            </Container>
        </div>
    );
}

export default news13;