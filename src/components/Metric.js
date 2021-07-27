import {HiOutlineTrash} from 'react-icons/hi'

const Metric = ({metric, onDelete}) => {

    return (
        <div className='metric'>
            <h3>
                {metric.text} : {metric.date}
                <HiOutlineTrash className='trash' 
                onClick={() => onDelete(metric.id)} />
            </h3>
            <h4>Severity {metric.sev} alert</h4>
            <h5>{metric.desc}</h5>
            <p className='paragraph'>Start Time: {metric.startTime}</p>
            <p className='paragraph'>DAT Aware Time: {metric.datTime}</p>
            <p className='paragraph'>Service Alert Time: {metric.saTime}</p>
            <p className='paragraph'>End Time: {metric.endTime}</p>
            <p className='paragraph'>DAT Reaction Time: {metric.datDiff} minutes with a score of {metric.datScore}</p>
            <p className='paragraph'>SA Reaction Time: {metric.saDiff} minutes with a score of {metric.saScore}</p>
            <p className='paragraph'>Duration: {metric.duration} minutes with a score of {metric.saScore}</p>

        </div>
    )
}

export default Metric