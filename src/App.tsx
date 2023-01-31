import { useState } from "react";
import styled from "styled-components";

import "./App.css";
import { CustommizationOptions } from "./assets/const/buttons";
import AlpacaViewer, {
  AlpacaBodyPartsInterface,
  AlpacaBodypartName,
} from "./components/AlpacaViewer";
import CustomizationControls from "./components/CustomizationControls";

const AlpacaContainer = styled("article")`
  position: relative;
  width: 360px;
  height: 360px;
  background-color: red;
`;
const MainContent = styled("div")`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Wrapper = styled("div")`
  width: 100vw;
  display: flex;
  justify-items: center;
`;
const CustomControlsWrapper = styled("div")`
  margin-left: 60px;
  max-width: 458px;
`;

function App() {
  const AlpacaInitialState: AlpacaBodyPartsInterface[] = [
    {
      name: "hair",
      selectedCustomization: "default",
    },
    {
      name: "eyes",
      selectedCustomization: "default",
    },
    {
      name: "ears",
      selectedCustomization: "tilt-backward",
    },
    {
      name: "leg",
      selectedCustomization: "default",
    },
    {
      name: "mouth",
      selectedCustomization: "default",
    },
    {
      name: "neck",
      selectedCustomization: "default",
    },
  ];
  const [alpacaBodyParts, setAlpacaBodyParts] =
    useState<AlpacaBodyPartsInterface[]>(AlpacaInitialState);

  const updateBodyPart = (
    newBodyPartVariant: CustommizationOptions,
    target?: AlpacaBodypartName
  ) => {
    let newAlpacaBodyParts = alpacaBodyParts.map((bodypart) => {
      if (bodypart.name === target) {
        bodypart.selectedCustomization = newBodyPartVariant;
        return bodypart;
      }
      return bodypart;
    }) as AlpacaBodyPartsInterface[];

    setAlpacaBodyParts(newAlpacaBodyParts);
  };
  return (
    <Wrapper>
      <MainContent>
        <AlpacaContainer>
          <AlpacaViewer alpacaBodyParts={alpacaBodyParts} />
        </AlpacaContainer>
        <CustomControlsWrapper>
          <CustomizationControls updateBodyPart={updateBodyPart} />
        </CustomControlsWrapper>
      </MainContent>
    </Wrapper>
  );
}

export default App;
