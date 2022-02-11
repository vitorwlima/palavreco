import { useLetter } from 'src/hooks/useLetter'

type KeyboardProps = {
  content: string
}

const KeyboardLetter = ({ content }: KeyboardProps) => {
  const { setLetters, setMissingLetters } = useLetter()

  const handleAddNewLetter = (letter: string) => {
    setLetters((previousLetters) => [...previousLetters, letter])
    setMissingLetters((previousMissingLetters) =>
      previousMissingLetters.filter((_, index) => index !== 0)
    )
  }

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
