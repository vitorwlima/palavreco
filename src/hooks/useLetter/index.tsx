import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

import { usableWords } from 'src/constants'
import { getRandomIntegerFrom } from 'src/utils'
import { LetterType, LetterStatusType } from 'src/types'

type LetterContextType = {
  letters: LetterType[]
  setLetters: Dispatch<SetStateAction<LetterType[]>>
  missingLetters: string[]
  setMissingLetters: Dispatch<SetStateAction<string[]>>
  lastFinishedRow: number
  setLastFinishedRow: Dispatch<SetStateAction<number>>
  gameWord: string
  getBackgroundByStatus: (status: LetterStatusType) => string
}

type LetterContextProviderProps = {
  children: ReactNode
}

const LetterContext = createContext<LetterContextType>({} as LetterContextType)

const initialMissingLetters: string[] = []

for (let i = 0; i < 30; i++) {
  initialMissingLetters.push('')
}

const gameWordIndex = getRandomIntegerFrom(0, usableWords.length - 1)
const gameWord = usableWords[gameWordIndex]

const getBackgroundByStatus = (status: LetterStatusType): string =>
  ({
    neutral: 'backdrop-brightness-90',
    correct: 'bg-green-500',
    existent: 'bg-yellow-600',
    inexistent: 'bg-slate-800',
  }[status])

const LetterContextProvider = ({ children }: LetterContextProviderProps) => {
  const [letters, setLetters] = useState<LetterType[]>([])
  const [missingLetters, setMissingLetters] = useState(initialMissingLetters)
  const [lastFinishedRow, setLastFinishedRow] = useState(0)

  return (
    <LetterContext.Provider
      value={{
        letters,
        setLetters,
        missingLetters,
        setMissingLetters,
        lastFinishedRow,
        setLastFinishedRow,
        gameWord,
        getBackgroundByStatus,
      }}
    >
      {children}
    </LetterContext.Provider>
  )
}

const useLetter = () => {
  const letter = useContext(LetterContext)
  return letter
}

export { LetterContextProvider, useLetter }
