import './App.scss';
import Dashboard from './components/Dashboard';
import Filter from './components/Filter';
import { JobPostProvider } from './context/job-post-context';

function App() {
  return (
    <JobPostProvider>
      <div className="app">
        <Filter />
        <Dashboard />
      </div>
    </JobPostProvider>
  );
}

export default App;
