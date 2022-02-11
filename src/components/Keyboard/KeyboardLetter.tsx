type KeyboardProps = {
  content: string
  handleAddNewLetter: (letter: string) => void
}

const KeyboardLetter = ({ content, handleAddNewLetter }: KeyboardProps) => {
  const isSingleLetter = content.length === 1
  const bg = 'backdrop-brightness-75'
  const width = isSingleLetter ? 'w-12' : 'w-40'

  return (
    <button
      className={`${bg} grid h-12 ${width} place-items-center rounded-md text-2xl font-bold`}
      onClick={isSingleLetter ? () => handleAddNewLetter(content) : () => {}}
    >
      {content}
    </button>
  )
}

export default KeyboardLetter
