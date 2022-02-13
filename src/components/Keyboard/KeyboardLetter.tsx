import { useLetter } from 'src/hooks/useLetter'
import { LetterStatusType } from 'src/types'

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

  const getLetterStatus = (): LetterStatusType => {
    const statusQuantity = {
      correct: 0,
      existent: 0,
      inexistent: 0,
      neutral: 0,
    }

    letters.forEach((currentLetter) => {
      if (currentLetter.value !== letter) {
        return
      }

      statusQuantity[currentLetter.status] =
        statusQuantity[currentLetter.status] + 1
    })

    if (statusQuantity.correct > 0) return 'correct'
    if (statusQuantity.existent > 0) return 'existent'
    if (statusQuantity.inexistent > 0) return 'inexistent'
    return 'neutral'
  }

  const getBackgroundByStatus = (status: LetterStatusType): string =>
    ({
      neutral: 'backdrop-brightness-90',
      correct: 'bg-green-500',
      existent: 'bg-yellow-600',
      inexistent: 'bg-slate-800',
    }[status])

  const bg = getBackgroundByStatus(getLetterStatus())

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
