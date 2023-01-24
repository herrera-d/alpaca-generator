import { useState } from "react";
import styled from "styled-components";
import Neck from "./assets/neck/default.png";
import Nose from "./assets/nose.png";
import Mouth from "./assets/mouth/default.png";
import Eyes from "./assets/eyes/default.png";
// import Accesories from "./assets/accessories/default.png";
import EarBack from "./assets/ears/tilt-backward.png";
import EarFront from "./assets/ears/tilt-forward.png";
import Leg from "./assets/leg/default.png";
import Background from "./assets/backgrounds/blue50.png";

import "./App.css";
import { BUTTONS_LIST } from "./assets/const/buttons";

const AlpacaContainer = styled("article")`
  position: relative;
  width: 360px;
  height: 360px;
  background-color: red;
`;
interface AlpacaBodyPartProps {
  zIndex?: string;
}

const AlpacaBodyPart = styled("img")`
  position: absolute;
  height: 100%;
  left: 0px;
  bottom: 0px;
  z-index: ${(props: AlpacaBodyPartProps) =>
    props.zIndex ? props.zIndex : "0"};
`;

const StyledButton = styled("button")``;
const MainContent = styled("section")``;
const Wrapper = styled("div")``;
const CustomControlsContainer = styled("div")``;

const Button = ({ btnTitle }: { btnTitle: string }) => (
  <StyledButton>{btnTitle}</StyledButton>
);

const RenderButtons = (
  buttons: {
    name: string;
    variants: string[];
  }[]
) => {
  return buttons.map((button) => {
    return <Button btnTitle={button.name} />;
  });
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <h1>Alpaca Generator v1.0</h1>
      <MainContent>
        <AlpacaContainer>
          <img src={Background} style={{ width: "100%" }} />
          {/* <img src={Accesories} /> */}
          <AlpacaBodyPart src={EarBack} />
          <AlpacaBodyPart src={EarFront} />
          <AlpacaBodyPart src={Eyes} zIndex="10" />
          <AlpacaBodyPart src={Mouth} zIndex="10" />
          <AlpacaBodyPart src={Nose} />
          <AlpacaBodyPart src={Neck} />
          <AlpacaBodyPart src={Leg} />
          <button>Ramdon</button>
          <button>Download</button>
        </AlpacaContainer>
        <CustomControlsContainer>
          {RenderButtons(BUTTONS_LIST)}
        </CustomControlsContainer>

        <article></article>
      </MainContent>
    </Wrapper>
  );
}

export default App;
