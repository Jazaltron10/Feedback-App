# SECTION 3
## COMPONENTS AND PROPS 
<!-- App.tsx -->
            import GlobalStyles from './components/styles/Global'
            import Header from './components/Header'
            import PropTypes from 'prop-types'

            function App() {
                // text:IntrinsicAttributes
                return (
                    <>
                        <GlobalStyles/>
                        <Header text = {true} />
                        <h1>James and John</h1>
                    </>
                )
            }

            Header.defaultProps = {
                text: 'Feedback UI',
            }

            Header.propTypes = {
                text: PropTypes.string.isRequired
            }
            export default App

<!-- Header.tsx -->
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


## Adding Styles

            import { HeaderStyles } from "./styles/Header.styles"
            import { ContainerStyles } from "./styles/Container.styles"
            // import PropTypes from 'prop-types'
            
            const Header = ({text}) => {
                const headerStyles = {
                    backgroundColor: 'blue', color:'red'
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