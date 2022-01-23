import './App.scss';
// import Dashboard from './components/Dashboard';
import DashboardContext from './components/DashboardContext';
import Filter from './components/Filter';
import { JobPostProvider } from './context/job-post-context';

function App() {
  return (
    <JobPostProvider>
      <div className="app">
        <Filter />
        {/* <Dashboard /> */}
        <DashboardContext />
      </div>
    </JobPostProvider>
  );
}

export default App;
