import { useContext } from 'react';
import { useLocation } from "react-router";
import styled from "styled-components";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { nullStories } from "../../../../modules/TabCard/store/storiesSlice";
import { hideAllTabs } from "../../../../modules/TabCard/store/tabsSlice";
import { CurrentStoryIndexRef } from '../../../../context/CurrentStoryIndexRef';

interface MainProps { 
    className?: string;
}

type MainContainerProps = MainProps & {
    tab: boolean;
}

const MainContainer = styled.main<MainContainerProps>`
    background: ${props => props.tab && '#fff'};
    opacity: ${props => props.tab && '0.6'};
    &:hover {
        cursor: ${props => props.tab && 'pointer'};
    }
`

export const Main = ({ className }: MainProps) => {

    const location = useLocation()
    const dispatch = useAppDispatch()
    const currentStoryIndexRef = useContext(CurrentStoryIndexRef)
    const tab = useAppSelector(state => state.tabs.tabs.find(tab => tab.isOpen))
   
    if (location.pathname !== '/') return null

    const handleClose = () => {
        if (!tab) return
        dispatch(hideAllTabs())
        dispatch(nullStories())
        currentStoryIndexRef.current = -1
    }

    return (
        <MainContainer tab={!!tab} className={className} onClick={() => handleClose()}>
            <h1 className="main__title">
                Лучше — сайт, который поможет приобрести 
                и не бросить полезные привычки. 
                Бесплатные видеотренировки, аудиомедитации, 
                программы и статьи для нормализации сна, питания 
                и развития осознанности.
            </h1>
            <p className="main__description">
                Наши эксперты подготовили 16 курсов 
                и более 70 статей в 6 категориях: 
                Фитнес, Питание, Осознанность, Сон, Отдых,
                Психология и Образ жизни.
                Занимайтесь в комфортном темпе.
            </p>
        </MainContainer>
    )
}