const Month = ({metrics, monthName, month}) => {
    const avgCalc = (sev, month, ave) => {
        var sum = 0;
        var count = 0;

        for (var j = 0; j < metrics.length; j++) {
            if (metrics[j].sev === sev && (metrics[j].date.substring(5,7) === month || month === '13')) {
                count++ 

            }

        }
        
        for (var i = 0; i < metrics.length; i++) {
            if (sev === metrics[i].sev) {
                if (month === metrics[i].date.substring(5,7) || month === '13') {
                    if (ave === 'dat') {
                        sum += metrics[i].datScore
                    } else if (ave === 'sa') {
                        sum += metrics[i].saScore
                    } else if (ave === 'dur') {
                        sum += metrics[i].durationScore
                    } else if (ave === 'ime') {
                        sum += metrics[i].imeScore
                    } else if (ave === 'cac') {
                        sum += metrics[i].cacScore
                    }
                }
            }

        }

        var calc = 0;

        if (count > 0) {
            calc = sum / count
            return calc
        } else {
            return calc
        }

    }

    const totalCalc = (sev, month) => {
        var dat = avgCalc(sev, month, 'dat')
        var sa = avgCalc(sev, month, 'sa')
        var dur = avgCalc(sev, month, 'dur')
        var ime = avgCalc(sev, month, 'ime')
        var cac = avgCalc(sev, month, 'cac')
        var count = 0

        if (dat > 0) {
            count++

        }
        if (sa > 0) {
            count++

        }
        if (dur > 0) {
            count++

        }
        if (ime > 0) {
            count++

        }
        if (cac > 0) {
            count++

        }


        var calc = (dat + sa + dur + ime + cac) / count
        return calc.toFixed(2)

    }

    return (
        <div>
            <h3 className='month'>{monthName}</h3>
            <header className='header'>
                <div>
                    <h4 className='sevs'>Sev 1</h4>
                    <h5 className='sevs'>DAT Average: {avgCalc('1', month, 'dat').toFixed(2)}</h5>
                    <h5 className='sevs'>SA Average: {avgCalc('1', month, 'sa').toFixed(2)}</h5>
                    <h5 className='sevs'>IME Average {avgCalc('1', month, 'ime').toFixed(2)}</h5>
                    <h5 className='sevs'>CAC Average {avgCalc('1', month, 'cac').toFixed(2)}</h5>
                    <h5 className='sevs'>Duration Average {avgCalc('1', month, 'dur').toFixed(2)}</h5>
                    <h5 className=
                    {totalCalc('1', month) < 2 ? 'sevsGreen' :
                    totalCalc('1', month) < 3 ? 'sevsYellow' : 
                    totalCalc('1', month) >= 3 ? 'sevsRed' : null}>
                        Total Average: {totalCalc('1', month)}</h5>
                </div>

                <div>
                    <h4 className='sevs'>Sev 2</h4>
                    <h5 className='sevs'>DAT Average: {avgCalc('2', month, 'dat').toFixed(2)}</h5>
                    <h5 className='sevs'>SA Average: {avgCalc('2', month, 'sa').toFixed(2)}</h5>
                    <h5 className='sevs'>IME Average {avgCalc('2', month, 'ime').toFixed(2)}</h5>
                    <h5 className='sevs'>CAC Average {avgCalc('2', month, 'cac').toFixed(2)}</h5>
                    <h5 className='sevs'>Duration Average {avgCalc('2', month, 'dur').toFixed(2)}</h5>
                    <h5 className=
                    {totalCalc('2', month) < 2 ? 'sevsGreen' :
                    totalCalc('2', month) < 3 ? 'sevsYellow' : 
                    totalCalc('2', month) >= 3 ? 'sevsRed' : null}>
                        Total Average: {totalCalc('2', month)}</h5>
                </div>

                <div>
                    <h4 className='sevs'>Sev 3</h4>
                    <h5 className='sevs'>DAT Average: {avgCalc('3', month, 'dat').toFixed(2)}</h5>
                    <h5 className='sevs'>SA Average: {avgCalc('3', month, 'sa').toFixed(2)}</h5>
                    <h5 className='sevs'>IME Average {avgCalc('3', month, 'ime').toFixed(2)}</h5>
                    <h5 className='sevs'>CAC Average {avgCalc('3', month, 'cac').toFixed(2)}</h5>
                    <h5 className='sevs'>Duration Average {avgCalc('3', month, 'dur').toFixed(2)}</h5>
                    <h5 className=
                    {totalCalc('3', month) < 2 ? 'sevsGreen' :
                    totalCalc('3', month) < 3 ? 'sevsYellow' : 
                    totalCalc('3', month) >= 3 ? 'sevsRed' : null}>
                        Total Average: {totalCalc('3', month)}</h5>
                </div>
            </header>
            <br></br>     
        </div>
    )
}

export default Month
