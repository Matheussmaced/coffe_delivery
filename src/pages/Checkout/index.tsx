import { MapPin } from 'phosphor-react'
import { CheckoutContainer, Delivery, FormContainer } from './styles'

import { Form } from './components/Form/index'

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <h2>Complete seu pedido</h2>

      <div>
        <FormContainer>
          <Delivery>
            <MapPin size={22} />
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Delivery>
          <Form />
        </FormContainer>
      </div>
    </CheckoutContainer>
  )
}
