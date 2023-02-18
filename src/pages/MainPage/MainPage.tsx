import styled from "styled-components"
import { Outlet } from "react-router-dom"

import { Header } from "./components/Header/Header.styled"
import { Footer } from "./components/Footer/Footer.styled"
import { Main } from "./components/Main/Main.styled"
import { CurrentStoryIndexRefProvider } from "../../context/CurrentStoryIndexRef"

const StyledMainContainer = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const MainPage = () => {
    return (
        <CurrentStoryIndexRefProvider>
            <StyledMainContainer>
                <Outlet />
                <Header />
                <Main />
                <Footer />
            </StyledMainContainer>
        </CurrentStoryIndexRefProvider>
    )
}