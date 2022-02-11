import { useLetter } from 'src/hooks/useLetter'
import { LetterStatusType } from 'src/types'

const KeyboardEnter = () => {
  const { gameWord, letters, setLetters, lastFinishedRow, setLastFinishedRow } =
    useLetter()

  const getStatusByLetter = (
    letter: string,
    index: number
  ): LetterStatusType => {
    const letterPosition = index % 5

    if (gameWord[letterPosition] === letter) {
      return 'correct'
    }

    if (gameWord.includes(letter)) {
      return 'existent'
    }

    return 'inexistent'
  }

  const handleFinishCurrentRow = () => {
    setLastFinishedRow((previousFinishedRow) => previousFinishedRow + 1)
    setLetters((previousLetters) =>
      previousLetters.map((letter, index) => ({
        value: letter.value,
        status: getStatusByLetter(letter.value, index),
      }))
    )
  }

  const allowed =
    letters.length !== 0 &&
    letters.length % 5 === 0 &&
    letters.length / 5 !== lastFinishedRow

  return (
    <button
      className="grid h-12 w-40 place-items-center rounded-md text-2xl font-bold backdrop-brightness-75 hover:brightness-75 disabled:cursor-not-allowed"
      onClick={handleFinishCurrentRow}
      disabled={!allowed}
    >
      ENTER
    </button>
  )
}

export default KeyboardEnter
