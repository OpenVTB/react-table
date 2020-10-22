import './font.module.css';
import { css, DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  fonts: {
    'SubTitle / SubTitle 3': css`
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 20px;
      /* identical to box height, or 154% */

      font-feature-settings: 'cv03' on, 'cv04' on;
      color: #242424;
    `,
    'Body / 13 Small': css`
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 16px;
      /* identical to box height, or 123% */

      font-feature-settings: 'cv03' on, 'cv04' on;
      color: #242424;
    `,
  },

  colors: {
    'Neutral / Neutral 90': css`
      color: #242424;
    `,
  },
};

export { myTheme };
