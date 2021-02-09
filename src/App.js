import React from 'react';
import './App.css';
import {Header,HeaderTop,HeaderBottom,Banner,Features,Table,SaleBanner,News, Subscribe,Footer} from "./component/index";

function App() {

  return (
    <div className="app">
      <HeaderTop/>
     <Header/>
     <HeaderBottom/>
     <Banner/>
     <Features/>
     <Table/>
     <SaleBanner/>
     <News/>
     <Subscribe/>
     <Footer/>
    </div>
  );
}

export default App;
