import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

// const saraminData = '/MOCK_DATA.json';
// const saraminData = '/saramin.json';
const saraminData = process.env.REACT_APP_SERVER_HOST;
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
    axios
      .get(saraminData)
      .then(({ data: { content } }) => {
        setPosts(content);
      })
      .catch(error => {
        console.log(error);
      });
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
