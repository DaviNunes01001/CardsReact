import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
    <div className='Container'>
      <Card
      Titulo="O que são props?"
      desc="Props são dados passados de um componente para outro, permitindo que ele mostre informações diferentes."
      code={`<Card titulo="Olá mundo" />`}
      />
      
      <Card
      Titulo="Renderização condicional"
      desc="Permite mostrar ou esconder elementos na tela dependendo de uma condição. Muito usado com if, operador ternário (?) ou &&."
      code={`{logado ? <Dashboard /> : <Login />}
      
        {isAdmin && <PainelAdmin />}`}
      />
      <Card
      Titulo="Listas com map()"
      desc="Usamos o map() para percorrer arrays e renderizar vários componentes dinamicamente."
      code={`const nomes = ["Ana", "Carlos", "João"];

      {no mes.map((nome) => (

      <p>{nome}</p> ))}`} 
      />

</div>
    </>
  )
}

export default App
