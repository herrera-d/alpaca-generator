import { AlpacaBodypartName } from "../../components/AlpacaViewer";

export type CustommizationOptions =
  | "bang"
  | "curls"
  | "default"
  | "elegant"
  | "quiff"
  | "angry"
  | "naughty"
  | "panda"
  | "smart"
  | "star"
  | "cookie"
  | "bubble-tea"
  | "game-console"
  | "tilt-backward"
  | "tilt-forward"
  | "astonished"
  | "eating"
  | "laugh";

export const BODYPART_BUTTONS_NAMES: AlpacaBodypartName[] = [
  "hair",
  "eyes",
  "ears",
  "leg",
  "mouth",
  "neck",
];

export const CUSTOMIZE_OPTIONS = [
  {
    name: "hair",
    customizationOptions: [
      "bang",
      "curls",
      "default",
      "elegant",
      "fancy",
      "quiff",
      "short",
    ],
  },
  {
    name: "eyes",
    customizationOptions: [
      "angry",
      "naughty",
      "default",
      "panda",
      "smart",
      "star",
    ],
  },
  {
    name: "ears",
    customizationOptions: ["tilt-backward", "tilt-forward", "default"],
  },
  {
    name: "leg",
    customizationOptions: [
      "cookie",
      "bubble-tea",
      "default",
      "game-console",
      "tilt-backward",
      "tilt-forward",
    ],
  },
  {
    name: "mouth",
    customizationOptions: [
      "astonished",
      "eating",
      "default",
      "eating",
      "tongue",
    ],
  },
  {
    name: "neck",
    customizationOptions: ["bend-backward", "bend-forward", "default", "thick"],
  },
];
