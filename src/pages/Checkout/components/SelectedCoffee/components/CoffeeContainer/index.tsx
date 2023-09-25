import { Minus, Plus, Trash } from 'phosphor-react'
import {
  Buttons,
  CoffeeCard,
  CoffeeContainer,
  Count,
  InformsCoffeeCard,
  Remove,
} from '../../styles'
import { defaultTheme } from '../../../../../../components/styles/themes/default'
import { AddToCarContext } from '../../../../../@Home/components/Body/context/AddToCarContext'
import { useContext } from 'react'
import { CountContext } from '../../../../../../components/context/CountContext'

export const CoffeeContainerComponent = () => {
  const GlobalCount = useContext(CountContext)
  const AddToCart = useContext(AddToCarContext)

  if (!AddToCart) {
    return null
  }
  if (!GlobalCount) {
    return null
  }

  const { coffeeCart } = AddToCart
  // const { globalCount } = GlobalCount

  // const priceCoffees = 9.99

  // quero multiplicar o tamanho do array com o priceCoffees
  // tem que bater o id do CoffeeCart com o id dos meus componentes

  /*
  function SelectedCoffee(idCoffe: number) {
    const selectedCoffe = coffeeCart.filter(
      (coffe) => coffe.coffeId === idCoffe,
    )

    return selectedCoffe.length * priceCoffees
  }
  console.log(globalCount)
 */

  return (
    <>
      <CoffeeContainer>
        <img src={coffeeCart[0].img} alt="coffe 1" width={64} />
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
    </>
  )
}
