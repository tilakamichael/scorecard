import {useState} from 'react'
import moment from 'moment'

const AddMetric = ({onAdd}) => {
    const[text, setText] = useState('')
    const[desc, setDesc] = useState('')
    const[date, setDate] = useState('')
    const[sev, setSev] = useState('')
    const[day, setDay] = useState(false)
    const[startTime, setStart] = useState('')
    const[datTime, setDat] = useState('')
    const[saTime, setSa] = useState('')
    const[endTime, setEnd] = useState('')
    const[imeTime, setImeTime] = useState('')
    var start;
    var dat;
    var serviceAlert;
    var end;
    var datDiff;
    var saDiff;
    var duration;
    var datScore;
    var saScore;
    var durationScore;

    const onSave = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please enter an incident ticket')
            return
        }

        if (!sev) {
            alert('Please enter a severity number')
            return
        }

        if (!startTime) {
            alert('Please enter a start time')
            return
        }

        if(!datTime) {
            alert('Please enter a DAT aware time')
            return
        }

        if (!saTime) {
            alert('Please enter an initial service alert time')
            return
        }

        if (!endTime) {
            alert('Please enter an end time')
            return
        }

        start = moment(startTime, 'h:mm A')
        dat = moment(datTime, 'h:mm A')
        serviceAlert = moment(saTime, 'h:mm A')
        end = moment(endTime, 'h:mm A')

        datDiff = moment.duration(dat.diff(start))
        datDiff = datDiff.asMinutes()

        saDiff = moment.duration(serviceAlert.diff(start))
        saDiff = saDiff.asMinutes()

        duration = moment.duration(end.diff(start))
        duration = duration.asMinutes()

        //Score

    //Sev 1
    if (sev == 1) {
        //DAT Aware
        if (datDiff >= 0 && datDiff <= 15) {
            datScore = 1;

        } else if (datDiff >= 16 && datDiff <= 30) { 
            datScore = 2;

        } else {
            datScore = 3;

        }

        //SA
        if (saDiff >= 0 && saDiff <= 15) {
            saScore = 1;

        } else if (saDiff >= 16 && saDiff <= 30) { 
            saScore = 2;

        } else {
            saScore = 3;

        }

        //Duration
        if (duration >= 0 && duration <= 15) {
            durationScore = 1;

        } else if (duration >= 16 && duration <= 30) { 
            durationScore = 2;

        } else {
            durationScore = 3;

        }

    }

    //Sev 2
    if (sev == 2) {
        //DAT Aware
        if (datDiff >= 0 && datDiff <= 30) {
            datScore = 1;

        } else if (datDiff >= 31 && datDiff <= 60) { 
            datScore = 2;

        } else {
            datScore = 3;

        }

        //SA
        if (saDiff >= 0 && saDiff <= 30) {
            saScore = 1;

        } else if (saDiff >= 31 && saDiff <= 60) { 
            saScore = 2;

        } else {
            saScore = 3;

        }

        //Duration
        if (duration >= 0 && duration <= 30) {
            durationScore = 1;

        } else if (duration >= 31 && duration <= 60) { 
            durationScore = 2;

        } else {
            durationScore = 3;

        }

    }

    //Sev 3
    if (sev == 3) {
        //DAT Aware
        if (datDiff >= 0 && datDiff <= 60) {
            datScore = 1;

        } else if (datDiff >= 61 && datDiff <= 90) { 
            datScore = 2;

        } else {
            datScore = 3;

        }

        //SA
        if (saDiff >= 0 && saDiff <= 60) {
            saScore = 1;

        } else if (saDiff >= 61 && saDiff <= 90) { 
            saScore = 2;

        } else {
            saScore = 3;

        }

        //Duration
        if (duration >= 0 && duration <= 60) {
            durationScore = 1;

        } else if (duration >= 61 && duration <= 90) { 
            durationScore = 2;

        } else {
            durationScore = 3;

        }

    }

        onAdd({text, desc, date, sev, day, startTime, datTime, saTime, endTime, duration, saDiff, datDiff, durationScore, saScore, datScore, imeTime})

        setText('')
        setDesc('')
        setDate('')
        setSev('')
        setDay(false)
        setStart('')
        setDat('')
        setSa('')
        setEnd('')
        setImeTime('')
    }

    return (
        <form className='add-form' onSubmit={onSave}>
            <div className='form-control'>
                <label>Incident Ticket</label>
                <input type='text' placeholder='E.g. GISINC0000000' value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Event Description</label>
                <input type='text' value={desc} onChange={(e) => setDesc(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='date' placeholder='Add Metric' value={date} onChange={(e) => setDate(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Severity</label>
                <input type='number' placeholder='Enter number 1-3' max='3' min = '1' value={sev} onChange={(e) => setSev(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Start Time</label>
                <input type='time' value={startTime} onChange={(e) => setStart(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>DAT Aware Time</label>
                <input type='time' value={datTime} onChange={(e) => setDat(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Initial SA Time</label>
                <input type='time' value={saTime} onChange={(e) => setSa(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Incident Management Escalation Time</label>
                <input type='time' value={imeTime} onChange={(e) => setImeTime(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>End Time</label>
                <input type='time' value={endTime} onChange={(e) => setEnd(e.target.value)}></input>
            </div>
            <input type='submit' value='Save Metric' className='btn btn-block'/>
        </form>
        
    )
}

export default AddMetric