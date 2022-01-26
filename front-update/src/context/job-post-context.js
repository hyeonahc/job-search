import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

// const Mock_API = '/MOCK_DATA.json';
const Mock_API = process.env.REACT_APP_SERVER_HOST;
// console.log(process.env);

const JobPostContext = createContext({
  sate: {
    posts: [],
  },
  actions: {
    setPosts: () => {},
  },
});

const JobPostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(Mock_API);
        // console.log(res.data.contents);
        setPosts(res.data.contents);
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
    <JobPostContext.Provider value={value}>{children}</JobPostContext.Provider>
  );
};

const { Consumer: JobPostConsumer } = JobPostContext;

export { JobPostProvider, JobPostConsumer };

export default JobPostContext;
