import { GridLetterSquare, Keyboard } from 'src/components'

const Home = () => {
  const mockArray = []
  for (let i = 0; i < 30; i++) {
    mockArray.push('teste')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-cyan-900 p-4 text-white">
      <h1 className="text-4xl font-bold">PALAVRECO</h1>
      <div className="grid grid-cols-5 grid-rows-6 gap-3">
        {mockArray.map((item, i) => (
          <GridLetterSquare key={i} />
        ))}
      </div>
      <Keyboard />
    </main>
  )
}

export default Home
