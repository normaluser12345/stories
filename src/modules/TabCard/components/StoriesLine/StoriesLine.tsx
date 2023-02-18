import { StoryLine } from "./components/StoryLine/StoryLine.styled"
import { useAppSelector } from "../../../../hooks/useAppSelector";

interface StoriesLineProps {
    className?: string;
}

export const StoriesLine = ({ className }: StoriesLineProps) => {

    const stories = useAppSelector(state => state.stories.stories)

    return (
        <div className={className}>
            {
                stories?.map(story => {
                    return (
                        <StoryLine key={story.id} storyId={story.id} dataLength={stories.length}/>
                    )
                })    
            }
        </div>
    )
}