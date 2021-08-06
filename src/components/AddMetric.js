import {useState} from 'react'
import moment from 'moment'

const AddMetric = ({onAdd}) => {
    const[text, setText] = useState('')
    const[desc, setDesc] = useState('')
    const[date, setDate] = useState('')
    const[sev, setSev] = useState('')
    const[startTime, setStart] = useState('')
    const[datTime, setDat] = useState('')
    const[saTime, setSa] = useState('')
    const[endTime, setEnd] = useState('')
    const[imeTime, setImeTime] = useState('')
    const[cacTime, setCacTime] = useState('')
    const[datAhead, setDatAhead] = useState('')
    const[saAhead, setSaAhead] = useState('')
    const[imeAhead, setImeAhead] = useState('')
    const[endAhead, setEndAhead] = useState('')
    const[cacAhead, setCacAhead] = useState('')
    const[datBefore, setDatBefore] = useState(false)
    var start;
    var dat;
    var serviceAlert;
    var end;
    var ime;
    var cac;
    var datDiff;
    var saDiff;
    var imeDiff;
    var cacDiff;
    var duration;
    var datScore;
    var saScore;
    var durationScore;
    var imeScore;
    var cacScore;

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

        if (!endTime) {
            alert('Please enter an end time')
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
        ime = moment(imeTime, 'h:mm A')
        cac = moment(cacTime, 'h:mm A')

        dat = dat.add(moment.duration((24 * datAhead), 'hours'))
        ime = ime.add(moment.duration((24 * imeAhead), 'hours'))
        serviceAlert = serviceAlert.add(moment.duration((24 * saAhead), 'hours'))
        end = end.add(moment.duration((24 * endAhead), 'hours'))
        cac = cac.add(moment.duration((24 * cacAhead), 'hours'))

        if (!datBefore) {
            datDiff = moment.duration(dat.diff(start))
            datDiff = datDiff.asMinutes()
            if (datDiff < 0) {
                dat = dat.add(moment.duration(24, 'hours'))
                datDiff = moment.duration(dat.diff(start))
                datDiff = datDiff.asMinutes()

            }
        } else {
            datDiff = moment.duration(start.diff(dat))
            datDiff = datDiff.asMinutes()
            if (datDiff < 0) {
                start = start.add(moment.duration(24, 'hours'))
                datDiff = moment.duration(start.diff(dat))
                datDiff = datDiff.asMinutes()

            }
        }

        saDiff = moment.duration(serviceAlert.diff(start))
        saDiff = saDiff.asMinutes()
        if (saDiff < 0) {
            serviceAlert = serviceAlert.add(moment.duration(24, 'hours'))
            saDiff = moment.duration(serviceAlert.diff(start))
            saDiff = saDiff.asMinutes()

        }

        imeDiff = moment.duration(ime.diff(start))
        imeDiff = imeDiff.asMinutes()
        if (imeDiff < 0) {
            ime = ime.add(moment.duration(24, 'hours'))
            imeDiff = moment.duration(ime.diff(start))
            imeDiff = imeDiff.asMinutes()

        }

        cacDiff = moment.duration(cac.diff(start))
        cacDiff = cacDiff.asMinutes()
        if (cacDiff < 0) {
            cac = cac.add(moment.duration(24, 'hours'))
            cacDiff = moment.duration(cac.diff(start))
            cacDiff = cacDiff.asMinutes()

        }

        duration = moment.duration(end.diff(start))
        duration = duration.asMinutes()
        if (duration < 0) {
            end = end.add(moment.duration(24, 'hours'))
            duration = moment.duration(end.diff(start))
            duration = duration.asMinutes()

        }

        //Score

    //Sev 1
    if (sev === '1') {
        //DAT Aware
        if (datDiff >= 0 && datDiff <= 15) {
            datScore = 1;

        } else if (datDiff > 15) {
            datScore = 3;

        } else {
            datScore = 0;
        }

        //SA
        if (saDiff >= 0 && saDiff <= 30) {
            saScore = 1;

        } else if (saDiff > 30) {
            saScore = 3;

        } else {
            saScore = 0;

        }

        //Duration
        if (duration >= 0 && duration <= 45) {
            durationScore = 1;

        } else if (duration > 45){
            durationScore = 3;

        } else {
            durationScore = 0;

        }

        if (imeDiff >= 0 && imeDiff <= 15) {
            imeScore = 1;

        } else if (imeDiff > 15) {
            imeScore = 3;

        } else {
            imeScore = 0;

        }

        if (cacDiff >= 0 && cacDiff <= 10) {
            cacScore = 1;

        } else if (imeDiff > 10) {
            cacScore = 3;

        } else {
            cacScore = 0;

        }

    }

    //Sev 2
    if (sev === '2') {
        //DAT Aware
        if (datDiff >= 0 && datDiff <= 30) {
            datScore = 1;

        } else if (datDiff > 30) {
            datScore = 3;

        } else {
            datScore = 0;

        }

        //SA
        if (saDiff >= 0 && saDiff <= 60) {
            saScore = 1;

        } else if (saDiff > 60) {
            saScore = 3;

        } else {
            saScore = 0;

        }

        //Duration
        if (duration >= 0 && duration <= 90) {
            durationScore = 1;

        } else if (duration > 90) {
            durationScore = 3;

        } else {
            durationScore = 0;

        }

        if (imeDiff >= 0 && imeDiff <= 30) {
            imeScore = 1;

        } else if (imeDiff > 30) {
            imeScore = 3;

        } else {
            imeScore = 0;

        }

        if (cacDiff >= 0 && cacDiff <= 30) {
            cacScore = 1;

        } else if (imeDiff > 30) {
            cacScore = 3;

        } else {
            cacScore = 0;

        }

    }

    //Sev 3
    if (sev === '3') {
        //DAT Aware
        if (datDiff >= 0 && datDiff <= 60) {
            datScore = 1;

        } else if (datDiff > 60){
            datScore = 3;

        } else {
            datScore = 0;

        }

        //SA
        if (saDiff >= 0 && saDiff <= 90) {
            saScore = 1;

        } else if (saDiff > 90) {
            saScore = 3;

        } else {
            saScore = 0;

        }

        //Duration
        if (duration >= 0 && duration <= 120) {
            durationScore = 1;

        } else if (duration > 120) {
            durationScore = 3;

        } else {
            durationScore = 0;

        }

        if (imeDiff >= 0 && imeDiff <= 60) {
            imeScore = 1;

        } else if (imeDiff > 60) {
            imeScore = 3;

        } else {
            imeScore = 0;

        }

        if (cacDiff >= 0 && cacDiff <= 60) {
            cacScore = 1;

        } else if (imeDiff > 60) {
            cacScore = 3;

        } else {
            cacScore = 0;

        }

    }

        onAdd({text, desc, date, sev, startTime, datTime, saTime, cacTime, endTime, duration, saDiff, datDiff, cacDiff, durationScore, saScore, datScore, cacScore, imeTime, imeDiff, imeScore, datAhead, saAhead, imeAhead, cacAhead, endAhead, datBefore})

        setText('')
        setDesc('')
        setDate('')
        setSev('')
        setStart('')
        setDat('')
        setSa('')
        setEnd('')
        setImeTime('')
        setCacTime('')
        setDatAhead('')
        setSaAhead('')
        setImeAhead('')
        setEndAhead('')
        setCacAhead('')
        setDatBefore(false)
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
            <div className='form-control-check'>
                <label>DAT Aware Before Start Time?</label>
                <input type='checkbox' checked={datBefore} value={datBefore} onChange={(e) => setDatBefore(e.currentTarget.checked)}></input>
            </div>
            <div className='form-control'>
                <label>DAT day difference?</label>
                <input type='number' placeholder='Enter number 0+' min = '0' value={datAhead} onChange={(e) => setDatAhead(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Initial SA Time</label>
                <input type='time' value={saTime} onChange={(e) => setSa(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>SA Ahead by days?</label>
                <input type='number' placeholder='Enter number 0+' min = '0' value={saAhead} onChange={(e) => setSaAhead(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Incident Management Escalation Time</label>
                <input type='time' value={imeTime} onChange={(e) => setImeTime(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>IME Ahead by days?</label>
                <input type='number' placeholder='Enter number 0+' min = '0' value={imeAhead} onChange={(e) => setImeAhead(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Correlate Affecting Change Time</label>
                <input type='time' value={cacTime} onChange={(e) => setCacTime(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>CAC Ahead by days?</label>
                <input type='number' placeholder='Enter number 0+' min = '0' value={cacAhead} onChange={(e) => setCacAhead(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>End Time</label>
                <input type='time' value={endTime} onChange={(e) => setEnd(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>End Ahead by days?</label>
                <input type='number' placeholder='Enter number 0+' min = '0' value={endAhead} onChange={(e) => setEndAhead(e.target.value)}></input>
            </div>
            <input type='submit' value='Save Metric' className='btn btn-block'/>
        </form>
        
    )
}

export default AddMetric