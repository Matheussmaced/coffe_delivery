import {
  FormContainer,
  InputBairro,
  InputCep,
  InputCidade,
  InputComplemento,
  InputNumero,
  InputRua,
  InputUF,
} from './styles'

export const Form = () => {
  return (
    <FormContainer>
      <form>
        <div>
          <label htmlFor="CEP"></label>
          <InputCep type="number" placeholder="CEP" />
        </div>

        <div>
          <label htmlFor="rua"></label>
          <InputRua type="text" placeholder="Rua" />
        </div>

        <div>
          <label htmlFor="numero"></label>
          <InputNumero type="number" placeholder="Número" />

          <label htmlFor="complemento"></label>
          <InputComplemento type="text" placeholder="Complemento" />
        </div>

        <div>
          <label htmlFor="bairro"></label>
          <InputBairro type="text" placeholder="Bairro" />

          <label htmlFor="cidade"></label>
          <InputCidade type="text" placeholder="Cidade" />

          <label htmlFor="uf"></label>
          <InputUF type="text" placeholder="UF" />
        </div>
      </form>
    </FormContainer>
  )
}
