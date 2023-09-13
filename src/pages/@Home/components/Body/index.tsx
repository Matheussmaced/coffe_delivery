import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import CoffeOne from '../../../../assets/Coffee1.svg'

export const BodyHome = () => {
  return (
    <>
      <h2>Nossos cafés</h2>

      <div>
        <img src={CoffeOne} alt="Café tradicional" />
        <h3>Expresso Tradicional</h3>
        <p>O tradicional café feito com água quente e grãos moídos</p>

        <div>
          <span>
            R$ <strong>9,90</strong>
          </span>
          <div>
            <Minus weight="bold" />
            <span>1</span>
            <Plus weight="bold" />
          </div>

          <span>
            <ShoppingCart weight="fill" />
          </span>
        </div>
      </div>
    </>
  )
}
