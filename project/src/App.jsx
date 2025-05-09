import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import FlightDetails from './components/flightdetails';
import Accommodation from './components/Accomodation';
import Activities from './components/Activities';

function App() {
  return (
    <div className="flex min-h-screen  text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col gap-6 p-6 overflow-y-auto  rounded-l-3xl shadow-xl">
        <Dashboard />
        
        <section className="space-y-6">
          <FlightDetails />
          <Accommodation />
          <Activities />
        </section>
      </div>
    </div>
  );
}

export default App;
