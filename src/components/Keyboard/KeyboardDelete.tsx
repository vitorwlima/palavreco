import { useLetter } from 'src/hooks/useLetter'

const KeyboardDelete = () => {
  const { setLetters, setMissingLetters, missingLetters } = useLetter()

  const handleDeleteLastLetter = () => {
    if (missingLetters.length === 30) {
      return
    }

    setLetters((previousLetters) =>
      previousLetters.filter((_, index) => index !== previousLetters.length - 1)
    )
    setMissingLetters((previousMissingLetters) => [
      ...previousMissingLetters,
      '',
    ])
  }

  return (
    <button
      className="grid h-12 w-40 place-items-center rounded-md text-2xl font-bold backdrop-brightness-75"
      onClick={handleDeleteLastLetter}
    >
      DELETE
    </button>
  )
}

export default KeyboardDelete
