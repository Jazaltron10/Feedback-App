import { HeaderStyles } from "./styles/Header.styles"
import { ContainerStyles } from "./styles/Container.styles"

const Header = ({text}) => {
    return (
        <HeaderStyles>
            <ContainerStyles>
                <h2>{text}</h2>
            </ContainerStyles>
        </HeaderStyles>
    )
}

export default Header