import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type LetterContextType = {
  letters: string[]
  setLetters: Dispatch<SetStateAction<string[]>>
  missingLetters: string[]
  setMissingLetters: Dispatch<SetStateAction<string[]>>
}

type LetterContextProviderProps = {
  children: ReactNode
}

const LetterContext = createContext<LetterContextType>({} as LetterContextType)

const initialMissingLetters: string[] = []

for (let i = 0; i < 30; i++) {
  initialMissingLetters.push('')
}

const LetterContextProvider = ({ children }: LetterContextProviderProps) => {
  const [letters, setLetters] = useState<string[]>([])
  const [missingLetters, setMissingLetters] = useState(initialMissingLetters)

  return (
    <LetterContext.Provider
      value={{ letters, setLetters, missingLetters, setMissingLetters }}
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
