import { useCallback } from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router";

import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { makeStoryFinished, nextStoryOn } from "../../store/storiesSlice";
import { hideAllTabs } from "../../store/tabsSlice";
import { nullStories } from "../../store/storiesSlice";

import { TabCardsTag, TabCardType } from "../../types";
import { IStory } from "../../../../types";

type TabCardBodyContainerProps = Pick<TabCardBodyProps, 'className'> & {
    backgroundImage?: IStory['backgroundImage']
}

const TabCardBodyContainer = styled.div<TabCardBodyContainerProps>`
    position: relative;
    background: ${props => props.backgroundImage && `url(${props.backgroundImage + ''}) center center no-repeat`};
`


interface TabCardBodyProps {
    className?: string;
    tag: TabCardsTag;
    currentStoryIndex: React.MutableRefObject<number>;
    timer: React.MutableRefObject<NodeJS.Timer | undefined>;
    tab: TabCardType
}

export const TabCardBody = ({ currentStoryIndex, timer, className, tag, tab }: TabCardBodyProps) => {

    const dispatch = useAppDispatch();
    const nav = useNavigate()

    const activeStory = useAppSelector(state => state.stories.activeStory)
    const stories = useAppSelector(state => state.stories.stories)
    const statusStories = useAppSelector(state => state.stories.status)

    const turnNextStoryOn = useCallback(() => {
        if (currentStoryIndex.current + 1 === stories.length) return

        dispatch(makeStoryFinished(String(currentStoryIndex.current + 1)))
        currentStoryIndex.current += 1
        dispatch(nextStoryOn())

        return () => {
            clearInterval(timer.current)
            timer.current = undefined
        }
    }, [tab, stories, stories.length, dispatch, currentStoryIndex, timer])

    
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()

        dispatch(hideAllTabs())
        dispatch(nullStories())
        currentStoryIndex.current = -1
        nav(`${tag + '/' + activeStory?.id}`)

        return () => {
            clearInterval(timer.current)
        }
    }

    return (
        <TabCardBodyContainer 
            className={className} 
            backgroundImage={activeStory?.backgroundImage} 
            onClick={() => turnNextStoryOn()}
        >
            {
                statusStories === 'loading'?
                <div className="loading">Loading...</div>
                :
                <div className="story__textcontainer">
                    <h1 className="tabcardbody__title" onClick={(e: React.MouseEvent) => handleClick(e)}>
                        { activeStory?.title }
                    </h1>
                    <p className="tabcardbody__description">{ activeStory?.subtitle }</p>
                </div>
            }
        </TabCardBodyContainer>
    )
}