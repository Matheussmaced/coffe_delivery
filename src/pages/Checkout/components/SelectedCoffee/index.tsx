import { SelectedCoffeeContainer } from './styles'

import { CoffeeContainerComponent } from './components/CoffeeContainer'
import { OrderSummaryContainer } from './components/OrderSummary'
import { AddToCarContext } from '../../../@Home/components/Body/context/AddToCarContext'
import React, { useContext } from 'react'

export const SelectedCoffee = () => {
  const AddToCart = useContext(AddToCarContext)
  if (!AddToCart) {
    return null
  }

  const { coffeeCart } = AddToCart

  return (
    <>
      {coffeeCart.length >= 1 ? (
        <SelectedCoffeeContainer>
          {coffeeCart.map((coffee, index) => (
            <React.Fragment key={index}>
              <CoffeeContainerComponent />
            </React.Fragment>
          ))}
          <OrderSummaryContainer />
        </SelectedCoffeeContainer>
      ) : (
        ''
      )}
    </>
  )
}
