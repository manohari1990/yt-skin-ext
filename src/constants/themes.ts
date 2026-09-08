import type { YouTubeTheme } from "../types/themes";

export const defaultTheme: YouTubeTheme = {
  id: "none",
  name: "none",
  backgroundType: "color",
  backgroundEffect: "none",

  accentColor: "unset",
  textColor: "unset",

  opacity: 1,
  blur: 0,
  borderRadius: 0,

  NavHeaderBgColor: "inherit",
  NavHeaderTextColor: "unset",
  NavHeaderHoverColor: "unset",
  NavHeaderIconColor: "unset",
  backgroundColor: "unset",
  cardHoverBgColor: "unset",
  cardHoverBorderRadius: 0,
  cardHoverTextColor: "unset",

  hideShorts: false,
  hideComments: false,
  hideRecommendations: false,

  transparentNavbar: false,
};


export const defaultThemes: YouTubeTheme[] = [
  {
    id: "cloud",
    name: "Cloud",

    backgroundType: 'color',

    NavHeaderBgColor: "#64748B",
    NavHeaderTextColor: "#fff",
    NavHeaderHoverColor: "#354762",
    NavHeaderIconColor: "#fff",


    backgroundColor: "#F8FAFC",
    accentColor: "linear-gradient(135deg, #64748B, #94A3B8)",
    cardHoverBgColor: "rgba(74, 112, 166, 0.5)", //ytSpecTouchFeedbackShapeHovered
    cardHoverBorderRadius: 12,
    cardHoverTextColor: "#F8FAFC",
    textColor: "#0F172A",

    opacity: 1,
    blur: 0,
    borderRadius: 12,

    hideShorts: false,
    hideComments: false,
    hideRecommendations: false,
    transparentNavbar: false,
  },

  {
    id: "ocean",
    name: "Ocean",
    backgroundType: 'color',

    NavHeaderBgColor: "#06B6D4",
    NavHeaderTextColor: "#fff",
    NavHeaderHoverColor: "#037a8e",
    NavHeaderIconColor: "#fff",

    backgroundColor: "linear-gradient(135deg, #EFF6FF, #E0F2FE)",
    accentColor: "linear-gradient(135deg, #2563EB, #06B6D4)",
    cardHoverBgColor: "rgba(41, 78, 129, 0.5)", //ytSpecTouchFeedbackShapeHovered
    cardHoverBorderRadius: 12,
    cardHoverTextColor: "#F8FAFC",
    textColor: "#0F172A",

    opacity: 0.95,
    blur: 8,
    borderRadius: 16,

    hideShorts: false,
    hideComments: false,
    hideRecommendations: false,
    transparentNavbar: true,
  },

  {
    id: "mint",
    name: "Mint",
    backgroundType: 'color',

    NavHeaderBgColor: "#16A34A",
    NavHeaderHoverColor: "#027925",
    NavHeaderTextColor: "#fff",
    NavHeaderIconColor: "#fff",

    backgroundColor: "linear-gradient(135deg, #F0FDF4, #DCFCE7)",
    accentColor: "linear-gradient(135deg, #16A34A, #4ADE80)",
    cardHoverBgColor: "rgba(31, 62, 43, 0.5)",
    cardHoverBorderRadius: 12,
    textColor: "#14532D",

    opacity: 0.95,
    blur: 8,
    borderRadius: 16,

    hideShorts: false,
    hideComments: false,
    hideRecommendations: false,
    transparentNavbar: true,
  },

  {
    id: "lavender",
    name: "Lavender",
    backgroundType: 'color',

    NavHeaderBgColor: "#8158c8",
    NavHeaderTextColor: "#fff",
    NavHeaderHoverColor: "#7142c1",
    NavHeaderIconColor: "#fff",

    backgroundColor: "linear-gradient(135deg, #FAF5FF, #F3E8FF)",
    accentColor: "linear-gradient(135deg, #7C3AED, #C084FC)",
    cardHoverBgColor: "rgba(104, 60, 148, 0.50)",
    cardHoverBorderRadius: 12,
    textColor: "#3B0764",

    opacity: 0.95,
    blur: 10,
    borderRadius: 18,

    hideShorts: false,
    hideComments: false,
    hideRecommendations: false,
    transparentNavbar: true,
  },

  {
    id: "rose",
    name: "Rose",
    backgroundType: 'color',

    NavHeaderBgColor: "#F7879A",
    NavHeaderTextColor: "#fff",
    NavHeaderHoverColor: "#F33A6A",
    NavHeaderIconColor: "#fff",

    backgroundColor: "linear-gradient(135deg, #FFF1F2, #FFE4E6)",
    accentColor: "linear-gradient(135deg, #E11D48, #FB7185)",
    cardHoverBgColor: "rgba(140, 50, 63, 0.5)",
    cardHoverBorderRadius: 12,
    textColor: "#4C0519",

    opacity: 0.95,
    blur: 10,
    borderRadius: 18,

    hideShorts: false,
    hideComments: false,
    hideRecommendations: false,
    transparentNavbar: true,
  },

  {
    id: "sunset",
    name: "Sunset",
    backgroundType: 'color',

    NavHeaderBgColor: "#F97316", //ffdec8
    NavHeaderTextColor: "#fff", //F97316
    NavHeaderHoverColor: "#F59E0B", //fff
    NavHeaderIconColor: "#fff", //F97316

    backgroundColor: "linear-gradient(135deg, #FFF7ED, #FFEDD5)",
    accentColor: "linear-gradient(135deg, #EA580C, #FACC15)",
    cardHoverBgColor: "rgba(96, 83, 31, 0.50)",
    cardHoverBorderRadius: 12,
    textColor: "#431407",

    opacity: 0.95,
    blur: 10,
    borderRadius: 18,

    hideShorts: false,
    hideComments: false,
    hideRecommendations: false,
    transparentNavbar: true,
  },
  // {
  //   id: "summer",
  //   name: "Summer",
  // backgroundType:'color',

  //   NavHeaderBgColor: "#ffdec8",
  //   NavHeaderTextColor: "#F97316",
  //   NavHeaderHoverColor: "#fff",
  //   NavHeaderIconColor: "#F97316",

  //   backgroundColor: "linear-gradient(135deg, #ffecdf, #f7b281)",
  //   accentColor: "linear-gradient(135deg, #EA580C, #FACC15)",
  //   cardHoverBgColor: "rgba(96, 83, 31, 0.50)",
  //   cardHoverBorderRadius: 12,
  //   textColor: "#431407",

  //   opacity: 0.95,
  //   blur: 10,
  //   borderRadius: 18,

  //   hideShorts: false,
  //   hideComments: false,
  //   transparentNavbar: true,
  // },
];


export const accentOptions = [
  {
    id: "purple",
    value: "linear-gradient(135deg, #7c3aed, #ec4899)",
  },
  {
    id: "blue",
    value: "linear-gradient(135deg, #2563eb, #06b6d4)",
  },
  {
    id: "green",
    value: "linear-gradient(135deg, #16a34a, #84cc16)",
  },
  {
    id: "orange",
    value: "linear-gradient(135deg, #f97316, #facc15)",
  },
  {
    id: "red",
    value: "linear-gradient(135deg, #ef4444, #ec4899)",
  },
  {
    id: "pink",
    value: "linear-gradient(135deg, #ec4899, #a855f7)",
  },
];