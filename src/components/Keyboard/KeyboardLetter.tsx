import { useLetter } from 'src/hooks/useLetter'

type KeyboardProps = {
  letter: string
}

const KeyboardLetter = ({ letter }: KeyboardProps) => {
  const { letters, setLetters, setMissingLetters, lastFinishedRow } =
    useLetter()

  const handleAddNewLetter = (letter: string) => {
    setLetters((previousLetters) => [
      ...previousLetters,
      {
        value: letter,
        status: 'neutral',
        position: previousLetters.length % 5,
      },
    ])
    setMissingLetters((previousMissingLetters) =>
      previousMissingLetters.filter((_, index) => index !== 0)
    )
  }

  const bg = 'backdrop-brightness-75'

  return (
    <button
      className={`${bg} grid h-12 w-12 place-items-center rounded-md text-2xl font-bold uppercase hover:brightness-75 disabled:cursor-not-allowed`}
      onClick={() => handleAddNewLetter(letter)}
      disabled={
        letters.length !== 0 &&
        letters.length % 5 === 0 &&
        letters.length / 5 !== lastFinishedRow
      }
    >
      {letter}
    </button>
  )
}

export default KeyboardLetter
