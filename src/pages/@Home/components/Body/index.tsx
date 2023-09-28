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
import { CoffeeCardContext } from '../../../../components/context/CoffeeCardContext'
import { AddToCarContext } from './context/AddToCarContext'

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
  count: number
  updateCount: (newValue: number) => void
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
  count,
  updateCount,
}: BodyHomeProps) => {
  let { CoffeeCard } = useContext(CoffeeCardContext)
  const addToCarContext = useContext(AddToCarContext)

  const [coffes] = useState<CoffeeCardProps[]>([
    { img, name, flavor, description, typeOne, typeTwo, typeTree, coffeId },
  ])

  if (!addToCarContext) {
    return null
  }
  const { coffeeCart, setCoffeeCart } = AddToCarContext

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

  function handleCountup() {
    updateCount(count + 1)
  }
  function handleCountdown() {
    if (count > 0) {
      updateCount(count - 1)
    }
  }

  return (
    <BodyContainer>
      {coffes.map((coffe, index) => {
        return (
          <div key={index}>
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
          <span>{count}</span>
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
