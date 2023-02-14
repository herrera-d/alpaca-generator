import { useState } from "react";
import styled from "styled-components";

import "./App.css";
import AlpacaViewer, {
  AlpacaConfigurationOption,
  TargetType,
} from "./components/AlpacaViewer";
import CustomizationControls from "./components/CustomizationControls";
import { CustomizationOption } from "./const/buttons";

const AlpacaContainer = styled("article")`
  position: relative;
  width: 100%;
  height: 360px;
`;
const MainContent = styled("div")`
  /* display: flex;
  margin: 0 auto;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Wrapper = styled("div")`
  @media (min-width: 768px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const CustomControlsWrapper = styled("div")`
  //max-width: 458px;
`;

function App() {
  const AlpacaInitialState: AlpacaConfigurationOption[] = [
    {
      selectedTarget: "hair",
      selectedCustomization: "default",
    },
    {
      selectedTarget: "eyes",
      selectedCustomization: "default",
    },
    {
      selectedTarget: "ears",
      selectedCustomization: "tilt-backward",
    },
    {
      selectedTarget: "leg",
      selectedCustomization: "default",
    },
    {
      selectedTarget: "mouth",
      selectedCustomization: "default",
    },
    {
      selectedTarget: "neck",
      selectedCustomization: "default",
    },
    {
      selectedTarget: "accessories",
    },
    {
      selectedTarget: "backgrounds",
      selectedCustomization: "2A5CA7",
    },
    {
      selectedTarget: "nose",
      selectedCustomization: "",
    },
  ];
  const [alpacaParts, setAlpacaParts] =
    useState<AlpacaConfigurationOption[]>(AlpacaInitialState);

  const updatePart = (
    selectedType: TargetType,
    selectedSubType?: CustomizationOption
  ) => {
    let newAlpacaConfiguration = alpacaParts.map((item) => {
      if (item.selectedTarget === selectedType) {
        item.selectedCustomization = selectedSubType;
        return item;
      }
      return item;
    }) as AlpacaConfigurationOption[];

    setAlpacaParts(newAlpacaConfiguration);
  };
  return (
    <Wrapper>
      <MainContent>
        <AlpacaContainer>
          <AlpacaViewer itemsToRender={alpacaParts} />
        </AlpacaContainer>
        <CustomControlsWrapper>
          <CustomizationControls updatePart={updatePart} />
        </CustomControlsWrapper>
      </MainContent>
    </Wrapper>
  );
}

export default App;
