import styled from 'styled-components';
import { useContext } from 'react';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { CurrentStoryIndexRef } from '../context/CurrentStoryIndexRef';
import { nullStories } from '../modules/TabCard/store/storiesSlice';
import { hideAllTabs } from '../modules/TabCard/store/tabsSlice';
import { useAppSelector } from '../hooks/useAppSelector';

const Button = styled.button`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        cursor: pointer;
        background-color: #ccc;
        border: none;
        transition: 0.1s linear
    }
`

const Hamburger = styled.div`
    display: block;
    height: 14px;
    width: 37px;
    margin: 32px 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const HamburgerLine = styled.div`
    display: block;
    height: 2px;
    width: 100%;
    background: #0e2431;
`

export const HeaderButton = () => {

    const dispatch = useAppDispatch()

    const currentStoryIndexRef = useContext(CurrentStoryIndexRef)
    const tab = useAppSelector(state => state.tabs.tabs.find(tab => tab.isOpen))

    const handleClick = () => {
        if (!tab) return
        dispatch(hideAllTabs())
        dispatch(nullStories())
        currentStoryIndexRef.current = -1
    }

    return (
            <Button onClick={() => handleClick()}>
                <Hamburger>
                    <HamburgerLine />
                    <HamburgerLine />
                    <HamburgerLine />
                </Hamburger>
            </Button>
    )
}