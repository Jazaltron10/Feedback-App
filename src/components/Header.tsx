import { HeaderStyles } from "./styles/Header.styles"
import { ContainerStyles } from "./styles/Container.styles"
// import PropTypes from 'prop-types'

const Header = () => {
    const headerStyles = {
        backgroundColor: "blue", 
        color: "Red"
    }
    return (
        <HeaderStyles  style={headerStyles}>
            <ContainerStyles>
                <h2>text</h2>
            </ContainerStyles>
        </HeaderStyles>
    )
}

export default Header