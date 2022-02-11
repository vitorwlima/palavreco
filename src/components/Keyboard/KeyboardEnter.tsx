import { useLetter } from 'src/hooks/useLetter'

const KeyboardEnter = () => {
  const { letters, lastFinishedRow, setLastFinishedRow } = useLetter()

  const handleFinishCurrentRow = () => {
    setLastFinishedRow((previousFinishedRow) => previousFinishedRow + 1)
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
