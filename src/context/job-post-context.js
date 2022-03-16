import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
// import axios from '../index';
import SARAMIN_DATA from '../data/saramin.json';

const saraminDataURL = process.env.REACT_APP_SERVER_HOST;
const saraminDataSearch = process.env.REACT_APP_SERVER_SEARCH;

const JobPostContext = createContext({
  state: {
    posts: [],
  },
  actions: {
    setPosts: () => {},
    onSearch: () => {},
  },
});

const JobPostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const onSearch = form => {
    axios
      .post(saraminDataSearch, form)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  // Back
  // useEffect(() => {
  //   axios
  //     .get(saraminDataURL)
  //     .then(({ data }) => {
  //       setPosts(data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  // Front
  useEffect(() => {
    setPosts(SARAMIN_DATA.content);
  }, []);

  const value = {
    state: { posts },
    actions: { setPosts, onSearch },
  };

  return (
    <JobPostContext.Provider value={value}>{children}</JobPostContext.Provider>
  );
};

const { Consumer: JobPostConsumer } = JobPostContext;

export { JobPostProvider, JobPostConsumer };

export default JobPostContext;
