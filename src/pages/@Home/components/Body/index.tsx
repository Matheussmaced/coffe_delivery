import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  BodyContainer,
  BuyContainer,
  CarButton,
  Counter,
  TypesContainer,
} from './styled'
import { defaultTheme } from '../../../../components/styles/themes/default'
import { useState, useContext } from 'react'
import { CountContext } from '../../../../components/context/CountContext'
// import BodyHomeContext from './CountContext'

interface BodyHomeProps {
  img: string
  name: string
  flavor: string
  description: string
  typeOne: string
  typeTwo?: string
  typeTree?: string
  coffeId: number
}

export const BodyHome = ({
  img,
  name,
  flavor,
  description,
  typeOne,
  typeTwo,
  typeTree,
  coffeId,
}: BodyHomeProps) => {
  const [count, setCount] = useState(0)

  const coffeCard = {
    img,
    name,
    flavor,
    description,
    typeOne,
    typeTwo,
    typeTree,
    coffeId,
  }

  const [coffes] = useState([coffeCard])

  const countContext = useContext(CountContext)
  if (!countContext) {
    return null
  }

  const { globalCount, setGlobalCount } = countContext

  function countup() {
    setCount(count + 1)
    setGlobalCount(globalCount + 1)
  }

  function countdown() {
    if (count > 0) {
      setCount(count - 1)
      setGlobalCount(globalCount - 1)
    }
  }

  function addToCar() {
    const valueCoffe = 9.99

    return console.log(count * valueCoffe)
  }

  return (
    <BodyContainer>
      {coffes.map((coffe) => {
        return (
          <div key={coffeId}>
            <img src={coffe.img} alt={coffe.description} />

            <TypesContainer>
              <span>{coffe.typeOne}</span>
              {coffe.typeTwo ? <span>{coffe.typeTwo}</span> : ''}
              {coffe.typeTree ? <span>{coffe.typeTree}</span> : ''}
            </TypesContainer>

            <h3>{coffe.name}</h3>
            <p>{coffe.flavor}</p>
          </div>
        )
      })}

      <BuyContainer>
        <span id="priceContainer">
          R$ <strong id="price">9,90</strong>
        </span>
        <Counter>
          <button onClick={countdown}>
            <Minus weight="bold" color={defaultTheme.purple} />
          </button>
          <span>{count}</span>
          <button onClick={countup}>
            <Plus weight="bold" color={defaultTheme.purple} />
          </button>
        </Counter>

        <CarButton>
          <ShoppingCart weight="fill" size={22} onClick={addToCar} />
        </CarButton>
      </BuyContainer>
    </BodyContainer>
  )
}
