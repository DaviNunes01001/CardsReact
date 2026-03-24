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
        <Card
          Titulo="O que são componentes?"
          desc="Componentes são blocos reutilizáveis de código no React que representam partes da interface. Eles permitem dividir a tela em pedaços menores e organizados."
          code={`function App() {
        return <h1>Olá React</h1>;
        }`}
        />
        <Card
          Titulo="Criando um componente funcional"
          desc="Um componente funcional é uma função JavaScript que retorna JSX . É a forma mais comum de criar componentes no React atualmente."
          code={`function Saudacao() {
        return <h2>Bem-vindo!</h2>;
        }
        
        function App() {
        return <Saudacao />;
        }`}
        />
        <Card
          Titulo="Reutilização de componentes"
          desc="A reutilização permite usar o mesmo componente várias vezes na aplicação. Isso torna o projeto mais organizado e fácil de manter."
          code={`function Botao() {
        return <button>Clique aqui</button>;
        }

        function App() {
        return (
        <>

        <Botao />
        <Botao />
        </>
        );
        }`}
        />
        <Card
          Titulo="Organização de componentes em pastas"
          desc="Organizar componentes em pastas ajuda a manter o projeto fácil de entender. Cada componente pode ter seu próprio arquivo separado."
          code={`// src/components/Card/Card.jsx
      // function Card() {
      // return <div>Meu Card</div>;
      }
      
      export default Card;
      // src/App.jsx
      // import Card from './components/Card/Card';
      function App() {
      return <Card />;
      }`}
        />

        <Card
          Titulo="useEffect sem dependências"
          desc="Executa o efeito em toda renderização do componente."
          code={`useEffect(() => {console.log("Executa em toda renderização")})`}
        />

        <Card
          Titulo="useEffect com array vazio"
          desc="Executa o efeito apenas uma vez, quando o componente é montado."
          code={`useEffect(() => {console.log("Executa apenas uma vez")}, [])`}
        />

        <Card
          Titulo="useEffect com dependências"
          desc="Executa o efeito quando o valor de count muda."
          code={`useEffect(() => {console.log("Count mudou:", count)}, [count])`}
        />

        <Card
          Titulo="useEffect com cleanup"
          desc="Executa um efeito e limpa quando o componente é desmontado"
          code={`useEffect(() => {const intervalo = setInterval(() => {console.log("Rodando);}, 1000);
        return () => {clearInterval(intervalo);
        console.log("Limpou)};}, []);`}
        />

        <Card
          Titulo="Ciclo de vida completo"
          desc="Simula montagem, atualização e desmontagem com múltiplos useEffect."
          code={`//Montagem
      useEffect(() => {console.log("Componente montado")}, []);
      //Atualização
      useEffect(() => {console.log("Componente atualizado:", count);}, [count]);
      
      //Desmontagem
      useEffect(() => { return () => {console.log("Componente desmontado);};}, []);`}
        />
      </div>
    </>
  );
}

export default App;
