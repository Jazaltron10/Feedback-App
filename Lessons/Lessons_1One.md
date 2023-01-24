# Lessons From The Lecture

> Alternative method to jsx

                return React.createElement(
                'div', {className: 'container'},
                React.createElement('h1', {}, 'My App')
                )

# Working with lists

            import React from 'react'
            import GlobalStyles from './components/styles/Global'
            function App() {
            const title = ' Blog Post'
            const body = 'This is my blog post'
            const comments: {id: number, text: string}[] = [
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
                                    <>
                                        <li key={index}>{comment.text}</li>
                                    </>
                            ))
                        }
                    </ul>
                </div>
                </>
            )
        }
        export default App



# Conditionals in JSX
        import React from 'react'
        import GlobalStyles from './components/styles/Global'
        function App() {
        const title = ' Blog Post'
        const body = 'This is my blog post'
        const comments: {id: number, text: string}[] = [
            {id: 1, text: 'Comment one'},
            {id: 2, text: 'Comment two'},
            {id: 3, text: 'Comment three'},
            {id: 4, text: 'Comment four'},
        ]
        const loading: boolean = false
        const showComments: boolean = true
        if (loading)  return <h1>Loading...</h1>
        const commentBlock = (<div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
            {
                comments.map((comment, index)=>(
                        <>
                            <li key={index}>{comment.text}</li>
                        </>
                ))
            }
        </ul>
        </div>)
        return (
            <>
            <GlobalStyles/>
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            {Math.floor(Math.random()*(5*5))}
            {/* TERNARY OPERATOR 
                if showComments is true ? output this : else output this other thing
                Alternative
                {showComments && "yes"}
            */}
            <br />
            {showComments && commentBlock}
        
            </>
        )
    }
    export default App        
                    
                    