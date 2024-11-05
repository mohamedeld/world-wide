import { range, sample } from "../utils"
import GuessItem from "./GuessItem"

const GuessResult = ({guesses}) => {
  const answer = sample(guesses)
  return (
    <div className='guess-results'>
      {range(6)?.map((num)=>{
        return(
          <GuessItem  key={crypto?.randomUUID()} answer={answer} value={guesses[num]}/>
        )
      })}
    </div>
  )
}

export default GuessResult