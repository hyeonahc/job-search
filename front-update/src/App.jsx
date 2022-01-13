import './App.scss';
import Dashboard from './components/Dashboard';
import Filter from './components/Filter';

function App() {
  return (
    <div className="app">
      <Filter />
      <Dashboard />
    </div>
  );
}

export default App;
