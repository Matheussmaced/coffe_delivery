import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 0.75rem;
    border: solid 1px ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-input']};
  }
`

export const InputCep = styled.input`
  width: 35%;
  margin-bottom: 1rem;
`
export const InputRua = styled.input`
  width: 100%;
  margin-bottom: 1rem;
`
export const InputNumero = styled.input`
  width: 35%;
  margin: 0 1% 1rem 0;
`
export const InputComplemento = styled.input`
  width: 64%;
`
export const InputBairro = styled.input`
  width: 35%;
  margin-right: 1%;
`
export const InputCidade = styled.input`
  width: 49%;
  margin-right: 1%;
`
export const InputUF = styled.input`
  width: 14%;
`
