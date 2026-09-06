export interface YouTubeTheme {
  id: string;
  name: string;

  backgroundType?: "color" | "image";
  backgroundImage?: string;

  glassEffect?: boolean;
  glassOpacity?: number;
  glassBlur?: number;

  NavHeaderBgColor?: string;
  NavHeaderTextColor?: string;
  NavHeaderHoverColor?: string;
  NavHeaderIconColor?: string;

  backgroundColor: string;
  accentColor: string;

  cardHoverBgColor?: string;
  cardHoverTextColor?: string;
  cardHoverLinkColor?: string;
  cardHoverBorderRadius?: number;
  textColor: string;

  opacity: number;
  blur: number;
  borderRadius: number;

  hideShorts: boolean;
  hideComments: boolean;
  transparentNavbar: boolean;
}
export interface BackgroundOption {
  id: string;
  name: string;
  value: string;
  textColor: string;
  accent:string;
  glassEffect: boolean;
  glassOpacity: number;
  glassBlur: number;
}