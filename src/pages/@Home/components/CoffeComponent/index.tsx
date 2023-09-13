import { BodyHome } from '../Body'

import CoffeOne from '../../../../assets/Coffee1.svg'

export const CoffeComponent = () => {
  return (
    <>
      <h2>Nossos cafés</h2>

      <div>
        <BodyHome
          img={CoffeOne}
          name="Capuccino"
          flavor="Bebida com canela feita de doses iguais de café, leite e espuma"
          description="Capuccino"
        />
      </div>
    </>
  )
}
