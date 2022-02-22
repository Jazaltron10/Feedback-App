import GlobalStyles from './components/styles/Global'
import Header from './components/Header'
// import PropTypes from 'prop-types'

function App() {

    return (
        <>
            <GlobalStyles/>
            <Header />
            <h1>James and John</h1>
        </>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}

// Header.propTypes = {
//     text: PropTypes.string,
//     bgColor: PropTypes.string, 
//     textColor:PropTypes.string,
// }



export default App