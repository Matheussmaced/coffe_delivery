export const Form = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="Cep"></label>
          <input type="number" placeholder="CEP" />
        </div>

        <div>
          <label htmlFor="Rua"></label>
          <input type="text" placeholder="Rua" />
        </div>

        <div>
          <label htmlFor="numero"></label>
          <input type="number" placeholder="Número" />

          <label htmlFor="complemento"></label>
          <input type="text" placeholder="Complemento" />
        </div>

        <div>
          <label htmlFor="bairro"></label>
          <input type="text" placeholder="Bairro" />

          <label htmlFor="cidade"></label>
          <input type="text" placeholder="Cidade" />

          <label htmlFor="uf"></label>
          <input type="text" placeholder="UF" />
        </div>
      </form>
    </>
  )
}
