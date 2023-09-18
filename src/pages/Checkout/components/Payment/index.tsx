import { CurrencyDollar } from 'phosphor-react'
import { PaymentComponent } from './styles'
import { defaultTheme } from '../../../../components/styles/themes/default'

export const Payment = () => {
  return (
    <>
      <PaymentComponent>
        <CurrencyDollar size={22} color={defaultTheme.purple} />
        <div>
          <strong>Pagamento</strong>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentComponent>
    </>
  )
}
