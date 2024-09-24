import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    defaultColor: {
      black: string;
      white: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
    colorPallte: {
      gray100: string;
      gray200: string;
    };
  }
}
