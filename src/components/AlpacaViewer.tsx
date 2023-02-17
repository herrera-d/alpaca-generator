import React, { ReactElement, useState } from "react";
import styled from "styled-components";

import Neck from "../assets/neck/default.png";
import Nose from "../assets/nose.png";
import Mouth from "../assets/mouth/default.png";
import Eyes from "../assets/eyes/default.png";
// import Accesories from "./assets/accessories/default.png";
import EarBack from "../assets/ears/tilt-backward.png";
import EarFront from "../assets/ears/tilt-forward.png";
import Leg from "../assets/leg/default.png";
// import Background from "../assets/backgrounds/blue50.png";
import {
  ALPACA_CUSTOMIZATION_OPTIONS,
  CustomizationOption,
} from "../const/buttons";

interface AlpacaPartProps {
  zIndex?: string;
}

export type TargetType =
  | "hair"
  | "eyes"
  | "ears"
  | "leg"
  | "mouth"
  | "neck"
  | "nose"
  | "accessories"
  | "backgrounds";

export interface AlpacaConfigurationOption {
  selectedTarget: TargetType;
  selectedCustomization?: string;
}

export type AlpacaViewerProps = {
  itemsToRender: AlpacaConfigurationOption[];
};

interface AlpacaPartProps {
  zIndex?: string;
}

interface GetImagePath {
  selectedCustomization?: string;
  selectedTarget: TargetType;
}

const AlpacaContainer = styled("article")`
  position: relative;
  width: 100%;
  height: 360px;
`;

const Item = styled.img<AlpacaPartProps>`
  position: absolute;
  height: 100%;
  left: 0px;
  bottom: 0px;
  z-index: ${(props: AlpacaPartProps) => props.zIndex};
`;

const getItemImgPath = ({
  selectedCustomization,
  selectedTarget,
}: {
  selectedCustomization?: string;
  selectedTarget: TargetType;
}) =>
  selectedCustomization
    ? `src/assets/${selectedTarget}/${selectedCustomization}.png`
    : `src/assets/${selectedTarget}/${selectedTarget}.png`;

const renderItems = ({ itemsToRender }: AlpacaViewerProps) => {
  const upperLayerItems = ["eyes", "mouth", "accessories"];

  return itemsToRender.map((item, index) => {
    const { selectedTarget, selectedCustomization } = item;
    const zIndexValue = upperLayerItems.includes(selectedTarget) ? "2" : "1";

    if (selectedTarget === "backgrounds") {
      return (
        <Item
          src={`src/assets/${item.selectedTarget}/${item.selectedCustomization}.png`}
          zIndex="0"
        />
      );
    }

    return (
      <Item
        src={getItemImgPath({ selectedCustomization, selectedTarget })}
        zIndex={zIndexValue}
        key={index}
      />
    );
  });
};

const AlpacaViewer = (itemsToRender: AlpacaViewerProps): ReactElement => {
  const [randomizedAlpaca, setRandomizedAlpaca] = useState<
    AlpacaConfigurationOption[] | undefined
  >();

  return (
    <AlpacaContainer>
      {itemsToRender && renderItems(itemsToRender)}
      <div></div>
    </AlpacaContainer>
  );
};

export default AlpacaViewer;
