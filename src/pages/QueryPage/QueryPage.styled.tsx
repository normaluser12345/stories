import styled from "styled-components";
import { QueryPage as QP } from "./QueryPage";

export const QueryPage = styled(QP)`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    color: #272727;
    background: rgba(255,255,255,0.8);
    z-index: 1000;

    &:hover {
        cursor: pointer;
    }

    .querypage__header {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .querypage__closebutton {
        display: none;
        position: relative;
        border: none;
        background: inherit;
        letter-spacing: 0.2em;
        bottom: 5px;
    }
    .querypage__content {
        cursor: auto;
        overflow: auto;
        display: block;
        padding: 20px;
        position: absolute;
        background-color: #fff;
        width: 50%;
        max-width: 100%;
        height: 100%;
        border: none;
        box-shadow: 5px 0 25px #888;
    }
    .querypage__title {
        margin-bottom: 20px;
    }
    .querypage__info_title {
        font-size: 12px;
        color: #959595;
    }
    .querypage__info_subtitle {
        font-size: 12px;
        color: #272727;
    }
    .querypage__description {
        font-size: 16px;
        margin-bottom: 20px;
    }
    .media__description {
        margin-bottom: 55px;
    }
    .querypage__subtitle {
        margin-bottom: 20px;
        font-size: 30px;
    }
    .querypage__main {
        display: flex;
        flex-direction: column;
        
    }

    .querypage__info {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 20px;
    }
    .info__detail {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        width: 50%;
    }
    .info__detail:nth-child(1n) {
        margin-left:auto
    }

    .querypage__footer {
    
    }
    .courses__footer {
       margin-top: auto;
    }
    .querypage__bar {
        margin-bottom: 20px;
        height: 1px;
        width: 100%;
        background-color: #B5B5B5;
    }
    .media {
        width: 150px;
        height: 150px;
        border: 1px solid black;
        border-radius: 5px;
    }

    @media (max-width: 1024px) {
        .querypage__content {
            width: calc(1vw * 0.25 + 764px);
        }
    }

    @media (max-width: 770px) {
        height: 100vh;
        width: 100vw;
        color: #272727;
        background: rgba(255,255,255,0.8);
        font-size: 15px;
        z-index: 1000;

        .querypage__content {
            height: 100vh;
            width: 100vw;
            font-size: 16px;
        }

        .querypage__title {
            font-size: 18px;
        }

        .querypage__closebutton {
            display: block;
        }
        
        .querypage__info {
            flex-direction: column;
            align-items: start;
        }
        & .info__detail {
            margin-bottom: 10px;
        }
        .info__detail:nth-child(1n) {
            margin-left: 0
        }
    }
`