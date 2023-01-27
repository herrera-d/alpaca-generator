import { useState, SetStateAction, Dispatch } from "react";
import styled from "styled-components";

import "./App.css";
import {
  BODYPART_BUTTONS_NAMES,
  CUSTOMIZE_OPTIONS,
  CustommizationOptions,
} from "./assets/const/buttons";
import AlpacaViewer, {
  AlpacaViewerProps,
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
const MainContent = styled("article")`
  width: 80vw;
  display: flex;
  /* background-color: red; */
`;

const Wrapper = styled("div")``;
const CustomControlsContainer = styled("div")``;

function App() {
  const [optionToCustomize, setOptionToCustomize] =
    useState<AlpacaBodypartName>("hair");

  const [alpacaBodyParts, setAlpacaBodyParts] = useState<
    AlpacaBodyPartsInterface[]
  >([
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
  ]);

  const updateCustomBodyPart = (
    buttonName: CustommizationOptions,
    alpacaBodyParts: AlpacaBodyPartsInterface[]
  ) => {
    let newAlpacaBodyParts = alpacaBodyParts.map((bodypart) => {
      if (bodypart.name === optionToCustomize) {
        return bodypart.selectedCustomization === buttonName;
      }
      return bodypart;
    }) as AlpacaBodyPartsInterface[];

    setAlpacaBodyParts(newAlpacaBodyParts);
    console.log("newAlpacaBodyParts: ", newAlpacaBodyParts);
  };

  // const handleButtonClick = (buttonName: handleClickProps): void => {
  //   console.log("cb");
  //   if (BODYPART_BUTTONS_NAMES.includes(buttonName)) {
  //     setOptionToCustomize(buttonName);
  //     console.log("button pressed: ", buttonName);
  //   } else {
  //     updateCustomBodyPart(buttonName, alpacaBodyParts);
  //   }
  // };

  return (
    <Wrapper>
      <MainContent>
        <AlpacaContainer>
          <AlpacaViewer alpacaBodyParts={alpacaBodyParts} />
        </AlpacaContainer>
        <CustomControlsContainer>
          <CustomizationControls />
        </CustomControlsContainer>

        <article></article>
      </MainContent>
    </Wrapper>
  );
}

export default App;
