import { useState } from "react";
import styled from "styled-components";

import "./App.css";
import { CustommizationOptions } from "./const/buttons";
import AlpacaViewer, {
  AlpacaConfigurationOption,
  ConfigType,
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
  const AlpacaInitialState: AlpacaConfigurationOption[] = [
    {
      selectedType: "hair",
      selectedSubType: "default",
    },
    {
      selectedType: "eyes",
      selectedSubType: "default",
    },
    {
      selectedType: "ears",
      selectedSubType: "tilt-backward",
    },
    {
      selectedType: "leg",
      selectedSubType: "default",
    },
    {
      selectedType: "mouth",
      selectedSubType: "default",
    },
    {
      selectedType: "neck",
      selectedSubType: "default",
    },
    {
      selectedType: "nose",
    },
  ];
  const [alpacaParts, setAlpacaParts] =
    useState<AlpacaConfigurationOption[]>(AlpacaInitialState);

  const updatePart = (
    selectedType: ConfigType,
    selectedSubType?: CustommizationOptions
  ) => {
    let newAlpacaPart = alpacaParts.map((bodypart) => {
      if (bodypart.selectedType === selectedType) {
        bodypart.selectedSubType = selectedSubType;
        return bodypart;
      }
      return bodypart;
    }) as AlpacaConfigurationOption[];

    setAlpacaParts(newAlpacaPart);
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
