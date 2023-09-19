import styled from 'styled-components'

export const PaymentComponent = styled.div`
  display: flex;
  gap: 0.5rem;

  margin: 5.75rem 0;
`

export const FormOfPayment = styled.div`
  display: flex;

  span {
    display: flex;
    align-items: center;

    justify-content: center;
    gap: 0.75rem;
  }

  button {
    padding: 1rem;
    margin-right: 12px;
    width: 33.33%;

    background-color: ${(props) => props.theme['base-button']};
    border: none;
    cursor: pointer;
  }
`
