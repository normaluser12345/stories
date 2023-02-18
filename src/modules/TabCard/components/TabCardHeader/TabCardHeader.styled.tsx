import styled from "styled-components";
import { TabCardHeader as TCH } from "./TabCardHeader";

export const TabCardHeader = styled(TCH)`
    padding: 20px 10px;
    width: 100%;

    &:hover {
        cursor: pointer;
    };
    
    .header__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        font-size: 11px;
        margin-bottom: 30px;
    };
`