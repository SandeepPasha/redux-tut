import React from 'react';
import './App.css';
import HomeContainer from './Containers/HomeContainer';
import HeaderContainer from './Containers/HeaderContainer';

function App() {
  return (
    <div className="App">

      {/* <PropsRedux data={{name:'anil sidhu',age:26}} /> */}
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
