import { NavLink } from 'react-router-dom'
import {
  Confirme,
  Delivery,
  Division,
  GrandTotal,
  TotalItens,
  OrderSummary,
} from '../../styles'

export const OrderSummaryContainer = () => {
  return (
    <>
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
    </>
  )
}
