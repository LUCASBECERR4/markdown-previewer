import React, {useEffect, useState} from 'react';
import {marked} from 'marked';
import './App.scss';

function App() {
  const [text, setText] = useState(`
  # h1
  ## h2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
- First item
- Second item
- Third item
> blockquote
![alt text](image.jpg)
**bold text**

  `)
  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Convert your Markdown</h1>

        <div className='editor-wrapper'>
          <h4>Editor</h4>
        <textarea id="editor" onChange={(event)=>{
          setText(event.target.value);
          }}
          value={text}
          ></textarea>
        </div>

      <div className='preview-box'>
        <h4>Preview</h4>
      <div id='preview'
        dangerouslySetInnerHTML={{
          __html: marked(text),
         }}
          ></div>
      </div>
        
      </header>
    </div>
  );
}

export default App;
