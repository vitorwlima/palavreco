type LetterStatusType = 'neutral' | 'inexistent' | 'existent' | 'correct'

type LetterType = {
  value: string
  status: LetterStatusType
}

export type { LetterType, LetterStatusType }
