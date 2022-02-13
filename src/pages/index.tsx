import { GridLetterSquare, Keyboard, GameStatus } from 'src/components'
import { useLetter } from 'src/hooks/useLetter'

const Home = () => {
  const { letters, missingLetters, isGameOver } = useLetter()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-cyan-900 p-4 text-white">
      <h1 className="text-4xl font-bold">PALAVRECO</h1>
      <section className="space-y-4">
        <GameStatus />
        <div className="grid grid-cols-5 grid-rows-6 gap-2">
          {letters.map((letter, i) => (
            <GridLetterSquare letter={letter} key={i} />
          ))}
          {missingLetters.map((letter, i) => (
            <GridLetterSquare
              letter={{ value: letter, status: 'neutral', position: i % 5 }}
              key={i}
            />
          ))}
        </div>
        <div className="flex h-8 w-full items-center justify-center">
          {isGameOver && (
            <button
              className="text-l1 w-full rounded-md bg-cyan-700 p-2"
              onClick={() => window.location.reload()}
            >
              Jogar novamente
            </button>
          )}
        </div>
      </section>
      <Keyboard />
    </main>
  )
}

export default Home
