import { css, DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  fonts: {
    'SubTitle / SubTitle 3': css`
      font-family: 'VTB Group UI', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      /* identical to box height, or 143% */

      font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
      color: #22242a;
    `,
    'SubTitle / SubTitle 2': css`
      font-family: 'VTB Group UI', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height, or 125% */

      font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;

      /* Neutral / Neutral 90 */

      color: #22242a;
    `,

    'Body / Body 2 Short': css`
      font-family: 'VTB Group UI', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      /* identical to box height, or 114% */

      text-align: right;
      font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;

      /* Neutral / Neutral 90 */

      color: #22242a;
    `,
  },

  colors: {
    'Neutral / Neutral 90': css`
      color: #242424;
    `,
  },
};

export { myTheme };
