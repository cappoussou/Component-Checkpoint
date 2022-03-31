
import './App.css';
import React from "react";
import ProfilePhoto from '../src/Component/Profile/ProfilePhoto';
import FullName from '../src/Component/Profile/FullName';
import Address from '../src/Component/Profile/Address';

function App() {
  return (
    <div className="App">
         <ProfilePhoto />
         <FullName />
         <Address />
    </div>
  );
}

export default App;