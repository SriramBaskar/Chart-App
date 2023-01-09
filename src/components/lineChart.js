import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";

//defaults.global.tooltips.enabled = false
//defaults.global.legend.position = 'bottom'

const LineChart = () => {

    const [flag, setFlag] = useState(false)
    let DATA = JSON.parse(localStorage.getItem('React-Line-Chart')) ? JSON.parse(localStorage.getItem('React-Line-Chart')) : [];
    let storedValue = DATA
        
    var lableDetails = [];
    var valueDetails = [];
    for(let i = 0;i<storedValue.length;i++){
        lableDetails.push(storedValue[i].lable);
        valueDetails.push(parseInt(storedValue[i].value))
    }

    console.log(lableDetails)
    console.log(valueDetails)

    const submit = () => {
        setFlag(true)
    }

    const addData = () => {
        let lable = document.getElementById('lable')
        let value = document.getElementById('value')

            var object = {
            'lable' : lable.value,
            'value' : value.value
        }
        storedValue.push(object)

        console.log(lable.value + " " + value.value)
        localStorage.setItem('React-Line-Chart',JSON.stringify(storedValue))
        
        lable.value = ''
        value.value = ''
    }

    let data = {
        labels: lableDetails,
        datasets: [{
            label: 'Value',
            data: valueDetails,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    }
    return (
        ((flag == false) ?
            <form className="form-inline">
                <div className="form-group">
                    <label>Enter Lable</label>
                    <input type="text" className="form-control" id="lable" />
                </div>
                <div className="form-group">
                    <label>Enter Value</label>
                    <input type="text" className="form-control" id="value" />
                </div>

                <button type="button" className="btn btn-default" onClick={addData}>Add Value</button>

                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-default" onClick={submit}>Submit</button>
                    </div>
                </div>
            </form>
            :
            <div>
                <Line data={data} />
            </div>)

    )
}

export default LineChart