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
      /> </div>
    </>
  )
}

export default App
