import Metric from './Metric'
import Month from './Month'

const Metrics = ({metrics, onDelete, onToggle}) => {
    return (
        <>
         {metrics.map((metric) => (
         <Metric 
         key={metric.id} 
         metric={metric} 
         onDelete={onDelete}
         onToggle={onToggle}
         />
         ))}
         <Month metrics={metrics} monthName='January' month='01'/>
         <Month metrics={metrics} monthName='February' month='02'/>
         <Month metrics={metrics} monthName='March' month='03'/>
         <Month metrics={metrics} monthName='April' month='04'/>
         <Month metrics={metrics} monthName='May' month='05'/>
         <Month metrics={metrics} monthName='June' month='06'/>
         <Month metrics={metrics} monthName='July' month='07'/>
         <Month metrics={metrics} monthName='August' month='08'/>
         <Month metrics={metrics} monthName='September' month='09'/>
         <Month metrics={metrics} monthName='October' month='10'/>
         <Month metrics={metrics} monthName='November' month='11'/>
         <Month metrics={metrics} monthName='December' month='12'/>
        </>
    )
}

export default Metrics
