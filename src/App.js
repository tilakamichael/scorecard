import Header from './components/Header'
import Metric from './components/Metrics'
import {useState} from 'react'
import AddMetric from './components/AddMetric'
import Button from './components/Button'

function App() {  
  const [showAddMetric, setShowAddMetric] = useState(false)

  const [metrics, setMetric] = useState([])

  const deleteMetric = (id) => {
    setMetric(metrics.filter((metric) => metric.id !== id))

  }

  const addMetric = (metric) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newMetric = {id, ...metric}
    setMetric([...metrics, newMetric])

  }

  const exportSheet = () => {
    console.log("hi")

  }

  return (
    <div style={{marginLeft: 'auto'}} className="container">
      <Header onAdd={() => setShowAddMetric(!showAddMetric)} showAdd={showAddMetric}/>

      {showAddMetric && <AddMetric onAdd={addMetric}/>}
      {metrics.length > 0 ? <><Metric metrics={metrics} onDelete={deleteMetric} />
      </> : 'No more major events'}
      {metrics.length > 0 ? <><Button color="red" text="Export" onClick={exportSheet}/></> : ""}
    </div>
  );
}

export default App;
