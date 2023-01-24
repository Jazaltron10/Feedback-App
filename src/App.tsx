import GlobalStyles from './components/styles/Global'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import { ContainerStyles } from './components/styles/Container.styles'
// import PropTypes from 'prop-types'

function App() {

    return (
        <>
            <GlobalStyles/>
            <Header />
            <ContainerStyles>
                <FeedbackItem />
            </ContainerStyles>
        </>
    )
}

interface assets{
    text: string;
    bgColor: string;
    textColor:string;
}
// Header.defaultProps = {
//     text: 'Feedback UI',
//     bgColor:'rgba(0,0,0,0.4)',
//     textColor: '#ff6a95',
// }

// Header.propTypes = {
//     text: PropTypes.string,
//     bgColor: PropTypes.string, 
//     textColor:PropTypes.string,
// }



export default App