import { HeaderStyles } from "./styles/Header.styles"
import { ContainerStyles } from "./styles/Container.styles"
// import PropTypes from 'prop-types'

const Header = ({text, bgColor, textColor}) => {
    const headerStyles = {
        backgroundColor: bgColor, 
        color: textColor
    }
    return (
        <HeaderStyles  style={headerStyles}>
            <ContainerStyles>
                <h2>{text}</h2>
            </ContainerStyles>
        </HeaderStyles>
    )
}

export default Header