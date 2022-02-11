import { useLetter } from 'src/hooks/useLetter'

type KeyboardProps = {
  letter: string
}

const KeyboardLetter = ({ letter }: KeyboardProps) => {
  const { setLetters, setMissingLetters } = useLetter()

  const handleAddNewLetter = (letter: string) => {
    setLetters((previousLetters) => [...previousLetters, letter])
    setMissingLetters((previousMissingLetters) =>
      previousMissingLetters.filter((_, index) => index !== 0)
    )
  }

  const bg = 'backdrop-brightness-75'

  return (
    <button
      className={`${bg} grid h-12 w-12 place-items-center rounded-md text-2xl font-bold`}
      onClick={() => handleAddNewLetter(letter)}
    >
      {letter}
    </button>
  )
}

export default KeyboardLetter
