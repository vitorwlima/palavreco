import KeyboardDelete from './KeyboardDelete'
import KeyboardEnter from './KeyboardEnter'
import KeyboardLetter from './KeyboardLetter'

const Keyboard = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-3">
        <KeyboardDelete />
        <KeyboardEnter />
      </div>
      <div className="flex gap-3">
        <KeyboardLetter letter="Q" />
        <KeyboardLetter letter="W" />
        <KeyboardLetter letter="E" />
        <KeyboardLetter letter="R" />
        <KeyboardLetter letter="T" />
        <KeyboardLetter letter="Y" />
        <KeyboardLetter letter="U" />
        <KeyboardLetter letter="I" />
        <KeyboardLetter letter="O" />
        <KeyboardLetter letter="P" />
      </div>
      <div className="flex gap-3">
        <KeyboardLetter letter="A" />
        <KeyboardLetter letter="S" />
        <KeyboardLetter letter="D" />
        <KeyboardLetter letter="F" />
        <KeyboardLetter letter="G" />
        <KeyboardLetter letter="H" />
        <KeyboardLetter letter="J" />
        <KeyboardLetter letter="K" />
        <KeyboardLetter letter="L" />
      </div>
      <div className="flex gap-3">
        <KeyboardLetter letter="Z" />
        <KeyboardLetter letter="X" />
        <KeyboardLetter letter="C" />
        <KeyboardLetter letter="V" />
        <KeyboardLetter letter="B" />
        <KeyboardLetter letter="N" />
        <KeyboardLetter letter="M" />
      </div>
    </div>
  )
}

export { Keyboard }
