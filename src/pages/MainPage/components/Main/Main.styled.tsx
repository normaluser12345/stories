import styled from "styled-components"
import { Main as M} from "./Main";

export const Main = styled(M)`

    position: relative;
    width: 100%;
    height: calc(100% - 50px);
    padding: 40px 20px 0;
    margin-bottom: 50px;
    z-index: 1;

    .main__title {
        width: 75%;
        margin-bottom: 30px;
        font-size: 30px;
        font-weight: 400;
    }
    .main__description {
        font-size: 21px;
        width: 30%;
        font-weight: 400;
    }
`