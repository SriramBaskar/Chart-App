import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [flag, setFlag] = useState(false)
    const navigate = useNavigate();

    let Submit = () => {
        setFlag(true)
    }

    let BarChart = () => {
        navigate('/barChart')
    }

    let PieChart = () => {
        navigate('/pieChart')
    }

    let LineChart = () => {
        navigate('/lineChart')
    }
    return(
        ((flag == false) ?
        <button type="submit" class="btn btn-info" onClick={Submit}>Select Chart</button>
        :
            <div>
                <button type="submit" class="btn btn-info" onClick={BarChart}>Bar Chart</button>
                <button type="submit" class="btn btn-info" onClick={PieChart}>Pie Chart</button>
                <button type="submit" class="btn btn-info" onClick={LineChart}>Line Chart</button>
            </div>)
    )
}

export default Home