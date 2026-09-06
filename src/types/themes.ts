export interface YouTubeTheme {
  id: string;
  name: string;

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