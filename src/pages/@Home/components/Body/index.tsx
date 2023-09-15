import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  BodyContainer,
  BuyContainer,
  CarButton,
  Counter,
  TypesContainer,
} from './styled'
import { defaultTheme } from '../../../../components/styles/themes/default'
import { useState } from 'react'

interface BodyHomeProps {
  img: string
  name: string
  flavor: string
  description: string
  typeOne: string
  typeTwo?: string
  typeTree?: string
}

export const BodyHome = ({
  img,
  name,
  flavor,
  description,
  typeOne,
  typeTwo,
  typeTree,
}: BodyHomeProps) => {
  const coffeCard = {
    img,
    name,
    flavor,
    description,
    typeOne,
    typeTwo,
    typeTree,
  }

  const [coffes] = useState([coffeCard])

  const teste = coffes.map((coffe) => coffe)

  console.log(teste)

  return (
    <BodyContainer>
      {coffes.map((coffe) => {
        return (
          <div key={2}>
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
          <button>
            <Minus weight="bold" color={defaultTheme.purple} />
          </button>
          <span>1</span>
          <button>
            <Plus weight="bold" color={defaultTheme.purple} />
          </button>
        </Counter>

        <CarButton>
          <ShoppingCart weight="fill" size={22} />
        </CarButton>
      </BuyContainer>
    </BodyContainer>
  )
}
