import { useState, SetStateAction, Dispatch } from "react";
import styled from "styled-components";

import "./App.css";
import { BUTTONS_LIST } from "./assets/const/buttons";
import AlpacaViewer from "./components/AlpacaViewer";

const AlpacaContainer = styled("article")`
  position: relative;
  width: 360px;
  height: 360px;
  background-color: red;
`;

const StyledButton = styled("button")``;
const MainContent = styled("article")`
  width: 80vw;
  display: flex;
  /* background-color: red; */
`;
const Wrapper = styled("div")``;
const CustomControlsContainer = styled("div")``;

type ButtonListType = {
  name: string;
  variants: string[];
}[];

const RenderButtons = (
  buttons: ButtonListType,
  config: {
    callback: Dispatch<SetStateAction<string>>;
  }
) => {
  return buttons.map((button) => {
    return (
      <StyledButton
        onClick={() => {
          if (config.callback) {
            config.callback(button.name);
            console.log("clicked: ", button.name);
          }
        }}
      >
        {button.name}
      </StyledButton>
    );
  });
};

const alpacaConfig = {
  hair: "default",
  neck: "default",
  earBack: "",
  earFront: "default",
  mouth: "default",
  nose: "default",
  leg: "default",
};

function App() {
  const [selectedBtn, setSelectedBtn] = useState<string>("background");

  return (
    <Wrapper>
      <MainContent>
        <AlpacaContainer>
          <AlpacaViewer alpacaConfig={alpacaConfig} />
        </AlpacaContainer>
        <CustomControlsContainer>
          <>
            <h2>Accesorize the Alpaca</h2>
            {RenderButtons(BUTTONS_LIST, { callback: setSelectedBtn })}
            <h2>Style</h2>
          </>
        </CustomControlsContainer>

        <article></article>
      </MainContent>
    </Wrapper>
  );
}

export default App;
