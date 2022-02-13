import { useLetter } from 'src/hooks/useLetter'

const GameStatus = () => {
  const { gameStatus } = useLetter()
  const opacity = gameStatus.show ? 'opacity-100' : 'opacity-0'

  return (
    <div
      className={`rounded-md bg-cyan-800 py-3 text-center font-bold ${opacity}`}
    >
      <h3 className="text-xl">{gameStatus.text}</h3>
    </div>
  )
}

export { GameStatus }
