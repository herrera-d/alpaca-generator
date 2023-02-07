import React, { ReactElement } from "react";
import styled from "styled-components";

import Neck from "../assets/neck/default.png";
import Nose from "../assets/nose.png";
import Mouth from "../assets/mouth/default.png";
import Eyes from "../assets/eyes/default.png";
// import Accesories from "./assets/accessories/default.png";
import EarBack from "../assets/ears/tilt-backward.png";
import EarFront from "../assets/ears/tilt-forward.png";
import Leg from "../assets/leg/default.png";
import Background from "../assets/backgrounds/blue50.png";

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
  | "accessories";

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

const AlpacaPart = styled.img<AlpacaPartProps>`
  position: absolute;
  height: 100%;
  left: 0px;
  bottom: 0px;
  z-index: ${(props: AlpacaPartProps) => (props.zIndex ? props.zIndex : "0")};
`;

const alpacaCustomBodyPartFactory = ({ itemsToRender }: AlpacaViewerProps) => {
  return itemsToRender.map((item, index) => {
    const zIndexValue =
      item.selectedTarget === "eyes" ||
      item.selectedTarget === "mouth" ||
      item.selectedTarget === "accessories"
        ? "10"
        : "0";

    if (item.selectedCustomization) {
      return (
        <AlpacaPart
          src={`src/assets/${item.selectedTarget}/${item.selectedCustomization}.png`}
          zIndex={zIndexValue}
          key={index}
        />
      );
    }
    return (
      <AlpacaPart
        src={`src/assets/${item.selectedTarget}/${item.selectedTarget}.png`}
        zIndex={zIndexValue}
        key={index}
      />
    );
  });
};

const AlpacaViewer = (alpacaConfiguration: AlpacaViewerProps): ReactElement => {
  console.log("alpacaparts: ", alpacaConfiguration);
  return (
    <>
      {alpacaConfiguration && alpacaCustomBodyPartFactory(alpacaConfiguration)}
    </>
  );
};

export default AlpacaViewer;
