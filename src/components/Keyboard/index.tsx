import KeyboardLetter from './KeyboardLetter'

type KeyboardProps = {
  handleAddNewLetter: (letter: string) => void
}

const Keyboard = ({ handleAddNewLetter }: KeyboardProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-3">
        <KeyboardLetter
          handleAddNewLetter={handleAddNewLetter}
          content="DELETE"
        />
        <KeyboardLetter
          handleAddNewLetter={handleAddNewLetter}
          content="ENTER"
        />
      </div>
      <div className="flex gap-3">
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="Q" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="W" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="E" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="R" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="T" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="Y" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="U" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="I" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="O" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="P" />
      </div>
      <div className="flex gap-3">
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="A" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="S" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="D" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="F" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="G" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="H" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="J" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="K" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="L" />
      </div>
      <div className="flex gap-3">
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="Z" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="X" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="C" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="V" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="B" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="N" />
        <KeyboardLetter handleAddNewLetter={handleAddNewLetter} content="M" />
      </div>
    </div>
  )
}

export { Keyboard }
