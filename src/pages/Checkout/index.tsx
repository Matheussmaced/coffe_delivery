import { MapPin } from 'phosphor-react'
import {
  CheckoutContainer,
  Delivery,
  FormContainer,
  FormInforms,
} from './styles'

import { Form } from './components/Form/index'
import { Payment } from './components/Payment'
import { defaultTheme } from '../../components/styles/themes/default'
import { SelectedCoffee } from './components/SelectedCoffee'

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <FormInforms>
        <h2>Complete seu pedido</h2>

        <FormContainer>
          <Delivery>
            <MapPin size={22} color={defaultTheme.yellow} />
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Delivery>
          <Form />
          <Payment />
        </FormContainer>
      </FormInforms>
      <SelectedCoffee />
    </CheckoutContainer>
  )
}
