type KeyboardProps = {
  content: string
}

const KeyboardLetter = ({ content }: KeyboardProps) => {
  const bg = 'backdrop-brightness-75'
  const width = content.length > 1 ? 'w-40' : 'w-12'

  return (
    <button
      className={`${bg} grid h-12 ${width} place-items-center rounded-md text-2xl font-bold`}
    >
      {content}
    </button>
  )
}

export default KeyboardLetter
