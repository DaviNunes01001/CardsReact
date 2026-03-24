import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="Container">
      <Card
        Titulo="O que são props?"
        desc="Props são dados passados de um componente para outro, permitindo que ele mostre informações diferentes."
        code={`<Card titulo="Olá mundo" />`}
      />
      <Card
        Titulo="Passando props para componentes"
        desc="Props são como parâmetros que você envia para um componente."
        code={`<Card titulo="Olá" desc="Isso é um card"/>`}
      />
    </div>
  );
}

export default App;
