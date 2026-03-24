import './App.css'
import Card from './components/Card/Card'

function App() {
 

  return (
    <>
    <div className='Container'>
      <Card
      Titulo="O que são componentes?"
      desc="Componentes são blocos reutilizáveis de código no React que representam partes da interface. Eles permitem dividir a tela em pedaços menores e organizados."
      code={`function App() {
        return <h1>Olá React</h1>;
        }`}
      /> 
      <Card
      Titulo="Criando um componente funcional"
      desc="Um componente funcional é uma função JavaScript que retorna JSX (HTML dentro do JS). É a forma mais comum de criar componentes no React atualmente."
      code={`function Saudacao() {
        return <h2>Bem-vindo!</h2>;
        }
        function App() {
        return <Saudacao />;
        }`}
      />
      <Card
      Titulo="Reutilização de componentes"
      desc="A reutilização permite usar o mesmo componente várias vezes na aplicação, evitando repetir código. Isso torna o projeto mais organizado e fácil de manter."
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
      desc="Organizar componentes em pastas ajuda a manter o projeto limpo e fácil de entender. Cada componente pode ter sua própria pasta com arquivos separados."
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
      </div>
    </>
  )
}

export default App
