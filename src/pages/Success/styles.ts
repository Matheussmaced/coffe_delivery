import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 5rem 0 0.25rem;
    color: ${(props) => props.theme['yellow-dark']};

    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 400;
  }
`

export const InformsUserContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  gap: 6.375rem;
`
