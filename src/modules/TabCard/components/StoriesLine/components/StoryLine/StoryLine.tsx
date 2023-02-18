import { useEffect, memo } from 'react'
import styled, { keyframes, css } from "styled-components";
import { useAppSelector } from "../../../../../../hooks/useAppSelector";

interface StoryLineProps {
    className?: string;
    dataLength?: number;
    storyId: string;
}

type StoryLineContainerProps = Omit<StoryLineProps, 'storyId'> & {
    isActive: boolean;
    isFinished: boolean;
}

const storyActive = keyframes`
  0%{
    width: 0%;
  }
  100%{
      width: 100%;
  }
`;

const StoryLineContainer = styled.div<StoryLineContainerProps>`
    height: 100%;
    background-color: ${props => props.isFinished? '#fff' : '#8F8F8F'};
    position: relative;
    width: ${props => `calc((100% / ${props.dataLength}) - 5px)`};

    & .progress {
        position: absolute;
        background-color: #fff;
        width: 0px;
        height: 100%;
        animation: ${props => props.isActive && css`${storyActive} 5s forwards linear`};
    }
`

export const StoryLine = memo(({ className, storyId, dataLength }: StoryLineProps) => {

    const activeStory = useAppSelector(state => state.stories.activeStory)
    const finished = useAppSelector(state => state.stories.finishedStories)
    
    return (
        <StoryLineContainer className={className} isActive={activeStory?.id === storyId} isFinished={finished.includes(storyId)} dataLength={dataLength}>
            <div className="progress"></div>
        </StoryLineContainer>
    )
})