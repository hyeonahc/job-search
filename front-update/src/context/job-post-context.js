import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import MOCK_DATA from '../data/MOCK_DATA.json';

const Mock_API = MOCK_DATA;

const JobPostContext = createContext({
  sate: {
    // title: 'title-1',
    // companyName: 'company-name-1',
    // foundingDate: 'founding-date-1',
    // revenue: 'revenue-1',
    // employee: 'employee-1',
    posts: [
      { companyName: 'company-name-1' },
      { title: 'title-1' },
      { foundingDate: 'founding-date-1' },
      { revenue: 'revenue-1' },
      { employee: 'employee-1' },
    ],
  },
  actions: {
    // setTitle: () => {},
    // setCompanyName: () => {},
    // setFoundingDate: () => {},
    // setRevenue: () => {},
    // setEmployee: () => {},
    setPosts: () => {},
  },
});

const JobPostProvider = ({ children }) => {
  // const [title, setTitle] = useState('');
  // const [companyName, setCompanyName] = useState('');
  // const [foundingDate, setFoundingDate] = useState('');
  // const [revenue, setRevenue] = useState('');
  // const [employee, setEmployee] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(Mock_API);
        setPosts(res.data.posts);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const value = {
    state: { posts },
    actions: { setPosts },
  };

  return (
    <JobPostProvider.Provider value={value}>
      {children}
    </JobPostProvider.Provider>
  );
};

const { Consumer: JobPostConsumer } = JobPostContext;

export { JobPostProvider, JobPostConsumer };

export default JobPostContext;
