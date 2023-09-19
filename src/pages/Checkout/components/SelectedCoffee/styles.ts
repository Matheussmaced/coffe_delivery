import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  height: 448px;
  overflow: auto;

  padding: 2.5rem;
`

export const CoffeeContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  span {
    margin-right: 1rem;
  }
`

export const CoffeeCard = styled.div`
  display: flex;
`

export const InformsCoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const Buttons = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`

export const Count = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;

  button {
    border: none;
    background-color: transparent;
    line-height: 0;
    cursor: pointer;
  }
`
export const Remove = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['base-button']};
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
`

export const Division = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme['base-button']};

  margin-top: 1.5rem;
`

export const OrderSummary = styled.div`
  margin-top: 1.5rem;
  line-height: 1.9;
`

export const TotalItens = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Delivery = styled.div`
  display: flex;
  justify-content: space-between;
`

export const GrandTotal = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.25rem;
    font-weight: 700;
  }
  span {
    font-size: 1.25rem;
    font-weight: 700;
  }
`

export const Confirme = styled.button`
  margin-top: 1.5rem;
  padding: 0.75rem 0.5rem;

  border-radius: 6px;
  border: none;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  font-weight: 700;
  font-size: 0.875rem;
  width: 100%;
  cursor: pointer;
`
