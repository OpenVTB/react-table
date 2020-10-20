import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      'SubTitle / SubTitle 3': FlattenSimpleInterpolation;
      'Body / 13 Small': FlattenSimpleInterpolation;
    };
    colors: {
      'Neutral / Neutral 90': FlattenSimpleInterpolation;
    };
  }
}
