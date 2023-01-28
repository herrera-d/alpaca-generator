import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import {
  BODYPART_BUTTONS_NAMES,
  CUSTOMIZE_OPTIONS,
  CustommizationOptions,
} from "../assets/const/buttons";
import { AlpacaBodypartName, AlpacaBodyPartsInterface } from "./AlpacaViewer";

type handleClickProps = CustommizationOptions & AlpacaBodypartName;

type CustomizationControlsProps = (
  buttonName: CustommizationOptions,
  targe?: AlpacaBodypartName
) => void;

const StyledButton = styled("button")``;

const isBodyPartButton = (buttonName: AlpacaBodypartName) =>
  BODYPART_BUTTONS_NAMES.includes;

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

const CustomizationControls = ({
  updateBodyPart,
}: {
  updateBodyPart: CustomizationControlsProps;
}) => {
  const [selectedBodyPart, setSelectedBodyPart] =
    useState<AlpacaBodypartName>("hair");

  const getCustomizeBtns = (selectedBodyPart: AlpacaBodypartName) => {
    return CUSTOMIZE_OPTIONS.find((option) => option.name === selectedBodyPart)
      ?.customizationOptions as CustommizationOptions[];
  };

  const handleButtonClick = (buttonName: handleClickProps): void => {
    if (BODYPART_BUTTONS_NAMES.includes(buttonName)) {
      setSelectedBodyPart(buttonName);
    } else {
      updateBodyPart(buttonName, selectedBodyPart);
    }
  };

  return (
    <>
      <h2>Accesorize the Alpaca</h2>
      {RenderButtons(BODYPART_BUTTONS_NAMES, {
        callback: handleButtonClick,
      })}
      <h2>Style</h2>
      {RenderButtons(getCustomizeBtns(selectedBodyPart), {
        callback: handleButtonClick,
      })}
    </>
  );
};

export default CustomizationControls;
