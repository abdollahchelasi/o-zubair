import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Home() {
  return (
    <div dir='rtl' className={styles.container}>
      <Head>
      
        <title>عمر الزبير المرزوقي</title>
        <meta name="description" content="عمر الزبیر المرزوقی - اول حكم يكسر قاعدة احتكار حكام أوربا على نهائيات كاس العالم لكرة اليد" />
        <link rel="icon" href="/omaricon.jpg" />
      </Head>
      <main>

        

        <div className={styles.imgpass}>
          <div className={styles.divpass}>

            <Container>
              <Row>
                <Col sm={12} className={styles.pp}>

                  <Row>
                    <Col sm={12} className={styles.colimg}>
                      <img className={styles.imgomar} src='/passomar.jpg' />
                      <p className={styles.pomar}>عمر الزبير المرزوقي</p>
                    </Col>
                    <hr/>

                    <Col className={styles.pomarr}>
                    <Row>
                      <Col sm={4} className={styles.pomar1}>
                      <p className={styles.davarp}>اول حكم يكسر قاعدة احتكار حكام أوربا على نهائيات كاس العالم لكرة اليد</p>
                      </Col>
                      

                      <Col sm={7} className={styles.pomar2}>
                        
                      </Col>
                    </Row>
                    </Col>

                  </Row>

                </Col>


              </Row>
            </Container>

          </div>
        </div>


        <Container className={styles.homee}>
          <Row>
            <Col sm={12}>
            <h1 className={styles.aboutomar2}>About Omar</h1>
            </Col>
            <Col>
            <img className={styles.aboutomar} src='/omarsarbaz.jpg' width={100}/>
            <h4 className={styles.pomarrr}>Omar Mohammed Zubair Al Marzouqi</h4>
            </Col>
            <Col>
            <p className={styles.txtomar}>

            Captain at Dubai Police

Omar Muhammad Zubair Muhammad al-Marzouqi

Known as Omar Al-Zubayr

International referee and international Olympic handball observer

Dubai Police Captain, General Duty Officer at Al Barsha Police Station

Born March 28, 1971 in Dubai

Referee for 170 international matches
Referee 1050 local matches
Watched 108 international matches so far

He is married and has 7 children (Ashjan, Al-Anoud, Muhammad, Maitha, Ghanem, Abdullah and Afra).

* He started as a player in Al-Nasr Sports Club from 1984 until 1998.

He won many championships with the club for the cubs, juniors and youth stage.

* He began in the field of arbitration in 1996 and obtained the continental badge in 2000 in Muscat, and in 2003 he obtained the international badge in the State of Kuwait and retired from international arbitration in 2014.

He worked as a secretary for the national teams from 2000 to 2009.

* Participated in 60 different championships at the international, Asian, Arab and Gulf levels as an international referee.

* The most prominent tournaments he ruled are the World Olympics in London 2012, the Men’s World Cup twice in Sweden 2011 and Spain 2013, the Confederations Cup twice in Qatar 2011 and 2013, the World Youth Cup twice in Egypt 2009 and Greece 2011, the Women’s World Cup in South Korea 2010 and the Asian Olympics twice in Qatar 2006 and China 2010.


* The first Asian referee to manage the final and semi-finals of the World Cup, where he was able to break the rule of European referees monopoly on the finals.

* Obtaining the Sheikh Khalifa bin Zayed Sports Excellence Award in 2010.

* Obtaining the Sheikh Mohammed bin Rashid Award for Sports Creativity in 2011.

Arbitration for 5 Asian Championships Finals, 3 Presidential Cup Finals, 3 UAE Super Cup Finals, and 3 UAE Federation Cup Finals.

* Arbitration of all Gulf Cooperation Council periodicals and their finals.


* Participating in the World Youth Cup in Brazil and observing 22 matches, the most important of which is the match to determine the third and fourth place, and he is the only one from Asia who represented her as a technical observer in July 2015.

* Participation in the Asian qualifiers for the Rio Olympics in Doha and monitored 25 matches, the most important of which was the final in November 2015.

* Participation in the Women’s World Cup in Denmark and observing 16 matches, the most important of which was the quarter-final match, and he is the only one from Asia who represented her as a technical observer in December 2015.

* Participation in the Olympic qualifiers in Rio Janeiro in Sweden and monitoring the number of 4 matches in it, and he is the only one from Asia who represented her as a technical observer in April 2016.

* Managing the final of the Emir of the State of Qatar as a technical observer for the month of May 2016.

* Participation in the Women’s World Cup in Moscow and managing 26 matches, the fifth and sixth place matches in July 2016.

* Participation in the Summer Olympics in Rio Janeiro, Brazil, and he is the only Asian who represents it as a technical observer and monitors 12 matches, including a quarter-final match and another semi-final match, all of which are matches for the men’s category in August 2016.

* Participation in the Seventh Asian Junior Championships in Bahrain in September 2016, qualifying for the World Cup as a technical observer in September 2016.

• Participation in the thirteenth Arab Championship for Cup Winners’ Clubs in March 2017 in Tunisia.

• Participation in the Special Olympics in Abu Dhabi 2019.


            </p>
            </Col>
          </Row>
        </Container>


      </main>

    </div>
  )
}
