import { useEffect, useState } from 'react'
import { useLetter } from 'src/hooks/useLetter'
import { LetterType, LetterStatusType } from 'src/types'
import { allWords } from '../../constants'

const KeyboardEnter = () => {
  const {
    gameWord,
    letters,
    setLetters,
    lastFinishedRow,
    setLastFinishedRow,
    setNewGameStatus,
    setIsGameOver,
  } = useLetter()

  const [correctLetters, setCorrectLetters] = useState(0)
  const [lettersUsed, setLettersUsed] = useState(0)

  const getStatusByLetter = (letter: LetterType): LetterStatusType => {
    setLettersUsed((prev) => prev + 1)

    if (gameWord[letter.position] === letter.value) {
      setCorrectLetters((prev) => prev + 1)
      return 'correct'
    }

    if (!gameWord.includes(letter.value)) {
      return 'inexistent'
    }

    const userWordLetterOccurrences = letters.filter(
      (currentLetter, index) =>
        index > lastFinishedRow * 5 &&
        index < (lastFinishedRow + 1) * 5 &&
        currentLetter.value === letter.value
    )
    const gameWordLetterOccurrences = gameWord
      .split('')
      .filter((currentLetter) => currentLetter === letter.value)

    const userWordLetterOccurrencesLength = userWordLetterOccurrences.length
    const gameWordLetterOccurrencesLength = gameWordLetterOccurrences.length

    if (userWordLetterOccurrencesLength === gameWordLetterOccurrencesLength) {
      return 'existent'
    }

    if (userWordLetterOccurrencesLength > gameWordLetterOccurrencesLength) {
      const correctOccurrences = userWordLetterOccurrences.filter(
        (item) => gameWord[item.position] === item.value
      )
      const letterShouldExist = userWordLetterOccurrences
        .filter((item) => gameWord[item.position] !== item.value)
        .filter(
          (_, index) =>
            index < gameWordLetterOccurrencesLength - correctOccurrences.length
        )
        .filter((item) => item.position === letter.position)

      if (letterShouldExist.length) {
        return 'existent'
      }

      return 'inexistent'
    }

    return 'existent'
  }

  const handleFinishCurrentRow = () => {
    if (
      !allWords.includes(
        letters
          .slice(lastFinishedRow * 5, (lastFinishedRow + 1) * 5)
          .map((item) => item.value)
          .join('')
      )
    ) {
      return setNewGameStatus('Palavra inexistente')
    }

    setCorrectLetters(0)
    setLastFinishedRow((previousFinishedRow) => previousFinishedRow + 1)
    setLetters((previousLetters) => [
      ...previousLetters.slice(0, lastFinishedRow * 5),
      ...previousLetters
        .slice(lastFinishedRow * 5, (lastFinishedRow + 1) * 5)
        .map((letter) => ({
          ...letter,
          status: getStatusByLetter(letter),
        })),
    ])
  }

  useEffect(() => {
    if (correctLetters === 5) {
      setIsGameOver(true)
      setNewGameStatus('Parabéns!')
    }

    if (lettersUsed === 30) {
      setIsGameOver(true)
      setNewGameStatus('Você perdeu!')
      console.log('A palavra certa era ', gameWord)
    }
  }, [correctLetters, lettersUsed])

  const allowed =
    letters.length !== 0 &&
    letters.length % 5 === 0 &&
    letters.length / 5 !== lastFinishedRow

  return (
    <button
      className="grid h-12 w-40 place-items-center rounded-md text-2xl font-bold backdrop-brightness-90 hover:brightness-75 disabled:cursor-not-allowed"
      onClick={handleFinishCurrentRow}
      disabled={!allowed}
    >
      ENTER
    </button>
  )
}

export default KeyboardEnter
