import {
  Buttons,
  CoffeeCard,
  CoffeeContainer,
  Confirme,
  Count,
  Delivery,
  Division,
  GrandTotal,
  InformsCoffeeCard,
  OrderSummary,
  Remove,
  SelectedCoffeeContainer,
  TotalItens,
} from './styles'

import coffee1 from '../../../../assets/Coffe2.svg'
import { Minus, Plus, Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../components/styles/themes/default'
import { NavLink } from 'react-router-dom'

export const SelectedCoffee = () => {
  return (
    <>
      <SelectedCoffeeContainer>
        <CoffeeContainer>
          <img src={coffee1} alt="coffe 1" width={64} />
          <CoffeeCard>
            <InformsCoffeeCard>
              <span>Expresso Tradicional</span>
              <Buttons>
                <Count>
                  <button>
                    <Minus size={14} color={defaultTheme.purple} />
                  </button>
                  1
                  <button>
                    <Plus size={14} color={defaultTheme.purple} />
                  </button>
                </Count>

                <Remove>
                  <Trash size={16} color={defaultTheme.purple} />
                  Remover
                </Remove>
              </Buttons>
            </InformsCoffeeCard>
            <strong>R$ 9,90</strong>
          </CoffeeCard>
        </CoffeeContainer>

        <Division></Division>

        <OrderSummary>
          <TotalItens>
            <p>Total de itens</p>
            <span>R$ 29,70</span>
          </TotalItens>
          <Delivery>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </Delivery>
          <GrandTotal>
            <p>Total</p>
            <span>R$ 33,20</span>
          </GrandTotal>
        </OrderSummary>

        <NavLink to="/success" title="Confirmar pedido">
          <Confirme>CONFIRMAR PEDIDO</Confirme>
        </NavLink>
      </SelectedCoffeeContainer>
    </>
  )
}
