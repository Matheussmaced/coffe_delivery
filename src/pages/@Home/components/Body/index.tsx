import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  BodyContainer,
  BuyContainer,
  CarButton,
  Counter,
  TypesContainer,
} from './styled'
import { defaultTheme } from '../../../../components/styles/themes/default'

interface BodyHomeProps {
  img: string
  name: string
  flavor: string
  description: string
  typeOne: string
  typeTwo?: string
}

export const BodyHome = ({
  img,
  name,
  flavor,
  description,
  typeOne,
  typeTwo,
}: BodyHomeProps) => {
  return (
    <BodyContainer>
      <img src={img} alt={description} />

      <TypesContainer>
        <span>{typeOne}</span>
        <span>{typeTwo}</span>
      </TypesContainer>

      <h3>{name}</h3>
      <p>{flavor}</p>

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
          <ShoppingCart weight="fill" />
        </CarButton>
      </BuyContainer>
    </BodyContainer>
  )
}
