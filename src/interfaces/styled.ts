export interface ITheme {
  colors: {
    bg: string;
    text: string;
    logo: string;
  };
  sizes: {
    header: { height: number };
    footer: { height: number };
    container: { width: number };
    logoHeader: { height: number; width: number };
  };
}
