import { AlpacaBodypartName, SelectorButton } from "../components/AlpacaViewer";

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

export const SELECT_BUTTONS_NAMES: SelectorButton[] = [
  "hair",
  "eyes",
  "ears",
  "leg",
  "mouth",
  "neck",
  "accesories",
];

export const CUSTOMIZE_OPTIONS = [
  {
    selectedType: "hair",
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
    selectedType: "eyes",
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
    selectedType: "ears",
    customizationOptions: ["tilt-backward", "tilt-forward", "default"],
  },
  {
    selectedType: "leg",
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
    selectedType: "mouth",
    customizationOptions: [
      "astonished",
      "eating",
      "default",
      "eating",
      "tongue",
    ],
  },
  {
    selectedType: "neck",
    customizationOptions: ["bend-backward", "bend-forward", "default", "thick"],
  },
  {
    selectedType: "nose",
  },
];
