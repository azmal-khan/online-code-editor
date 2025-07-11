import  React, {useEffect, useState} from 'react'

import Editor from "./Editor.jsx"
import useLocalStorage from "../hooks/useLocalStorage.jsx"

function App() {
const [html, setHtml] = useLocalStorage('html', '');
const [css, setCss] = useLocalStorage('css', '');
const [js, setJs] = useLocalStorage('js', '');
const [srcDoc, setSrcDoc] = useState('')

useEffect(()=> {
const timeout = setTimeout(() =>{
setSrcDoc(`
<html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}<\/script>
  </html>
`)
}, 260);
return () => clearTimeout(timeout)
}, [html, css, js])

  return (
    <>
    <div className="pane top-pane">
      <Editor 
  language="xml" 
  displayName="HTML" 
  value={html}
  onChange={setHtml}
/>
<Editor
  language="css"
  displayName="CSS"
  value={css}
  onChange={setCss}
/>
<Editor 
  language="javascript"
  displayName="JS"
  value={js}
  onChange={setJs}
/>
    </div>
    <div className="pane">
      <iframe
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      style={{border: '0'}}
      width="100%"
      height="100%"
      />
    </div>
        
    </>
  );
}

export default App
