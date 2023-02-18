import { StyledMarkImage } from "./MarkImage.styled";

import { BaseTabCard } from "../../types";

interface MarkImageProps {
    id: BaseTabCard['id'];
}


export const MarkImage = ({ id }: MarkImageProps) => {

    const renderContent = () => {
        switch(id) {
            case "1":
                return (
                    <StyledMarkImage id={id}/>
                );
            case "2":
                return (
                    <StyledMarkImage id={id}/>
                );
            case "3":
                return (
                    <StyledMarkImage id={id}/>
                );
            default:
                return null
        }
    }

    return (
        renderContent()
    )
}