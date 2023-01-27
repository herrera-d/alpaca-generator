import { useState } from "react";
import styled from "styled-components";
import {
  BODYPART_BUTTONS_NAMES,
  CUSTOMIZE_OPTIONS,
  CustommizationOptions,
} from "../assets/const/buttons";
import { AlpacaBodypartName } from "./AlpacaViewer";

type handleClickProps = CustommizationOptions & AlpacaBodypartName;

const StyledButton = styled("button")``;

const RenderButtons = (
  buttons: AlpacaBodypartName[] | CustommizationOptions[],
  config: {
    callback: (buttonName: handleClickProps) => void;
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

const CustomizationControls = () => {
  const [selectedBodyPart, setSelectedBodyPart] =
    useState<AlpacaBodypartName>("hair");

  const getBodyPartCustomizationOptions = (
    selectedBodyPart: AlpacaBodypartName
  ) => {
    return CUSTOMIZE_OPTIONS.find((option) => option.name === selectedBodyPart)
      ?.customizationOptions as CustommizationOptions[];
  };

  const handleButtonClick = (buttonName: handleClickProps): void => {
    if (BODYPART_BUTTONS_NAMES.includes(buttonName)) {
      setSelectedBodyPart(buttonName);
      console.log("button pressed: ", buttonName);
    } else {
      console.log("button pressed: ", buttonName);
      // updateCustomBodyPart(buttonName, alpacaBodyParts);
    }
  };
  return (
    <>
      <h2>Accesorize the Alpaca</h2>
      {RenderButtons(BODYPART_BUTTONS_NAMES, {
        callback: handleButtonClick,
      })}
      <h2>Style</h2>
      {RenderButtons(getBodyPartCustomizationOptions(selectedBodyPart), {
        callback: handleButtonClick,
      })}
    </>
  );
};

export default CustomizationControls;
