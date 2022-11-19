import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/icons/hytek.png"

function NavbarLayout() {
  return (
    <>
      <Navbar style={{
        position : "absolute",
        width : "1440px",
        height : "80px",
        background:"#fff"
      }}>
      <Container>
          <Navbar.Brand className="d-flex justify-conter">
          <img src={logo} alt="Logo" />
          <div className="ms-2">
                <p className="h2">HYTEK</p>
                <p className="h6">A DataScience Approach</p>
              </div>
         </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarLayout;
