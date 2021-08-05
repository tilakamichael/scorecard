import Header from './components/Header'
import Metric from './components/Metrics'
import {useState, useEffect} from 'react'
import AddMetric from './components/AddMetric'
import {CSVLink} from 'react-csv'

function App() {  
  const [showAddMetric, setShowAddMetric] = useState(false)

  const [metrics, setMetrics] = useState([])

  useEffect(() => {
    const getMetrics = async () => {
      const metricsFromServer = await fetchMetrics()
      setMetrics(metricsFromServer)

    }

    getMetrics()
  }, [])

  const fetchMetrics = async () => {
    const res = await fetch('http://localhost:5000/metrics')
    const data = await res.json()

    return data
  }

  const headers = [
    {label: 'Incident Ticket', key: 'text'},
    {label: 'Event Description', key: 'desc'},
    {label: 'Date', key: 'date'}, 
    {label: 'Severity', key: 'sev'},
    {label: 'Start Time', key: 'startTime'},
    {label: 'DAT Aware Time', key: 'datTime'},
    {label: 'DAT Ahead by # Days', key: 'datAhead'},
    {label: 'DAT Diff', key: 'datDiff'},
    {label: 'DAT Score', key: 'datScore'},
    {label: 'SA Time', key: 'saTime'},
    {label: 'SA Ahead by # Days', key: 'saAhead'},
    {label: 'SA Diff', key: 'saDiff'},
    {label: 'SA Score', key: 'saScore'},
    {label: 'IME Time', key: 'imeTime'},
    {label: 'IME Ahead by # Days', key: 'imeAhead'},
    {label: 'IME Diff', key: 'imeDiff'},
    {label: 'IME Score', key: 'imeScore'},
    {label: 'End Time', key: 'endTime'},
    {label: 'End Time Ahead by # Days', key: 'endAhead'},
  ];

  const csvReport = {
    filename: 'Report.csv',
    headers: headers,
    data: metrics

  };

  const deleteMetric = async (id) => {
    await fetch(`http://localhost:5000/metrics/${id}`, {
      method: 'DELETE',
    })

    setMetrics(metrics.filter((metric) => metric.id !== id))

  }

  const addMetric = async (metric) => {
    const res = await fetch('http://localhost:5000/metrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(metric)
    })

    const data = await res.json()

    setMetrics([...metrics, data])

    //const id = Math.floor(Math.random() * 10000) + 1

    //const newMetric = {id, ...metric}
    //setMetrics([...metrics, newMetric])

  }

  return (
    <div style={{marginLeft: 'auto'}} className="container">
      <Header onAdd={() => setShowAddMetric(!showAddMetric)} showAdd={showAddMetric}/>

      {showAddMetric && <AddMetric onAdd={addMetric}/>}
      {metrics.length > 0 ? <><Metric metrics={metrics} onDelete={deleteMetric} />
      </> : 'No more major events'}
      {metrics.length > 0 ? <><CSVLink {...csvReport}>Export</CSVLink></> : ""}
    </div>
  );
}

export default App;
