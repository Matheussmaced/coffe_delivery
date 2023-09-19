import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { FormOfPayment, PaymentComponent } from './styles'
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

      <FormOfPayment>
        <button>
          <span>
            <CreditCard size={16} color={defaultTheme.purple} />
            Cartão de crédito
          </span>
        </button>
        <button>
          <span>
            <Bank size={16} color={defaultTheme.purple} />
            cartão de débito
          </span>
        </button>
        <button>
          <span>
            <Money size={16} color={defaultTheme.purple} />
            dinheiro
          </span>
        </button>
      </FormOfPayment>
    </>
  )
}
