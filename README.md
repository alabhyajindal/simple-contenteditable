### simple-contenteditable

A tiny contenteditable controlled component for React. Pass the value and ref as a prop to the component. Example:

```js
const [text, setText] = useState('');
const inputRef = useRef(null);

function handleInput(e) {
  console.log(e.target.innerText);
  setText(e.target.innerText);
}

return (
  <div>
    <ContentEditable
      inputRef={inputRef}
      inputValue={text}
      handleInput={handleInput}
    />
  </div>
);
```
