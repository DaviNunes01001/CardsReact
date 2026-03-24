import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <div className="Container">
        <h1>Props</h1>
        <div className="container-davi">
          <Card
            Titulo="O que são props?"
            desc="Props são dados passados de um componente para outro, permitindo que ele mostre informações diferentes."
            code={`<Card titulo="Olá mundo" />`}
          />
          <Card
            Titulo="Passando props para componentes"
            desc="É quando você envia dados de um componente pai para um componente filho através de atributos, permitindo reutilizar o componente com informações diferentes."
            code={`<Card titulo="Meu título" desc="Minha descrição" />`}
          />
          <Card
            Titulo="Props com valores padrão"
            desc="São valores definidos caso nenhuma prop seja passada. Evita erros e deixa o componente mais seguro."
            code={`
function Card({ titulo = "Título padrão" }) {
return <h1>{titulo}</h1>
          }`}
          />
          <Card
            Titulo="Desestruturação de props"
            desc="É quando você já separa as props direto nos parâmetros da função, deixando o código mais limpo e fácil de usar."
            code={`
            function Card({ titulo, desc }) {
              return (
                <>
                <h1>{titulo}</h1>
                <p>{desc}</p>
                </>
                )
                }
                `}
          />
        </div>
        <h1>UseState</h1>
        <div className="container-matheus">
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
        <h1>Componentes</h1>
        <div className="container-kaio">
          <Card
            Titulo="O que são componentes?"
            desc="Componentes são blocos reutilizáveis de código no React que representam partes da interface. Eles permitem dividir a tela em pedaços menores e organizados."
            code={`
function App() {
  return <h1>Olá React</h1>;
}
            `}
          />
          <Card
            Titulo="Criando um componente funcional"
            desc="Um componente funcional é uma função JavaScript que retorna JSX . É a forma mais comum de criar componentes no React atualmente."
            code={`
function Saudacao() {
  return <h2>Bem-vindo!</h2>;
}
        
function App() {
  return <Saudacao />;
}
            `}
          />
          <Card
            Titulo="Reutilização de componentes"
            desc="A reutilização permite usar o mesmo componente várias vezes na aplicação. Isso torna o projeto mais organizado e fácil de manter."
            code={`
function Botao() {
  return <button>Clique aqui</button>;
}
  
function App() {
  return (
    <>
      <Botao />
      <Botao />
    </>
  );
}
            `}
          />
          <Card
            Titulo="Organização de componentes em pastas"
            desc="Organizar componentes em pastas ajuda a manter o projeto fácil de entender. Cada componente pode ter seu próprio arquivo separado."
            code={`
// src/components/Card/Card.jsx
function Card() {
  return <div>Meu Card</div>;
}
  
export default Card;

// src/App.jsx
import Card from './components/Card/Card';
function App() {
  return <Card />;
}
            `}
          />
        </div>
        <h1>Renderização</h1>
        <div className="container-lucas">
          <Card
            Titulo="Renderização condicional"
            desc="Permite mostrar ou esconder elementos na tela dependendo de uma condição. Muito usado com if, operador ternário (?) ou &&."
            code={`
{logado ? <Dashboard /> : <Login />}
{isAdmin && <PainelAdmin />}
          `}
          />
          <Card
            Titulo="Listas com map()"
            desc="Usamos o map() para percorrer arrays e renderizar vários componentes dinamicamente."
            code={`
const nomes = ["Ana", "Carlos", "João"];
{nomes.map((nome) => (
<p>{nome}</p> ))}
            `}
          />
          <Card
            Titulo="Propriedade key"
            desc="A key ajuda o React a identificar cada item da lista, melhorando performance e evitando bugs na renderização."
            code={`
{nomes.map((nome, index) => (
<p key={index}>{nome}</p> ))}
            `}
          />
        </div>
        <div className="container-gigi">
          <Card
            Titulo="O que é JSX"
            desc="JSX é uma sintaxe que permite escrever HTML dentro do JavaScript. Ele é usado no React para criar interfaces de forma mais simples e visual."
            code={`
function App() {
  return <h1>Olá JSX</h1>
}
            `}
          />
          <Card
            Titulo="Diferença entre HTML e JSX"
            desc="JSX é parecido com HTML, mas possui diferenças como o uso de className ao invés de class e a obrigatoriedade de fechar todas as tags."
            code={`
function App() {
  return <div className="container"></div>
}
            `}
          />
          <Card
            Titulo="Expressões dentro do JSX {}"
            desc="As chaves {} permitem usar JavaScript dentro do JSX, como variáveis, cálculos e funções."
            code={`
function App() {
  const nome = "João"
  return <h1>Olá {nome}</h1>
}
            `}
          />
          <Card
            Titulo="Fragment (<> </>)"
            desc="Fragments permitem agrupar vários elementos sem adicionar uma div extra no HTML, deixando o código mais limpo."
            code={`
function App() {
  return (
    <>
      <h1>Título</h1>
      <p>Texto</p>
    </>
  )
}
          `}
          />
        </div>
        <h1>Hooks/React/Vite</h1>
        <div className="container-migas">
          <Card
            Titulo="O que é React"
            desc="React é uma biblioteca JavaScript usada para criar interfaces de usuário. Ele permite dividir a aplicação em componentes reutilizáveis, facilitando a organização e manutenção do código."
          />
          <Card
            Titulo="O que é Vite"
            desc="Vite é uma ferramenta moderna de desenvolvimento frontend que permite criar e rodar projetos de forma rápida, com um servidor ágil e build otimizada."
          />
          <Card
            Titulo="Criando um projeto React com Vite"
            desc="Para criar um projeto, use o comando npm create vite@latest. Depois escolha React, entre na pasta do projeto, rode npm install e depois npm run dev para iniciar."
          />
          <Card
            Titulo="Estrutura de pastas do projeto React"
            desc="Um projeto possui pastas como public para arquivos estáticos e src para o código principal. Dentro de src ficam arquivos como App.jsx, main.jsx e estilos."
          />
          <Card
            Titulo="Arquivo main.jsx"
            desc="O main.jsx é o ponto de entrada da aplicação. Ele conecta o React ao HTML e renderiza o componente principal na tela."
          />
          <Card
            Titulo="Arquivo App.jsx"
            desc="O App.jsx é o componente principal da aplicação. Ele define o que será exibido na tela e organiza outros componentes."
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
            code={`
//Montagem
useEffect(() => {console.log("Componente montado")}, []);
//Atualização
useEffect(() => {console.log("Componente atualizado:", count);}, [count]);

//Desmontagem
useEffect(() => { return () => {console.log("Componente desmontado);};}, []);
            `}
          />
        </div>
      </div>
    </>
  );
}

export default App;
