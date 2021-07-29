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
    var ime;
    var datDiff;
    var saDiff;
    var imeDiff;
    var duration;
    var datScore;
    var saScore;
    var durationScore;
    var imeScore;

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

        /*if(!datTime) {
            alert('Please enter a DAT aware time')
            return
        }

        if (!saTime) {
            alert('Please enter an initial service alert time')
            return
        }*/

        if (!endTime) {
            alert('Please enter an end time')
            return
        }
        
        start = moment(startTime, 'h:mm A')
        dat = moment(datTime, 'h:mm A')
        serviceAlert = moment(saTime, 'h:mm A')
        end = moment(endTime, 'h:mm A')
        ime = moment(imeTime, 'h:mm A')

        datDiff = moment.duration(dat.diff(start))
        datDiff = datDiff.asMinutes()

        saDiff = moment.duration(serviceAlert.diff(start))
        saDiff = saDiff.asMinutes()

        imeDiff = moment.duration(ime.diff(start))
        imeDiff = imeDiff.asMinutes()

        duration = moment.duration(end.diff(start))
        duration = duration.asMinutes()
        if (duration < 0) {
            end = moment(endTime, 'h:mm A')
            end = end.add(moment.duration(24, 'hours'))
            duration = moment.duration(end.diff(start))
            duration = duration.asMinutes()
            console.log(duration)

        }

        //Score

    //Sev 1
    if (sev == 1) {
        //DAT Aware
        if (datDiff >= 0 && datDiff <= 15) {
            datScore = 1;

        } else {
            datScore = 3;

        }

        //SA
        if (saDiff >= 0 && saDiff <= 30) {
            saScore = 1;

        } else {
            saScore = 3;

        }

        //Duration
        if (duration >= 0 && duration <= 45) {
            durationScore = 1;

        } else {
            durationScore = 3;

        }

        if (imeDiff >= 0 && imeDiff <= 15) {
            imeScore = 1;

        } else {
            imeScore = 3;

        }

    }

    //Sev 2
    if (sev == 2) {
        //DAT Aware
        if (datDiff >= 0 && datDiff <= 30) {
            datScore = 1;

        } else {
            datScore = 3;

        }

        //SA
        if (saDiff >= 0 && saDiff <= 60) {
            saScore = 1;

        } else {
            saScore = 3;

        }

        //Duration
        if (duration >= 0 && duration <= 90) {
            durationScore = 1;

        } else {
            durationScore = 3;

        }

        if (imeDiff >= 0 && imeDiff <= 30) {
            imeScore = 1;

        } else {
            imeScore = 3;

        }

    }

    //Sev 3
    if (sev == 3) {
        //DAT Aware
        if (datDiff >= 0 && datDiff <= 60) {
            datScore = 1;

        } else {
            datScore = 3;

        }

        //SA
        if (saDiff >= 0 && saDiff <= 90) {
            saScore = 1;

        } else {
            saScore = 3;

        }

        //Duration
        if (duration >= 0 && duration <= 120) {
            durationScore = 1;

        } else {
            durationScore = 3;

        }

        if (imeDiff >= 0 && imeDiff <= 60) {
            imeScore = 1;

        } else {
            imeScore = 3;

        }

    }

        onAdd({text, desc, date, sev, day, startTime, datTime, saTime, endTime, duration, saDiff, datDiff, durationScore, saScore, datScore, imeTime, imeDiff, imeScore})

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