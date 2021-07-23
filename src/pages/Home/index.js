import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Container,
  ContainerHome,
  ItemMenu,
  ContainerItensMenu,
  ContainerColuna,
  ContainerDetails,
} from "./styles";

import Modal from "../../components/Modal";
import Select from "../../components/Select";

import ImgOverwatch from "../../assets/overwatch.jpg";
import ImgSpider from "../../assets/spiderMan.png";
import ImgGodOfWar from "../../assets/godOfWar.png";
import ImgGhost from "../../assets/ghost.png";
import ImgTomClancys from "../../assets/tomClancys.jpg";
import ImgGodOfWarII from "../../assets/godOfWarII.jpg";
import ImgWatchdogs from "../../assets/watchdogs.jpg";
import ImgBatman from "../../assets/batman.jpg";
import { useState } from "react";

// Função com Modal onde traria os detalhes do Produto
// No caso se tivesse vindo de uma API, consumindo cada jogo teria sua descrição e plataformas
function Details() {

  return (
    <ContainerDetails>
      <h2>Descrição:</h2>
      <h5>Overwatch é um jogo de tiro em equipe que conta com um elenco diversificado de heróis poderosíssimos. 
        Viaje pelo mundo, monte uma equipe e dispute objetivos em combates 6v6 de tirar o fôlego.</h5>
      <h2>Plataformas:</h2>
      <h3>PC/PS4/XBoxOne/Switch</h3>
    </ContainerDetails>
  )
}

// Função com Modal onde traria informações na hora de efetuar a compra do Produto
function Purchase() {

  return (
    <ContainerDetails>
      <h2>Preço:</h2>
      <h5>R$ 99,99</h5>
        <h2>Lojas com o Produto disponível:</h2>
{/* Select com lojas que teria o jogo disponível, e ao clicar traria a localização
através da API do google maps, mas precisa de uma conta na Google Cloud. */}
      <Select>
      <option value="">Selecione a Loja Desejada</option>
                  <option value="">Loja tambóre</option>
                  <option value="">Loja União</option>
                  <option value="">Loja Iguatemi</option>
      </Select>
      <button>Finalizar Compra</button>
    </ContainerDetails>
  )
}
   
function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const [showPurchase, setShowPurchase] = useState(false);

  return (
    <>
    {/* chamando modal de detalhes do produto */}
    {showDetails && (
      <Modal
        handleClose={() => setShowDetails(false)}
        >
          <Details />
        </Modal>
    )}

    {/* chamando modal de valores, lojas do produto */}
    {showPurchase && (
      <Modal
        handleClose={() => setShowPurchase(false)}
        >
          <Purchase />
        </Modal>
    )}
    <Header />
      <Container>
        <ContainerHome>
          <h3>Bem Vindo a Smart Games!</h3>
          <ContainerItensMenu>
            <ContainerColuna>
              <ItemMenu>
                <h4>Overwatch</h4>
                <img src={ImgOverwatch} alt="Overwatch" />
                <button onClick={() => setShowPurchase(true)}>Comprar</button>
                <button onClick={() => setShowDetails(true)}>Ver Mais</button>
              </ItemMenu>
              <ItemMenu>
                <h4>Spider-Man</h4>
                <img src={ImgSpider} alt="SpiderMan" />
                <button onClick={() => setShowPurchase(true)}>Comprar</button>
                <button onClick={() => setShowDetails(true)}>Ver Mais</button>
              </ItemMenu>
            </ContainerColuna>
            <ContainerColuna>
              <ItemMenu>
                <h4>God Of War</h4>
                <img src={ImgGodOfWar} alt="GodOfWar" />
                <button onClick={() => setShowPurchase(true)}>Comprar</button>
                <button onClick={() => setShowDetails(true)}>Ver Mais</button>
              </ItemMenu>
              <ItemMenu>
                <h4>Ghost of Tsushima</h4>
                <img src={ImgGhost} alt="Ghost" />
                <button onClick={() => setShowPurchase(true)}>Comprar</button>
                <button onClick={() => setShowDetails(true)}>Ver Mais</button>
              </ItemMenu>
            </ContainerColuna>
            <ContainerColuna>
              <ItemMenu>
                <h4>Tom Clancy's</h4>
                <img src={ImgTomClancys} alt="TomClancys" />
                <button onClick={() => setShowPurchase(true)}>Comprar</button>
                <button onClick={() => setShowDetails(true)}>Ver Mais</button>
              </ItemMenu>
              <ItemMenu>
                <h4>God of War III</h4>
                <img src={ImgGodOfWarII} alt="GodOfWarII" />
                <button onClick={() => setShowPurchase(true)}>Comprar</button>
                <button onClick={() => setShowDetails(true)}>Ver Mais</button>
              </ItemMenu>
            </ContainerColuna>
            <ContainerColuna>
              <ItemMenu>
                <h4>Watch Dogs 2</h4>
                <img src={ImgWatchdogs} alt="Watchdogs" />
                <button onClick={() => setShowPurchase(true)}>Comprar</button>
                <button onClick={() => setShowDetails(true)}>Ver Mais</button>
              </ItemMenu>
              <ItemMenu>
                <h4>Batman Arkham City</h4>
                <img src={ImgBatman} alt="Batman" />
                <button onClick={() => setShowPurchase(true)}>Comprar</button>
                <button onClick={() => setShowDetails(true)}>Ver Mais</button>
              </ItemMenu>
            </ContainerColuna>           
          </ContainerItensMenu>
        </ContainerHome>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
