import styled from "styled-components";
import { TabCardBody as TCB } from "./TabCardBody";

export const TabCardBody = styled(TCB)`
  
    height: calc(85vh - 85px);
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: end;
    -moz-border-radius: 0px;
    -webkit-border-radius: 12px 12px 0px 0px;
    border-radius: 12px 12px 0px 0px;
    overflow: hidden;
    
    background-size: cover;
    
    .loading {
        position: absolute; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%);
    };

    .tabcardbody__title {
        margin-bottom: 20px;
        font-size: 25px;
    };
    .tabcardbody__title: hover {
        cursor: pointer;
    };
    .tabcardbody__description {
        font-size: 16px;
    };

    & .story__textcontainer {
        margin-bottom: 40px;
    };

    & .story__textcontainer h1 {
        padding: 0 10px;
    };


    & .story__textcontainer p {
        padding: 0 10px;
    };
`