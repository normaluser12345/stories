import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { fetchStoriesByTag } from "../../helpers/fetchStories";
import { nullStories } from "../../store/storiesSlice";
import { openTab } from "../../store/tabsSlice";
import { MarkImage } from "../MarkImage/MarkImage"
import { StoriesLine } from "../StoriesLine/StoriesLine.styled";

import { TabCardsTag, TabCardsTitles, TabIds } from "../../types"


type TabCardHeaderProps = {
    className?: string;
    tag: TabCardsTag
    id: TabIds;
    title: TabCardsTitles;
    ref?: React.MutableRefObject<NodeJS.Timer | undefined>
    currentStoryIndex?: React.MutableRefObject<number>;
}

const titleToUpperCase = (title: TabCardsTitles) => {
    return title.toUpperCase()
}

export const TabCardHeader = ({ id, title, className, tag, ref, currentStoryIndex }: TabCardHeaderProps) => {

    const dispatch = useAppDispatch()
    const tab = useAppSelector(state => state.tabs.tabs.find(tab => tab.isOpen === true))

    const handleClick = (e: React.MouseEvent) => {
        if (tab) return

        e.stopPropagation() 
        dispatch(nullStories())
        dispatch(openTab(tag))
        dispatch(fetchStoriesByTag(tag))

        if (currentStoryIndex) {
            currentStoryIndex.current = -1 
        }
        return () => {
            clearInterval(ref?.current)
        }
    }

    return (
        <div className={className} onClick={(e: React.MouseEvent) => handleClick(e)}>
            <div className="header__head">
                <span>{ titleToUpperCase(title) }</span>
                <MarkImage id={id}/>
            </div>
            <StoriesLine />
        </div>
    )
}