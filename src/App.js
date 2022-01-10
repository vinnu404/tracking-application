
import './App.css';
import Track from './Components/Track';
import Trackdetails from './Components/Trackdetails';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Trackdetails/>}></Route>
        <Route path='/Trackingdetails' element={<Track/>}></Route>
      </Routes>
      </BrowserRouter>

      {/* <Trackdetails/> */}

      {/* <Track/> */}
       </div>
  );
}

export default App;
