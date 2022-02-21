import React from 'react'
import GlobalStyles from './components/styles/Global'
function App() {
    const title = ' Blog Post'
    const body = 'This is my blog post'
    const comments: any[] = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'},
        {id: 4, text: 'Comment four'},
    ]


    return (
        <>
        <GlobalStyles/>
        <h1>{title.toUpperCase()}</h1>
        <p>{body}</p>
        {Math.floor(Math.random()*(5*5))}

        <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {
                    comments.map((comment, index)=>(
                            <li>{comment.text}</li>
                    ))
                }
            </ul>
        </div>
        </>
    )
}

export default App