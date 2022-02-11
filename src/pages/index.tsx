import { GridLetterSquare, Keyboard } from 'src/components'
import { useLetter } from 'src/hooks/useLetter'

const Home = () => {
  const { letters, missingLetters } = useLetter()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-cyan-900 p-4 text-white">
      <h1 className="text-4xl font-bold">PALAVRECO</h1>
      <div className="grid grid-cols-5 grid-rows-6 gap-3">
        {letters.map((letter, i) => (
          <GridLetterSquare letter={letter} key={i} />
        ))}
        {missingLetters.map((letter, i) => (
          <GridLetterSquare letter={letter} key={i} />
        ))}
      </div>
      <Keyboard />
    </main>
  )
}

export default Home
