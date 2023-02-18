import styled from "styled-components";
import { TabCard as Tab } from "./TabCard";

//props.tabQuantity for correct responsive design if we need to add more tab cards

export const TabCard = styled(Tab)`
    display: flex;
    flex-direction: column;
    position: relative;
    top: calc(85vh - 50px);
    height: 85vh;
    background-color: #333;
    -moz-border-radius: 0px;
    -webkit-border-radius: 8px 8px 0px 0px;
    border-radius: 8px 8px 0px 0px;
    width: ${props => `calc((100% / ${props.tabQuantity}) - 20px)`};
`