import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Home from './components/home'
import BarChart from './components/barChart';
import PieChart from './components/pieChart';
import LineChart from './components/lineChart';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
           <Route path='/' element ={<Home />}> </Route>
           <Route path='/barChart' element ={<BarChart />}> </Route>
           <Route path='/pieChart' element ={<PieChart />}> </Route>
           <Route path='/lineChart' element ={<LineChart />}></Route>
       </Routes>
      </Router>
    </div>
  )
}

export default App
