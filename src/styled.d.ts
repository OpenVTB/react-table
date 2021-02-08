import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      'SubTitle / SubTitle 3': FlattenSimpleInterpolation;
      'SubTitle / SubTitle 2': FlattenSimpleInterpolation;
      'Body / Body 2 Short': FlattenSimpleInterpolation;
    };
    colors: {
      'Neutral / Neutral 90': FlattenSimpleInterpolation;
    };
  }
}
