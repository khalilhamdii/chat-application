import { ChatEngine } from 'react-chat-engine';
import './App.css';

import React from 'react';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="542e1e55-ece5-43b8-b15c-c545812fa7f3"
      userName="user"
      userSecret="123456789"
    />
  );
};

export default App;
