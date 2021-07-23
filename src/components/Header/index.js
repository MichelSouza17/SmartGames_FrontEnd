import { Container } from "./styles";

import Imglogo from "../../assets/smartGames.png";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  return (
    <Container>
      <img src={Imglogo} alt="logo" />
    </Container>
  );
}

export default Header;
