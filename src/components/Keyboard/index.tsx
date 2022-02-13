import KeyboardDelete from './KeyboardDelete'
import KeyboardEnter from './KeyboardEnter'
import KeyboardLetter from './KeyboardLetter'

const Keyboard = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
        <KeyboardDelete />
        <KeyboardEnter />
      </div>
      <div className="flex gap-2">
        <KeyboardLetter letter="q" />
        <KeyboardLetter letter="w" />
        <KeyboardLetter letter="e" />
        <KeyboardLetter letter="r" />
        <KeyboardLetter letter="t" />
        <KeyboardLetter letter="y" />
        <KeyboardLetter letter="u" />
        <KeyboardLetter letter="i" />
        <KeyboardLetter letter="o" />
        <KeyboardLetter letter="p" />
      </div>
      <div className="flex gap-2">
        <KeyboardLetter letter="a" />
        <KeyboardLetter letter="s" />
        <KeyboardLetter letter="d" />
        <KeyboardLetter letter="f" />
        <KeyboardLetter letter="g" />
        <KeyboardLetter letter="h" />
        <KeyboardLetter letter="j" />
        <KeyboardLetter letter="k" />
        <KeyboardLetter letter="l" />
      </div>
      <div className="flex gap-2">
        <KeyboardLetter letter="z" />
        <KeyboardLetter letter="x" />
        <KeyboardLetter letter="c" />
        <KeyboardLetter letter="v" />
        <KeyboardLetter letter="b" />
        <KeyboardLetter letter="n" />
        <KeyboardLetter letter="m" />
      </div>
    </div>
  )
}

export { Keyboard }
