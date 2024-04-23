import React from 'react';
import GridLayout from 'react-grid-layout';

import './App.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function App() {

  const layoutConfig = [
    { i: 'header', x: 0, y: 0, w: 12, h: 2 },
    { i: 'navbar', x: 0, y: 2, w: 12, h: 1 },
    { i: 'sidebar', x: 0, y: 3, w: 3, h: 10 },
    { i: 'main', x: 3, y: 3, w: 9, h: 10},
    { i: 'panels', x: 0, y: 6, w: 12, h: 5 }
  ];

  return (
    <GridLayout className="example-layout" layout={layoutConfig} cols={12} rowHeight={30} width={1200}>
      <div key="header" style={{ background: '#ff4d4f' }}>header</div>
      <div key="navbar" style={{ background: '#40a9ff' }}>navbar</div>
      <div key="sidebar" style={{ background: '#73d13d' }}>sidebar</div>
      <div key="main" style={{ background: '#43d13d' }}>main</div>
      <div key="panels" style={{ background: '#72d13d' }}>panels</div>
    </GridLayout>
    // <div className="App">
    //   <header className="App-header"></header>
    //   <div className="NavBar"></div>
    //   <div className="SideBar"></div>
    //   <div className="main"></div>
    //   <div className="footer"></div>
    // </div>
  );
}

export default App;
