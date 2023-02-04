import './App.css'
import RightSide from './components/RightSide/RightSide';
import MainDash from './components/Sidebar/MainDash/MainDash';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <MainDash/>
          <RightSide/>

          </div>
        
    </div>
  );
}

export default App;
