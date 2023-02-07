import { AlpacaBodypartName, TargetType } from "../components/AlpacaViewer";

export type CustomizationOption =
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

export const TARGET_NAMES: TargetType[] = [
  "hair",
  "eyes",
  "ears",
  "leg",
  "mouth",
  "neck",
  "accessories",
];

export const ALPACA_CUSTOMIZATION_OPTIONS = [
  {
    target: "hair",
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
    target: "eyes",
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
    target: "ears",
    customizationOptions: ["tilt-backward", "tilt-forward", "default"],
  },
  {
    target: "leg",
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
    target: "mouth",
    customizationOptions: [
      "astonished",
      "eating",
      "default",
      "eating",
      "tongue",
    ],
  },
  {
    target: "neck",
    customizationOptions: ["bend-backward", "bend-forward", "default", "thick"],
  },
  {
    target: "accessories",
    customizationOptions: ["earings", "flower", "glasses", "headphone"],
  },
  {
    target: "nose",
  },
];
