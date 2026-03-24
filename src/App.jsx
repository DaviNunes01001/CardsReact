import './App.css'
import Card from './components/Card/Card'

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
  )
}

export default App
