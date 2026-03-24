import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <div className="Container">
        <Card
          Titulo="O que são props?"
          desc="Props são dados passados de um componente para outro, permitindo que ele mostre informações diferentes."
          code={`<Card titulo="Olá mundo" />`}
        />

        <Card
          Titulo="O que é useState?"
          desc="O useState é um hook que permite adicionar estado a componentes no React. Ele retorna um valor atual e uma função para atualizá-lo, tornando possível controlar dados dinâmicos como cliques, inputs e exibição de elementos na interface."
          code={`
              import React, { useState } from "react";

              function Contador() {
                const [contador, setContador] = useState(0);

                return (
                  <div>
                    <p>Valor: {contador}</p>
                    <button onClick={() => setContador(contador + 1)}>
                      Incrementar
                    </button>
                  </div>
                );
              }

              export default Contador;
            `}
        />

        <Card
          Titulo="Atualizando o estado"
          desc="No React, o estado nunca deve ser alterado diretamente. Em vez disso, utilizamos a função retornada pelo useState para atualizar o valor. Isso garante que o React re-renderize o componente corretamente e mantenha a interface sincronizada com os dados."
          code={`
              const [contador, setContador] = useState(0);
              setContador((prev) => prev + 1);
            `}
        />

        <Card
          Titulo="Estado em formulários"
          desc="O state é muito usado em formulários para armazenar valores de campos como inputs, selects e checkboxes. A cada alteração do usuário, o estado é atualizado, permitindo validação, envio de dados e controle total da interface."
          code={`
            import { useState } from "react";

            function Form() {
              const [nome, setNome] = useState("");

              return (
                <form>
                  <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite seu nome"
                  />

                  <p>Olá, {nome}</p>
                </form>
              );
            }

            export default Form;
            `}
        />

        <Card
          Titulo="Estado com objetos ou arrays"
          desc="O state também pode armazenar objetos e arrays, permitindo lidar com listas, APIs ou estruturas mais complexas. Ao atualizar esses dados, é importante criar cópias (usando spread, por exemplo) para manter a imutabilidade e evitar erros."
          code={`
            const [usuario, setUsuario] = useState({
              nome: "Ana",
              idade: 25
            });

            setUsuario((prev) => ({
              ...prev,
              idade: 26
            }));
            `}
        />
      </div>
    </>
  );
}

export default App;
