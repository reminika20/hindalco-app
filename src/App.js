import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/User';
import AdminDashboard from './pages/AdminDashboard';
// import store, { persistor } from './store/indexx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './pages/store';


const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
    {/* </PersistGate> */}
    </Provider>
  );
};

export default App;