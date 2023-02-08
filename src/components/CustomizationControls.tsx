import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import {
  ALPACA_CUSTOMIZATION_OPTIONS,
  TARGET_NAMES,
  CustomizationOption,
  backgroundColors,
} from "../const/buttons";
import { AlpacaConfigurationOption, TargetType } from "./AlpacaViewer";

type handleClickProps = CustomizationOption & TargetType;

type CustomizationControlsProps = (
  selectedType: TargetType,
  selectedSubType?: CustomizationOption
) => void;

const StyledButton = styled("button")`
  margin: 5px;
  &.selected {
    border: 1px solid white;
  }
`;

interface ButtonBacgkroundColor {
  color: string;
}

const BackgroundButton = styled("button")<ButtonBacgkroundColor>`
  margin: 6px;
  height: 38px;
  border-radius: 80%;
  background-color: ${(props) => (props.color ? props.color : "")};

  &.selected {
    border: 1px solid white;
  }
`;

const RenderButtons = (
  buttons: TargetType[] | CustomizationOption[],
  config: {
    callback: (buttonselectedType: handleClickProps) => void;
  },
  selectedTarget?: TargetType
) => {
  return buttons.map((buttonName: CustomizationOption | TargetType) => {
    if (backgroundColors.includes(buttonName)) {
      return <BackgroundButton color={buttonName} />;
    }
    return (
      <StyledButton
        className={`${buttonName === selectedTarget ? "selected" : ""}`}
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
  const [selectedTarget, setSelectedTarget] = useState<TargetType>("hair");

  const getCustomizeOptionsBtns = (selectedType: TargetType) => {
    return ALPACA_CUSTOMIZATION_OPTIONS.find(
      (option) => option.target === selectedType
    )?.customizationOptions as CustomizationOption[];
  };

  const handleButtonClick = (selectedOption: handleClickProps): void => {
    if (TARGET_NAMES.includes(selectedOption)) {
      setSelectedTarget(selectedOption);
    } else {
      updatePart(selectedTarget, selectedOption);
    }
  };

  return (
    <>
      <h2>Accesorize the Alpaca</h2>

      {RenderButtons(
        TARGET_NAMES,
        {
          callback: handleButtonClick,
        },
        selectedTarget
      )}
      <h2>Style</h2>
      {RenderButtons(getCustomizeOptionsBtns(selectedTarget), {
        callback: handleButtonClick,
      })}
    </>
  );
};

export default CustomizationControls;
