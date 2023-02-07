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
