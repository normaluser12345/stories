import styled from "styled-components";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { TabCard } from "../../../../modules/TabCard/components/TabCard/TabCard.styled";

interface FooterProps {
    className?: string;
}

interface FooterContainerProps extends FooterProps {
    tab: boolean;
}

const FooterContainer = styled.footer<FooterContainerProps>`
    z-index: ${props => props.tab && '2'};
`

export const Footer = ({ className }: FooterProps) => {

   const tabCards = useAppSelector(state => state.tabs.tabs)
   const tab = useAppSelector(state => state.tabs.tabs.find(tab => tab.isOpen))

    return (
        <FooterContainer tab={!!tab} id="footer" className={className}>
            {
                tabCards.map(tab => {
                    return (
                        <TabCard key={tab.id} tab={tab} tabQuantity={tabCards.length}/>
                    )
                })
            }
        </FooterContainer>
    )
}