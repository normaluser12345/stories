import styled from "styled-components";
import { Footer as F } from "./Footer";

export const Footer = styled(F)`
    display: flex;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    position: fixed;
    bottom: 0;
    justify-content: space-between;
    align-items: end;
    z-index: 3;
`