import { HeaderButton } from "../../../../components/HeaderButton"

interface HeaderProps {
    className?: string; 
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <header className={className}>
            <HeaderButton />
        </header>
    )
}