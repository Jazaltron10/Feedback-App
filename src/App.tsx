import GlobalStyles from './components/styles/Global'
import Header from './components/Header'
function App() {
    // text:IntrinsicAttributes
    return (
        <>
            <GlobalStyles/>
            <Header text = 'hello world' />
            <h1>James and John</h1>
        </>
    )
}

export default App