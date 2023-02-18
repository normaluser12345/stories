import { useEffect, useRef, useCallback, useContext } from 'react';
import { createPortal } from 'react-dom';
import styled from "styled-components";

import { TabCardBody } from '../TabCardBody/TabCardBody.styled';
import { TabCardHeader } from "../TabCardHeader/TabCardHeader.styled";
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { makeStoryActive, makeStoryFinished, nullStories } from '../../store/storiesSlice';
import { hideAllTabs } from '../../store/tabsSlice';

import { TabCardType } from "../../types";
import { CurrentStoryIndexRef } from '../../../../context/CurrentStoryIndexRef';

interface TabCardContainerProps {
    className?: string;
    isOpen: boolean
}

const TabCardContainer = styled.div<TabCardContainerProps>`
    z-index: ${props => props.isOpen && '10000'};
    transform: ${props => props.isOpen && `translate(0, calc(-85vh + 50px))`};
    transition: .5s ease;
`

const FooterPortal = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`

interface TabCardProps {
    tab: TabCardType;
    className?: string;
    tabQuantity?: number
}

export const TabCard = ({
    tab,
    className,
    tabQuantity, //use for defining width of tab in TabCard.styled.tsx
}: TabCardProps) => {

    const dataStories = useAppSelector(state => state.stories.stories)
    const timer = useRef<ReturnType<typeof setInterval>>()
    const currentStoryIndexRef = useContext(CurrentStoryIndexRef)

    const dispatch = useAppDispatch()

    const { id, title, tag, isOpen } = tab;

    const closeTab = useCallback(() => {
        dispatch(hideAllTabs())
        dispatch(nullStories())
        currentStoryIndexRef.current = -1

        return () => {
            clearInterval(timer.current)
        }
    }, [dispatch, timer, currentStoryIndexRef])

    useEffect(() => {
        if (isOpen) {
            if (currentStoryIndexRef.current < dataStories.length - 1) {
                currentStoryIndexRef.current += 1
                dispatch(makeStoryActive(String(currentStoryIndexRef.current + 1)))
                dispatch(makeStoryFinished(String(currentStoryIndexRef.current)))      

            } else if (currentStoryIndexRef.current === dataStories.length - 1) {
               dispatch(makeStoryFinished(String(currentStoryIndexRef.current)))
                return () => {
                    clearInterval(timer.current)
                    timer.current = undefined
                }
            }

        timer.current = setInterval(() => {
            if (currentStoryIndexRef.current < dataStories.length - 1) {
                currentStoryIndexRef.current += 1
                dispatch(makeStoryActive(String(currentStoryIndexRef.current + 1)))
                dispatch(makeStoryFinished(String(currentStoryIndexRef.current)))      

            } else if (currentStoryIndexRef.current === dataStories.length - 1) {
               dispatch(makeStoryFinished(String(currentStoryIndexRef.current)))
                return () => {
                    clearInterval(timer.current)
                }
            }
        }, 5000)

        return () => {
            clearInterval(timer.current);
        };
    }

}, [tab, dataStories, dataStories.length, dispatch, currentStoryIndexRef, isOpen])
    
    const footer = document.getElementById('footer')

    return (
        <>
        {
            isOpen && footer &&
            createPortal(
                <FooterPortal onClick={() => closeTab()}></FooterPortal>,
                footer
            )
        }
            <TabCardContainer className={className} isOpen={isOpen}>
                <TabCardHeader ref={timer} id={id} title={title} tag={tag} />
                <TabCardBody tab={tab} tag={tag} timer={timer} currentStoryIndex={currentStoryIndexRef} />
            </TabCardContainer>
        </>
    )
}