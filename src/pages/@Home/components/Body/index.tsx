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
  return (
    <BodyContainer>
      <img src={img} alt={description} />

      <TypesContainer>
        <span>{typeOne}</span>
        {typeTwo ? <span>{typeTwo}</span> : ''}
        {typeTree ? <span>{typeTree}</span> : ''}
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
          <ShoppingCart weight="fill" size={22} />
        </CarButton>
      </BuyContainer>
    </BodyContainer>
  )
}
