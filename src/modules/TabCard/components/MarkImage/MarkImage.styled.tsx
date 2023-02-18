import styled from "styled-components";

interface StyledMarkImageProps {
    id: string;
}

const switchBackgroundColor = (id: string) => {
    switch (id) {
        case '1':
            return '#F5F879';
        case '2':
            return '#42A2D9';
        case '3':
            return '#42D963'
    }
}

export const StyledMarkImage = styled.div<StyledMarkImageProps>`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${props => switchBackgroundColor(props.id)}
`