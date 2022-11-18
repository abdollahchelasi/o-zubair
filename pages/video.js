
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/Home.module.css'

const video = () => {
    return (
        <>
            <Head>
                <title>عمر المرزوقی - فيديوهات رياضية</title>
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
                    <Col sm={12}>
                        <h3 className={styles.news1}>فيديوهات رياضیة</h3>
                    </Col>

                    <Container fluid className={styles.contvid}>
                        <Row>



                        <Col >

<video className={styles.vid} controls width={300} src="/video/v1.mp4" />

</Col>
<Col >

<video className={styles.vid} controls width={300} src="/video/v2.mp4" />

</Col>

<Col >

<video className={styles.vid} controls width={300} src="/video/v3.mp4" />

</Col>

<Col >

<video className={styles.vid} controls width={300} src="/video/v5.mp4" />

</Col>

<Col >

<video className={styles.vid} controls width={300} src="/video/v6.mp4" />

</Col>

<Col >

<video className={styles.vid} controls width={300} src="/video/v7.mp4" />

</Col>

<Col >

<video className={styles.vid} controls width={300} src="/video/v8.mp4" />

</Col>


<Col >

<video className={styles.vid} controls width={300} src="/video/v9.mp4" />

</Col>

<Col >

<video className={styles.vid} controls width={300} src="/video/v10.mp4" />

</Col>


<Col >

<video className={styles.vid} controls width={300} src="/video/v11.mp4" />

</Col>

<Col >

<video className={styles.vid} controls width={300} src="/video/v12.mp4" />

</Col>

<Col >

<video className={styles.vid} controls width={300} src="/video/v13.mp4" />

</Col>

<Col >

<video className={styles.vid} controls width={300} src="/video/v14.mp4" />

</Col>

<Col >

<video className={styles.vid} controls width={300} src="/video/v15.mp4" />

</Col>

                        </Row>
                    </Container>


                </Row>
            </Container>
        </>
    );
}

export default video;