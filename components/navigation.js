import { Nav, Navbar, Container, Image } from 'react-bootstrap'
import Link from 'next/link'

export default function Navigation() {
  return (
    <header>
      <Container>
        <Navbar variant="light" expand="md">
          <Navbar.Brand className="pt-3">
            <Link href="/">
              <a>
                <Image
                  src="/logo-ipsum.png"
                  alt="Grouparoo Logo"
                  width={150}
                  height={110}
                />
              </a>
            </Link>
            <span className="d-none">Company</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mt-2">
              <Nav.Link>
                <Link href="/events">
                  <a className="nav-link" role="button">
                    Events
                  </a>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link href="/menu">
                  <a className="nav-link" role="button">
                    Menu
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/pricing">
                  <a className="nav-link" role="button">
                    Pricing
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/blog">
                  <a className="nav-link" role="button">
                    Blog
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <div className="right">
                  <Link href="/community">
                    <a className="nav-link" role="button">
                      로그인
                    </a>
                  </Link>
                  <Link href="/login">
                    <a className="nav-link" role="button">
                      회원가입
                    </a>
                  </Link>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}
