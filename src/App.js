import Header from './components/Header'
import Metric from './components/Metrics'
import {useState} from 'react'
import AddMetric from './components/AddMetric'
import {CSVLink} from 'react-csv'
import moment from 'moment'

function App() {  
  const [showAddMetric, setShowAddMetric] = useState(false)

  const [metrics, setMetrics] = useState([])

  const headers = [
    {label: 'Incident Ticket', key: 'text'},
    {label: 'Event Description', key: 'desc'},
    {label: 'Date', key: 'date'}, 
    {label: 'Severity', key: 'sev'},
    {label: 'Start Time', key: 'startTime'},
    {label: 'DAT Aware Time', key: 'datTime'},
    {label: 'DAT day difference', key: 'datAhead'},
    {label: 'DAT Diff', key: 'datDiff'},
    {label: 'DAT Score', key: 'datScore'},
    {label: 'SA Time', key: 'saTime'},
    {label: 'SA day difference', key: 'saAhead'},
    {label: 'SA Diff', key: 'saDiff'},
    {label: 'SA Score', key: 'saScore'},
    {label: 'IME Time', key: 'imeTime'},
    {label: 'IME day difference', key: 'imeAhead'},
    {label: 'IME Diff', key: 'imeDiff'},
    {label: 'IME Score', key: 'imeScore'},
    {label: 'CAC Time', key: 'cacTime'},
    {label: 'CAC day difference', key: 'cacAhead'},
    {label: 'CAC Diff', key: 'cacDiff'},
    {label: 'CAC Score', key: 'cacScore'},
    {label: 'End Time', key: 'endTime'},
    {label: 'End Time Ahead by # Days', key: 'endAhead'},
  ];

  const csvReport = {
    className: 'btn',
    filename: 'Overall-Report.csv',
    headers: headers,
    data: metrics

  };

  const deleteMetric = (id) => {
    setMetrics(metrics.filter((metric) => metric.id !== id))

  }

  const addMetric = (metric) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newMetric = {id, ...metric}
    setMetrics([...metrics, newMetric])

  }

  const getEarliestDay = () => {
    var earliestDay = metrics[0].date;

    for (var i = 0; i < metrics.length; i++) {
      if (moment(metrics[i].date).isBefore(earliestDay, 'day')) {
        earliestDay = metrics[i].date;

      }

    }

    return earliestDay

  }
  
  const getLatestDay = () => {
    var latestDay = metrics[0].date;

    for (var i = 0; i < metrics.length; i++) {
      if (moment(metrics[i].date).isAfter(latestDay, 'day')) {
        latestDay = metrics[i].date;

      }

    }

    return latestDay

  }

  return (
    <div style={{marginLeft: 'auto'}} className="container">
      <Header onAdd={() => setShowAddMetric(!showAddMetric)} showAdd={showAddMetric}/>
      {metrics.length > 0 ? <><h4>Date Range: {getEarliestDay()} - {getLatestDay()}</h4></> : ""}
      <br />

      {showAddMetric && <AddMetric onAdd={addMetric}/>}
      {metrics.length > 0 ? <><Metric metrics={metrics} onDelete={deleteMetric} />
      </> : 'No more major events'}
      {metrics.length > 0 ? <><CSVLink {...csvReport}>Export</CSVLink></> : ""}
      
      <br />
      <br />  
      
      {metrics.length > 0 ? <><table>
        <h5>Table for scores:</h5>
        <h6>Metric in time = 1</h6>
        <h6>Not in time = 3</h6>
        <br />
        <tr>
          <th>Metric</th>
          <th>DAT Aware</th>
          <th>SA Distribution</th>
          <th>IME Time</th>
          <th>CAC Time</th>
          <th>Duration</th>
        </tr>
        <tr>
          <td>Severity 1</td>
          <td>30</td>
          <td>45</td>
          <td>15</td>
          <td>10</td>
          <td>15</td>
        </tr>
        <tr>
          <td>Severity 2</td>
          <td>60</td>
          <td>90</td>
          <td>30</td>
          <td>30</td>
          <td>30</td>
        </tr>
        <tr>
          <td>Severity 3</td>
          <td>90</td>
          <td>120</td>
          <td>60</td>
          <td>60</td>
          <td>60</td>
        </tr>
      </table></> : ""}
    </div>
  );
}

export default App;
