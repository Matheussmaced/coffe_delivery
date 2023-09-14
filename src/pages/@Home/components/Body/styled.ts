import styled from 'styled-components'

export const BodyContainer = styled.div`
  margin: 3.37rem auto;
  background-color: red;
  width: 16rem;
  text-align: center;
  padding: 0 1.25rem 1.25rem;

  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    margin: -1.25rem auto;
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;

    margin: 1rem 0 0.5rem 0;
  }
`

export const TypesContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin-top: 0.25rem;
  font-size: 0.625rem;
  font-weight: 700;

  span {
    margin-top: 1rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    gap: 0.25rem;
  }
`

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.43rem;

  #priceContainer {
    font-size: 0.875rem;
  }
  #price {
    font-size: 1.5rem;
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;

  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  button {
    border: none;
    display: flex;
    cursor: pointer;
  }
`

export const CarButton = styled.button`
  display: flex;
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};

  border: none;
  padding: 0.5rem;
  border-radius: 6px;
`
