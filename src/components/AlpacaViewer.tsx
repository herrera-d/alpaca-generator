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

interface AlpacaBodyPartProps {
  zIndex?: string;
}

export type AlpacaBodypartName =
  | "hair"
  | "eyes"
  | "ears"
  | "leg"
  | "mouth"
  | "neck";

export interface AlpacaBodyPartsInterface {
  name: AlpacaBodypartName;
  selectedCustomization: string;
}

export type AlpacaViewerProps = {
  alpacaBodyParts: AlpacaBodyPartsInterface[];
};

const AlpacaBodyPart = styled("img")`
  position: absolute;
  height: 100%;
  left: 0px;
  bottom: 0px;
  z-index: ${(props: AlpacaBodyPartProps) =>
    props.zIndex ? props.zIndex : "0"};
`;

const getCustomizeBodyPart = (
  bodyPartName: AlpacaBodypartName,
  { alpacaBodyParts }: AlpacaViewerProps
) => {
  const bodyPart = alpacaBodyParts.find(
    (bodyPart) => bodyPart.name === bodyPartName
  ) as AlpacaBodyPartsInterface;
  return bodyPart.selectedCustomization;
};

const AlpacaViewer = (alpacaBodyParts: AlpacaViewerProps): ReactElement => {
  return (
    <>
      <AlpacaBodyPart src={Background} />
      <AlpacaBodyPart
        src={`../assets/ears/${getCustomizeBodyPart(
          "ears",
          alpacaBodyParts
        )}.png`}
      />
      <AlpacaBodyPart src={EarFront} />
      <AlpacaBodyPart src={Eyes} zIndex="10" />
      <AlpacaBodyPart src={Mouth} zIndex="10" />
      <AlpacaBodyPart src={Nose} />
      <AlpacaBodyPart src={Neck} />
      <AlpacaBodyPart src={Leg} />
    </>
  );
};

export default AlpacaViewer;
