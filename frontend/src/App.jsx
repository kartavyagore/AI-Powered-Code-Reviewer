import { useState, useEffect } from 'react'
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import './App.css'
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function App() {
  const [count, setCount] = useState(0)
  const[code, setCode] = useState(`function sum(){
 return 1+1;
}`)

const [review, setReview] = useState(``);

  useEffect(() => {
    Prism.highlightAll();
  }, []); 

  async function reviewCode(){
    const response = await axios.post('https://ai-powered-code-reviewer-qgko.onrender.com/ai/get-review',{code});
    // console.log(response.data);
    setReview(response.data)
  }

  return (
    <>
      <div className="header">
      <header className="header">
        <h1 className="title">🚀 AI Code Reviewer</h1>
      </header>
      </div>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => Prism.highlight(code, Prism.languages.javascript,"javascript")}
              padditn={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                border: "1px solid #ddd" ,
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />  
          </div>
          <div onClick={reviewCode} className="review">Review my code</div>
        </div>
        <div className="right">
          <Markdown 
            rehypePlugins={[rehypeHighlight]}
          >{review}</Markdown>
        </div>
      </main>
      <footer className="footer">
        <p>⚡ Made with ❤️ by <span className="author">Kartavya</span></p>
      </footer>
    </>
  )
}

function sum(){
  return 1+1;
}

export default App
