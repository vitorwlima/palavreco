type LetterStatusType = 'neutral' | 'inexistent' | 'existent' | 'correct'

type LetterType = {
  value: string
  status: LetterStatusType
  position: number
}

export type { LetterType, LetterStatusType }
