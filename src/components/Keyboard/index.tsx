import KeyboardLetter from './KeyboardLetter'

const Keyboard = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-3">
        <KeyboardLetter content="DELETE" />
        <KeyboardLetter content="ENTER" />
      </div>
      <div className="flex gap-3">
        <KeyboardLetter content="Q" />
        <KeyboardLetter content="W" />
        <KeyboardLetter content="E" />
        <KeyboardLetter content="R" />
        <KeyboardLetter content="T" />
        <KeyboardLetter content="Y" />
        <KeyboardLetter content="U" />
        <KeyboardLetter content="I" />
        <KeyboardLetter content="O" />
        <KeyboardLetter content="P" />
      </div>
      <div className="flex gap-3">
        <KeyboardLetter content="A" />
        <KeyboardLetter content="S" />
        <KeyboardLetter content="D" />
        <KeyboardLetter content="F" />
        <KeyboardLetter content="G" />
        <KeyboardLetter content="H" />
        <KeyboardLetter content="J" />
        <KeyboardLetter content="K" />
        <KeyboardLetter content="L" />
      </div>
      <div className="flex gap-3">
        <KeyboardLetter content="Z" />
        <KeyboardLetter content="X" />
        <KeyboardLetter content="C" />
        <KeyboardLetter content="V" />
        <KeyboardLetter content="B" />
        <KeyboardLetter content="N" />
        <KeyboardLetter content="M" />
      </div>
    </div>
  )
}

export { Keyboard }
