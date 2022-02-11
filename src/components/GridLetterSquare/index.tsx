import { LetterType, LetterStatusType } from 'src/types'

type GridLetterSquareProps = {
  letter: LetterType
}

const GridLetterSquare = ({ letter }: GridLetterSquareProps) => {
  const getBackgroundByStatus = (status: LetterStatusType): string =>
    ({
      neutral: 'backdrop-brightness-90',
      correct: 'bg-green-500',
      existent: 'bg-yellow-600',
      inexistent: 'bg-slate-800',
    }[status])

  const bg = getBackgroundByStatus(letter.status)

  return (
    <div
      className={`grid h-20 w-20 place-items-center rounded-xl ${bg} text-5xl uppercase`}
    >
      <span className="font-bold">{letter.value}</span>
    </div>
  )
}

export { GridLetterSquare }
