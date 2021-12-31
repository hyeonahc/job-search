import Dashboard from './components/Dashboard';
import Filter from './components/Filter';
import Search from './components/Search';
import Result from './components/Result';

function App() {
  return (
    <div className="app">
      <Dashboard>
        <Filter></Filter>
        <Search></Search>
        <Result></Result>
      </Dashboard>
    </div>
  );
}

export default App;
