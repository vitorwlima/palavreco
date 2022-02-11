const GridLetterSquare = () => {
  const bg = 'backdrop-brightness-90'

  return (
    <div
      className={`grid h-20 w-20 place-items-center rounded-xl ${bg} text-5xl`}
    >
      <span className="font-bold">A</span>
    </div>
  )
}

export { GridLetterSquare }
