type GridLetterSquareProps = {
  letter: string
}

const GridLetterSquare = ({ letter }: GridLetterSquareProps) => {
  const bg = 'backdrop-brightness-90'

  return (
    <div
      className={`grid h-20 w-20 place-items-center rounded-xl ${bg} text-5xl`}
    >
      <span className="font-bold">{letter}</span>
    </div>
  )
}

export { GridLetterSquare }
