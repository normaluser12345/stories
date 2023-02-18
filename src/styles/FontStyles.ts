import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: SuisseIntl;
        font-weight: 400;
        src: url(./assets/fonts/SuisseIntl-Medium.otf) format('opentype');
    }
`;

export default FontStyles;