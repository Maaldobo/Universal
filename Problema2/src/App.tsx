import './App.css'
import Card from './components/michiCard'

function App() {
  const cards = new Array(10).fill(null); // Crea un arreglo con 10 elementos vacíos

  return (
    <div className="card-grid">
      {cards.map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  )
}

export default App
