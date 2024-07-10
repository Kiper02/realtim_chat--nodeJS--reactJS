import React from 'react';
import LongPulling from './longPulling';
import EventSourcing from './EventSourcing';
import WebSock from './WebSock';

const App = () => {
  return (
    <div>
      {/* <LongPulling /> */}
      {/* <EventSourcing /> */}
      <WebSock />
  </div>
  );
};

export default App;