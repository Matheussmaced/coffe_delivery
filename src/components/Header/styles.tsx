import styled from 'styled-components'

export const HeaderInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10rem;
  padding: 2rem 0;

  img {
    cursor: pointer;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
export const BasedSpan = styled.span`
  display: flex;
  align-items: center;

  padding: 0.5rem;

  border-radius: 5px;
  cursor: pointer;
`
export const SpanButtonMap = styled(BasedSpan)`
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  border: solid 1px transparent;

  font-size: 0.875rem;
  transition: 0.5s;

  &:hover {
    border: solid 1px ${(props) => props.theme['purple-dark']};
    transform: scale(1.05);
  }
`

export const SpanButtonCart = styled(BasedSpan)`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['purple-dark']};

  border: solid 1px transparent;
  transition: 0.5s;

  &:hover {
    border: solid 1px ${(props) => props.theme['yellow-dark']};
    transform: scale(1.05);
  }
`
