import { useState } from 'react'

import { GridLetterSquare, Keyboard } from 'src/components'

const initialMissingLetters: string[] = []

for (let i = 0; i < 30; i++) {
  initialMissingLetters.push('')
}

const Home = () => {
  const [letters, setLetters] = useState<string[]>([])
  const [missingLetters, setMissingLetters] = useState<string[]>(
    initialMissingLetters
  )

  const handleAddNewLetter = (letter: string) => {
    setLetters((previousLetters) => [...previousLetters, letter])
    setMissingLetters((previousMissingLetters) =>
      previousMissingLetters.filter((_, index) => index !== 0)
    )
  }

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
      <Keyboard handleAddNewLetter={handleAddNewLetter} />
    </main>
  )
}

export default Home
