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

const AlpacaBodyPart = styled("img")`
  position: absolute;
  height: 100%;
  left: 0px;
  bottom: 0px;
  z-index: ${(props: AlpacaBodyPartProps) =>
    props.zIndex ? props.zIndex : "0"};
`;

const AlpacaViewer = ({
  alpacaConfig,
}: {
  alpacaConfig: {
    hair: string;
    neck: string;
    earBack: string;
    earFront: string;
    mouth: string;
    nose: string;
    leg: string;
  };
}): ReactElement => {
  return (
    <>
      <AlpacaBodyPart src={Background} />
      <AlpacaBodyPart src={EarBack} />
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
