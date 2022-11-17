import { Navbar, Container, Nav, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbb = () => {
  return (

    <Navbar fixed='top' className={styles.navb} expand="sm">
      <Container>
        <Navbar.Brand>
          <img className={styles.omaricon} src='/omaricon.jpg' width={50} />
        </Navbar.Brand>
        <Navbar.Brand className={styles.omarzubair}>عمر الزبير المرزوقي</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">


            <Link href={"/"} >
              <p className={styles.pnav}>الرئيسية</p>
            </Link>

            <Link href={"/news"}>
              <p className={styles.pnav}>أخبار الرياضة</p>
            </Link>


            <Link href={"/images"}>
              <p className={styles.pnav}>صور رياضية</p>
            </Link>

            <Link href={"/video"}>
              <p className={styles.pnav}>فيديوهات رياضية</p>
            </Link>

            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navbb;