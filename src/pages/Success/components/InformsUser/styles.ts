import styled from 'styled-components'

export const InformsUserContainer = styled.div`
  padding: 2.5rem;

  border: solid 1px ${(props) => props.theme.yellow};
  border-radius: 6px 36px;

  width: 100%;
  margin-top: 2.5rem;
`

export const Element = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const SecoundElement = styled(Element)`
  margin-top: 2rem;
`

export const ThirdElement = styled(Element)`
  margin-top: 2rem;
`

export const IconDefault = styled.span`
  display: flex;
  align-items: center;
  padding: 0.7rem;

  border-radius: 50%;
  color: ${(props) => props.theme.white};
`

export const IconPin = styled(IconDefault)`
  background-color: ${(props) => props.theme.purple};
`

export const IconTimer = styled(IconDefault)`
  background-color: ${(props) => props.theme.yellow};
`
