export function ContentEditable({
  inputRef,
  inputValue,
  handleInput,
  handleKeyDown,
  handleClick,
}) {
  function contentEditableInputMoveCursorToEnd(ref) {
    let sel, range;
    if (window.getSelection && document.createRange) {
      range = document.createRange();
      range.selectNodeContents(ref);
      range.collapse(false);
      sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (document.body.createTextRange) {
      range = document.body.createTextRange();
      range.moveToElementText(ref);
      range.select();
    }
  }

  return (
    <div
      ref={inputRef}
      contentEditable
      suppressContentEditableWarning
      style={{ border: '1px solid black', padding: '5px 10px' }}
      onInput={(e) => {
        handleInput(e);
        contentEditableInputMoveCursorToEnd(inputRef.current);
      }}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      {inputValue}
    </div>
  );
}
