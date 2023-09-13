import styled from 'styled-components'

export const HomeContainer = styled.header`
  display: flex;
  flex-direction: column;
`

export const HomeContainerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 5.87rem 0 7.09rem 0;
  gap: 3.5rem;

  background-image: url('../../assets/Background-home.svg');
`
export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`

export const TitleAndSubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  p {
    margin: 1rem 0 4.46rem 0;
    font-size: 1.25rem;
  }
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 3.9rem;
    font-weight: 800;
  }
`

export const IconsDefault = styled.span`
  padding: 0.5rem 0.5rem 0.3rem;
  margin-right: 0.75rem;
  background-color: ${(props) => props.theme.purple};

  border-radius: 50%;
  color: ${(props) => props.theme.white};
`

export const IconCart = styled(IconsDefault)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
export const IconTimer = styled(IconsDefault)`
  background-color: ${(props) => props.theme.yellow};
`
export const IconPackage = styled(IconsDefault)`
  background-color: ${(props) => props.theme['base-text']};
  margin-left: 2.5rem;
`
export const IconCoffe = styled(IconsDefault)`
  background-color: ${(props) => props.theme.purple};
  margin-left: 2.3rem;
`

export const ColumOne = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.4rem;
`

export const ColumTwo = styled.div`
  display: flex;
  align-items: center;
`
