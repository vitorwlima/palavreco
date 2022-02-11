import { LetterType } from 'src/types'
import { useLetter } from 'src/hooks/useLetter'

type GridLetterSquareProps = {
  letter: LetterType
}

const GridLetterSquare = ({ letter }: GridLetterSquareProps) => {
  const { getBackgroundByStatus } = useLetter()
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
