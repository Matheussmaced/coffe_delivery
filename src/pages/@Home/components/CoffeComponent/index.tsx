import { BodyHome } from '../Body'

import CoffeOne from '../../../../assets/Coffee1.svg'
import CoffeTwo from '../../../../assets/Coffe2.svg'
import CoffeTree from '../../../../assets/Coffe3.svg'
import CoffeFor from '../../../../assets/Coffe4.svg'

import CoffeFive from '../../../../assets/Coffe5.svg'
import CoffeSix from '../../../../assets/Coffe6.svg'
import CoffeSeven from '../../../../assets/Coffe7.svg'
import CoffeEight from '../../../../assets/Coffe8.svg'

import CoffeNine from '../../../../assets/Coffe9.svg'
import CoffeTen from '../../../../assets/Coffe10.svg'
import CoffeEleven from '../../../../assets/Coffe11.svg'
import CoffeTwelve from '../../../../assets/Coffe12.svg'

import CoffeThirteen from '../../../../assets/Coffe13.svg'
import CoffeFourteen from '../../../../assets/Coffe14.svg'

import { CoffeContainer } from './styled'

export const CoffeComponent = () => {
  return (
    <>
      <h2>Nossos cafés</h2>

      <CoffeContainer>
        <BodyHome
          img={CoffeOne}
          typeOne="Tradicional"
          name="Expresso Tradicional"
          flavor="O tradicional café feito com água quente e grãos moídos"
          description="Expresso Tradicional"
        />
        <BodyHome
          img={CoffeTwo}
          typeOne="Tradicional"
          name="Expresso Americano"
          flavor="Expresso diluído, menos intenso que o tradicional"
          description="Expresso Americano"
        />
        <BodyHome
          img={CoffeTree}
          typeOne="Tradicional"
          name="Expresso Cremoso"
          flavor="Café expresso tradicional com espuma cremosa"
          description="Expresso Cremoso"
        />
        <BodyHome
          img={CoffeFor}
          typeOne="Tradicional"
          typeTwo="gelado"
          name="Expresso Gelado"
          flavor="Bebida preparada com café expresso e cubos de gelo"
          description="Expresso Gelado"
        />
      </CoffeContainer>

      <CoffeContainer>
        <BodyHome
          img={CoffeFive}
          typeOne="Tradicional"
          typeTwo="com leite"
          name="Café com Leite"
          flavor="Meio a meio de expresso tradicional com leite vaporizado"
          description="Café com Leite"
        />
        <BodyHome
          img={CoffeSix}
          typeOne="Tradicional"
          typeTwo="com leite"
          name="Latte"
          flavor="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          description="Latte"
        />
        <BodyHome
          img={CoffeSeven}
          typeOne="Tradicional"
          typeTwo="com leite"
          name="Capuccino"
          flavor="Bebida com canela feita de doses iguais de café, leite e espuma"
          description="Capuccino"
        />
        <BodyHome
          img={CoffeEight}
          typeOne="Tradicional"
          typeTwo="com leite"
          name="Macchiato"
          flavor="Café expresso misturado com um pouco de leite quente e espuma"
          description="Macchiato"
        />
      </CoffeContainer>

      <CoffeContainer>
        <BodyHome
          img={CoffeNine}
          typeOne="Tradicional"
          typeTwo="com leite"
          name="Mocaccino"
          flavor="Café expresso com calda de chocolate, pouco leite e espuma"
          description="Mocaccino"
        />
        <BodyHome
          img={CoffeTen}
          typeOne="Tradicional"
          typeTwo="com leite"
          name="Chocolate Quente"
          flavor="Bebida feita com chocolate dissolvido no leite quente e café"
          description="Chocolate Quente"
        />
        <BodyHome
          img={CoffeEleven}
          typeOne="especial"
          typeTwo="alcoólico"
          typeTree="gelado"
          name="Cubano"
          flavor="Drink gelado de café expresso com rum, creme de leite e hortelã"
          description="Cubano"
        />
        <BodyHome
          img={CoffeTwelve}
          typeOne="Tradicional"
          name="Havaiano"
          flavor="Bebida adocicada preparada com café e leite de coco"
          description="Havaiano"
        />
      </CoffeContainer>

      <CoffeContainer>
        <BodyHome
          img={CoffeThirteen}
          typeOne="especial"
          name="Árabe"
          flavor="Bebida preparada com grãos de café árabe e especiarias"
          description="Árabe"
        />
        <BodyHome
          img={CoffeFourteen}
          typeOne="especial"
          typeTwo="alcoólico"
          name="Irlandês"
          flavor="Bebida a base de café, uísque irlandês, açúcar e chantilly"
          description="alcoólico"
        />
      </CoffeContainer>
    </>
  )
}
