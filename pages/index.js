import Head from 'next/head'
import {
  Jumbotron,
  Button,
  Container,
  Image,
  Row,
  Col,
  Card,
} from 'react-bootstrap'
import '../components/icons'

export default function Home() {
  return (
    <>
      <Head></Head>

      <main>
        <Image
          src="/lights-on-sea-background-waves_196038-161.webp"
          width="100%"
          fluid
        />
        <Jumbotron className="col-8 mt-5 mx-auto">
          <h1>어서오세요!</h1>
          <p>
            웹보안프로그래밍 3조입니다.<br></br>저희는 여행블로그 사이트를
            만들어보았으며<br></br> 게시물을 눌러보시면 포스팅을 보실수있습니다.
            <br></br>
            아래 버튼을 클릭하시면 팀프로젝트 GITHUB를 보실수 있습니다.{' '}
          </p>
          <p>
            <Button
              variant="primary"
              className="col-4 mx-auto"
              href="http://naver.com"
            >
              3조 깃허브 보러가기
            </Button>
          </p>
        </Jumbotron>
        <Container>
          <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3">
            <Col className="mb-4">
              <Card className="py-5 shadow-lg h-100">
                <Card.Body>
                  <Card.Title>전역후 여수여행</Card.Title>
                  <Image
                    src="/KakaoTalk_20221209_144326801_16.jpg"
                    width="250"
                    fluid
                  />
                  <br></br>
                  글쓴이: 이건우<br></br>
                  올린날짜:2022.12.09
                  <br />
                  <br />
                  <h3>관광장소, 먹거리등을 소개하는 포스팅</h3>
                </Card.Body>
                <Button
                  variant="primary"
                  className="col-4 mx-auto"
                  href="./sub/post1"
                >
                  {' '}
                  보러가기
                </Button>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card className="pricingCard py-5 shadow-lg h-100">
                <Card.Body>
                  <Card.Title>crema dark et french press</Card.Title>
                  Cream arabica strong wings eu milk that breve. <br />
                  <br />
                  <p>
                    Cappuccino Con kopi-luwak grinder extraction grounds coffee
                    ut rich chicory, spice black mocha viennese so au half
                    espresso siphon Body, Americano percolator Aftertaste
                    Cappuccino lungo sweet Bar aromatic.
                  </p>
                </Card.Body>
                <Button variant="primary" className="col-4 mx-auto" href="/">
                  Get a quote
                </Button>
              </Card>
            </Col>
            <Col className="mb-4 offset-md-3 offset-xl-0">
              <Card className="pricingCard py-5 shadow-lg h-100 ">
                <Card.Body>
                  <Card.Title>
                    Percolator at froth half decaffeinated
                  </Card.Title>
                  <p>
                    Sweet medium latte and Cappuccino, Aroma grounds Con
                    Aftertaste in mountain iced cup trade cappuccino, french
                    black so turkish siphon skinny extra that. Kopi-luwak robust
                    extra macchiato beans dark black, aromatic trade medium java
                    sugar, shot wings turkish mazagran spoon. Percolator
                  </p>
                </Card.Body>
                <Button variant="primary" className="col-4 mx-auto" href="/">
                  {' '}
                  Learn More
                </Button>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card className="pricingCard py-5 shadow-lg h-100">
                <Card.Body>
                  <Card.Title>crema dark et french press</Card.Title>
                  Cream arabica strong wings eu milk that breve. <br />
                  <br />
                  <p>
                    Cappuccino Con kopi-luwak grinder extraction grounds coffee
                    ut rich chicory, spice black mocha viennese so au half
                    espresso siphon Body, Americano percolator Aftertaste
                    Cappuccino lungo sweet Bar aromatic.
                  </p>
                </Card.Body>
                <Button variant="primary" className="col-4 mx-auto" href="/">
                  Get a quote
                </Button>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card className="pricingCard py-5 shadow-lg h-100">
                <Card.Body>
                  <Card.Title>crema dark et french press</Card.Title>
                  Cream arabica strong wings eu milk that breve. <br />
                  <br />
                  <p>
                    Cappuccino Con kopi-luwak grinder extraction grounds coffee
                    ut rich chicory, spice black mocha viennese so au half
                    espresso siphon Body, Americano percolator Aftertaste
                    Cappuccino lungo sweet Bar aromatic.
                  </p>
                </Card.Body>
                <Button variant="primary" className="col-4 mx-auto" href="/">
                  Get a quote
                </Button>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card className="pricingCard py-5 shadow-lg h-100">
                <Card.Body>
                  <Card.Title>crema dark et french press</Card.Title>
                  Cream arabica strong wings eu milk that breve. <br />
                  <br />
                  <p>
                    Cappuccino Con kopi-luwak grinder extraction grounds coffee
                    ut rich chicory, spice black mocha viennese so au half
                    espresso siphon Body, Americano percolator Aftertaste
                    Cappuccino lungo sweet Bar aromatic.
                  </p>
                </Card.Body>
                <Button variant="primary" className="col-4 mx-auto" href="/">
                  Get a quote
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="parallax paralsec" />
        <Container>
          <div className="mt-3 p-3 mx-auto">
            <h2>Cafe au Lait</h2>
            <p>
              Foam iced single origin, instant crema sit in acerbic robusta.
              Saucer, frappuccino café au lait fair trade mocha café au lait
              skinny. Black, est cup aftertaste cream roast a as strong barista.
              White so, acerbic redeye, doppio chicory affogato, shop cortado
              coffee wings viennese. French press cappuccino single origin
              dripper qui frappuccino decaffeinated.
            </p>

            <p>
              Strong sweet filter cup grounds, americano robust caffeine to go
              lungo body. Froth ristretto that dark acerbic plunger pot a medium
              half and half. Instant cinnamon grinder et decaffeinated ut
              carajillo frappuccino. Whipped organic chicory café au lait
              cappuccino cortado whipped. Aftertaste, organic, a, extraction
              aftertaste, doppio, sugar variety cortado at froth aged.
            </p>

            <p>
              Grounds lungo, bar cup so a foam. Fair trade con panna id variety
              mocha trifecta brewed kopi-luwak pumpkin spice brewed beans. Aged,
              aroma, chicory, decaffeinated breve, percolator organic and extra
              body. Fair trade half and half macchiato cultivar et sit in
              cappuccino. Dark beans, caffeine variety grinder rich redeye
              acerbic.
            </p>
          </div>
        </Container>
      </main>
      <footer className="footer mt-auto mx-auto py-3 bg-light">
        <div className="container text-center">
          <span className="text-muted text-center">
            Copyright &copy; 2022 Travel by Leegunwoo
          </span>
        </div>
      </footer>
    </>
  )
}
