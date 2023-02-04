import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import {
  CUSTOMIZE_OPTIONS,
  CustommizationOptions,
  SELECT_BUTTONS_NAMES,
} from "../const/buttons";
import { AlpacaConfigurationOption, ConfigType } from "./AlpacaViewer";

type handleClickProps = CustommizationOptions & ConfigType;

type CustomizationControlsProps = (
  selectedType: ConfigType,
  selectedSubType?: CustommizationOptions
) => void;

const StyledButton = styled("button")`
  margin: 5px;
`;

const isBodyPartButton = (buttonselectedType: ConfigType) =>
  SELECT_BUTTONS_NAMES.includes;

const RenderButtons = (
  buttons: ConfigType[] | CustommizationOptions[],
  config: {
    callback: (buttonselectedType: handleClickProps) => void;
  }
) => {
  return buttons.map((buttonName) => {
    return (
      <StyledButton
        onClick={() => config.callback(buttonName as handleClickProps)}
      >
        {buttonName}
      </StyledButton>
    );
  });
};

const CustomizationControls = ({
  updatePart,
}: {
  updatePart: CustomizationControlsProps;
}) => {
  const [sectionType, setSectionType] = useState<ConfigType>("hair");

  const getCustomizeBtns = (selectedType: ConfigType) => {
    return CUSTOMIZE_OPTIONS.find(
      (option) => option.selectedType === selectedType
    )?.customizationOptions as CustommizationOptions[];
  };

  const handleButtonClick = (selectedOption: handleClickProps): void => {
    if (SELECT_BUTTONS_NAMES.includes(selectedOption)) {
      setSectionType(selectedOption);
    } else {
      updatePart(sectionType, selectedOption);
    }
  };

  return (
    <>
      <h2>Accesorize the Alpaca</h2>

      {RenderButtons(SELECT_BUTTONS_NAMES, {
        callback: handleButtonClick,
      })}
      <h2>Style</h2>
      {RenderButtons(getCustomizeBtns(sectionType), {
        callback: handleButtonClick,
      })}
    </>
  );
};

export default CustomizationControls;
