import React from 'react';
import { Global, css } from '@emotion/core'
import * as fonts from './fonts';

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Inter UI';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url("${fonts.InterUIWoff2}") format('woff2'),url("${fonts.InterUIWoff}") format('woff');
      }

      @font-face {
        font-family: 'Inter UI';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url("${fonts.InterUISemiBoldWoff2}") format('woff2'),url("${fonts.InterUISemiBoldWoff}") format('woff');
      }

      @font-face {
        font-family: 'Inter UI';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url("${fonts.InterUIBoldWoff2}") format('woff2'),url("${fonts.InterUIBoldWoff}") format('woff');
      }
    `}

  />
)

export default GlobalStyles;
