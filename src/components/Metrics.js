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
        </>
    )
}

export default Metrics
