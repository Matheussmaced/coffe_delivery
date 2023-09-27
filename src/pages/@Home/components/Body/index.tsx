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
import { CoffeeCardContext } from '../../../../components/context/CoffeeCardContext'
import { AddToCarContext } from './context/AddToCarContext'
// import BodyHomeContext from './CountContext'

interface CoffeeCardProps {
  img: string
  name: string
  flavor: string
  description: string
  typeOne: string
  typeTwo?: string
  typeTree?: string
  coffeId: number
}

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

/* No componente BodyHome, adicione a prop counts como um parâmetro da função de
componente e use-a para exibir o valor atual do count na sua renderização: */

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
  let { CoffeeCard } = useContext(CoffeeCardContext)
  const countContext = useContext(CountContext)
  const addToCarContext = useContext(AddToCarContext)

  const inicialCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  // só por enquanto
  const newInicialCounts = 0
  const [counts, setCounts] = useState(newInicialCounts)

  const [coffes, setCoffes] = useState<CoffeeCardProps[]>([
    { img, name, flavor, description, typeOne, typeTwo, typeTree, coffeId },
  ])

  if (!countContext) {
    return null
  }

  if (!addToCarContext) {
    return null
  }
  const { coffeeCart, setCoffeeCart } = AddToCarContext
  const { globalCount, setGlobalCount } = countContext

  const NewCoffeCard: CoffeeCardProps = {
    img,
    name,
    flavor,
    description,
    typeOne,
    typeTwo,
    typeTree,
    coffeId,
  }

  /* 
  const updateCounts = (index, newValue) => {
    const newCounts = [...counts]
    newCounts[index] = newValue
    setCounts(newCounts)

    if (globalCount) {
      const newGlobalCount = [...globalCount]
      newGlobalCount[index] = newValue
      setGlobalCount(newGlobalCount)
    }
  }
*/

  CoffeeCard = NewCoffeCard

  function addToCart(idCoffe: number) {
    const selectedCoffe = coffes.find((coffe) => coffe.coffeId === idCoffe)

    if (selectedCoffe && addToCarContext) {
      addToCarContext.setCoffeeCart([
        ...addToCarContext.coffeeCart,
        selectedCoffe,
      ])
    }

    return coffeeCart
  }
  /* 
  function handleCountup() {
    const newCount = counts + 1
    updateCounts(coffeId, newCount)

    if (globalCount) {
      const newGlobalCount = [...globalCount]
      newGlobalCount[coffeId - 1] = newCount
      setGlobalCount(newGlobalCount)
    }
  }

  function handleCountdown() {
    if (counts > 0) {
      const newCount = counts - 1

      updateCounts(coffeId, newCount)

      if (globalCount) {
        const newGlobalCount = [...globalCount]
        newGlobalCount[coffeId - 1] = newCount
        setGlobalCount(newGlobalCount)
      }
    }
  }
  */
  // só por enquanto
  function handleCountup() {
    setCounts(counts + 1)
  }
  function handleCountdown() {
    if (counts > 0) {
      setCounts(counts - 1)
    }
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
          <button onClick={handleCountdown}>
            <Minus weight="bold" color={defaultTheme.purple} />
          </button>
          <span>{counts}</span>
          <button onClick={handleCountup}>
            <Plus weight="bold" color={defaultTheme.purple} />
          </button>
        </Counter>

        <CarButton>
          <ShoppingCart
            weight="fill"
            size={22}
            onClick={() => addToCart(coffes[0].coffeId)}
          />
        </CarButton>
      </BuyContainer>
    </BodyContainer>
  )
}
