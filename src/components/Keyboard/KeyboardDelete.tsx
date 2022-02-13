import { useLetter } from 'src/hooks/useLetter'

const KeyboardDelete = () => {
  const {
    letters,
    setLetters,
    missingLetters,
    setMissingLetters,
    lastFinishedRow,
  } = useLetter()

  const handleDeleteLastLetter = () => {
    setLetters((previousLetters) =>
      previousLetters.filter((_, index) => index !== previousLetters.length - 1)
    )
    setMissingLetters((previousMissingLetters) => [
      ...previousMissingLetters,
      '',
    ])
  }

  const disabled =
    (letters.length % 5 === 0 && letters.length / 5 === lastFinishedRow) ||
    missingLetters.length === 30

  return (
    <button
      className="grid h-12 w-40 place-items-center rounded-md text-2xl font-bold backdrop-brightness-90 hover:brightness-75 disabled:cursor-not-allowed"
      onClick={handleDeleteLastLetter}
      disabled={disabled}
    >
      DELETE
    </button>
  )
}

export default KeyboardDelete
