const Month = ({metrics, monthName, month}) => {
    const avgCalc = (sev, month, ave) => {
        var sum = 0;
        var count = 0;

        for (var j = 0; j < metrics.length; j++) {
            if (metrics[j].sev == sev) {
                count++

            }

        }
        
        for (var i = 0; i < metrics.length; i++) {
            if (sev == metrics[i].sev) {
                if (month == metrics[i].date.substring(5,7)) {
                    if (ave == 'dat') {
                        console.log("Dat score: " + metrics[i].datScore)
                        sum += metrics[i].datScore
                    } else if (ave == 'sa') {
                        console.log("Sa score: " + metrics[i].saScore)
                        sum += metrics[i].saScore
                    } else if (ave == 'dur') {
                        console.log("Duration score: " + metrics[i].durationScore)
                        sum += metrics[i].durationScore
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

    const totalCalc = (dat, sa, dur) => {
        var calc = (dat + sa + dur) / 3
        return calc.toFixed(2)

    }

    return (
        <div>
            <h3 className='month'>{monthName}</h3>
            <header className='header'>
                <div>
                    <h4 className='sevs'>Sev 1</h4>
                    <h5 className='sevs'>DAT Average: {avgCalc(1, month, 'dat')}</h5>
                    <h5 className='sevs'>SA Average: {avgCalc(1, month, 'sa')}</h5>
                    <h5 className='sevs'>Duration Average {avgCalc(1, month, 'dur')}</h5>
                    <h5 className=
                    {totalCalc(avgCalc(1, month, 'dat'), avgCalc(1, month, 'sa'), avgCalc(1, month, 'dur')) < 2 ? 'sevsGreen' :
                    totalCalc(avgCalc(1, month, 'dat'), avgCalc(1, month, 'sa'), avgCalc(1, month, 'dur')) < 3 ? 'sevsYellow' : 
                    totalCalc(avgCalc(1, month, 'dat'), avgCalc(1, month, 'sa'), avgCalc(1, month, 'dur')) >= 3 ? 'sevsRed' : null}>
                        Total Average: {totalCalc(avgCalc(1, month, 'dat'), avgCalc(1, month, 'sa'), avgCalc(1, month, 'dur'))}</h5>
                </div>

                <div>
                    <h4 className='sevs'>Sev 2</h4>
                    <h5 className='sevs'>DAT Average: {avgCalc(2, month, 'dat')}</h5>
                    <h5 className='sevs'>SA Average: {avgCalc(2, month, 'sa')}</h5>
                    <h5 className='sevs'>Duration Average {avgCalc(2, month, 'dur')}</h5>
                    <h5 className=
                    {totalCalc(avgCalc(2, month, 'dat'), avgCalc(2, month, 'sa'), avgCalc(2, month, 'dur')) < 2 ? 'sevsGreen' :
                    totalCalc(avgCalc(2, month, 'dat'), avgCalc(2, month, 'sa'), avgCalc(2, month, 'dur')) < 3 ? 'sevsYellow' : 
                    totalCalc(avgCalc(2, month, 'dat'), avgCalc(2, month, 'sa'), avgCalc(2, month, 'dur')) >= 3 ? 'sevsRed' : null}>
                        Total Average: {totalCalc(avgCalc(2, month, 'dat'), avgCalc(2, month, 'sa'), avgCalc(2, month, 'dur'))}</h5>
                </div>

                <div>
                    <h4 className='sevs'>Sev 3</h4>
                    <h5 className='sevs'>DAT Average: {avgCalc(3, month, 'dat')}</h5>
                    <h5 className='sevs'>SA Average: {avgCalc(3, month, 'sa')}</h5>
                    <h5 className='sevs'>Duration Average {avgCalc(3, month, 'dur')}</h5>
                    <h5 className=
                    {totalCalc(avgCalc(3, month, 'dat'), avgCalc(3, month, 'sa'), avgCalc(3, month, 'dur')) < 2 ? 'sevsGreen' :
                    totalCalc(avgCalc(3, month, 'dat'), avgCalc(3, month, 'sa'), avgCalc(3, month, 'dur')) < 3 ? 'sevsYellow' : 
                    totalCalc(avgCalc(3, month, 'dat'), avgCalc(3, month, 'sa'), avgCalc(3, month, 'dur')) >= 3 ? 'sevsRed' : null}>
                        Total Average: {totalCalc(avgCalc(3, month, 'dat'), avgCalc(3, month, 'sa'), avgCalc(3, month, 'dur'))}</h5>
                </div>
            </header>
            <br></br>     
        </div>
    )
}

export default Month
