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

const getBodyPartUrl = (
  bodyPartName: AlpacaBodypartName,
  { alpacaBodyParts }: AlpacaViewerProps
) => {
  const bodyPart = alpacaBodyParts.find(
    (bodyPart) => bodyPart.name === bodyPartName
  ) as AlpacaBodyPartsInterface;
  console.log(`src/assets/ears/${bodyPart?.selectedCustomization}.png`);
  return bodyPart?.selectedCustomization as string;
};

const AlpacaViewer = (alpacaBodyParts: AlpacaViewerProps): ReactElement => {
  console.log("alpaca viewer alpacaBodyParts: ", alpacaBodyParts);
  return (
    <>
      {alpacaBodyParts && (
        <>
          <AlpacaBodyPart src={Background} />
          <AlpacaBodyPart
            src={`src/assets/ears/${getBodyPartUrl(
              "ears",
              alpacaBodyParts
            )}.png`}
          />
          <AlpacaBodyPart
            src={`src/assets/hair/${getBodyPartUrl(
              "hair",
              alpacaBodyParts
            )}.png`}
          />
          <AlpacaBodyPart
            src={`src/assets/eyes/${getBodyPartUrl(
              "eyes",
              alpacaBodyParts
            )}.png`}
            zIndex="10"
          />
          <AlpacaBodyPart
            src={`src/assets/mouth/${getBodyPartUrl(
              "mouth",
              alpacaBodyParts
            )}.png`}
            zIndex="10"
          />
          <AlpacaBodyPart src={`src/assets/nose/nose.png`} />
          <AlpacaBodyPart
            src={`src/assets/neck/${getBodyPartUrl(
              "neck",
              alpacaBodyParts
            )}.png`}
          />
          <AlpacaBodyPart
            src={`src/assets/leg/${getBodyPartUrl("leg", alpacaBodyParts)}.png`}
          />
        </>
      )}
    </>
  );
};

export default AlpacaViewer;
