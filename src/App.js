import logo from './logo.svg';
import './App.css';
import PropsRedux from './components/PropsRedux';
import HomeContainer from './Containers/HomeContainer';

function App() {
  return (
    <div className="App">

      {/* <PropsRedux data={{name:'anil sidhu',age:26}} /> */}
      <HomeContainer />
    </div>
  );
}

export default App;
