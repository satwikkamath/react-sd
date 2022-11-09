
import './App.css';
import Code from './MyComponents/Code';
import Cooldata from './MyComponents/Cooldata';
import GPS from './MyComponents/GPS';
import Header from './MyComponents/Header';
import LatLong from './MyComponents/LatLong';
import Logo from './MyComponents/Logo';
import Main from './MyComponents/Main';
import Rain from './MyComponents/Rain';
import Time from './MyComponents/Time';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const graphdata = [['x', 'item'],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],]

  const maindata ={ ns : '34', pc :'54', as:'87'}

  const coords ={ lat: '3.58275', lng: '97.04918'}
  return (
    <>
      
      <div className="mainbody">
        <div className="header trans">
          <Header />
        </div>
        <div className="body">
          <div className="body1">
            <div className="body2">
              <div className="logo"><Logo /></div>
              <div className="time trans"><Time /></div>
            </div>
            <div className="main trans"><Main maindata={maindata}/></div>
          </div>
          <div className="gps trans">
            <GPS coords={coords}/>
          </div>
        </div>
        <div className="footer">
          <div className="cooldata trans"><Cooldata graphdata={graphdata}/></div>
          <div className="footer1">
            <div className="code trans"><Code /></div>
            <div className="latlong trans"><LatLong coords={coords}/></div>
          </div>
          <div className="rain trans">
            <Rain />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
