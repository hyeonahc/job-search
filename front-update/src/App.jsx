import './App.scss';
import Dashboard from './components/Dashboard';
import DashboardContext from './components/DashboardContext';
import Filter from './components/Filter';

function App() {
  return (
    <div className="app">
      <Filter />
      {/* <Dashboard /> */}
      <DashboardContext />
    </div>
  );
}

export default App;
