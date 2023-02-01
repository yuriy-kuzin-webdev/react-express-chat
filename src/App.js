import React from 'react';
import './app.css'
import EventSourcing from './EventSourcing';
import LongPulling from './LongPulling';
import WebSocket from './WebSocket';

function App() {

  return (
      <div>
        {/* <LongPulling/> */}
        {/* <EventSourcing/> */}
        <WebSocket/>
      </div>
  )
}


export default App;