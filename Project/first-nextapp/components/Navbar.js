import Link from "next/link"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
  return (
    <div className="bgImage" >
     <nav >
     <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/data">Data</Nav.Link>
            <Nav.Link href="/addData">AddData</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </nav>
    </div>
  )
}

export default Navbars