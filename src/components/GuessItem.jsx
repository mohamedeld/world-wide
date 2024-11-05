import { checkGuess } from "../game-helpers"
import { range } from "../utils"


const GuessItem = ({value,answer}) => {
  const result= checkGuess(value,answer)
  return (
    <p className='guess'>
    {range(6)?.map(num=>{
      return (
        <span key={crypto?.randomUUID()} className='cell'>{value ? value[num] : undefined}</span>
        
      )
    })
  }
  </p>
  )
}

export default GuessItem