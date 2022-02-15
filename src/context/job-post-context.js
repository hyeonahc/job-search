import { useState, createContext, useEffect } from 'react';
import axios from '../index';

// const saraminData = '/MOCK_DATA.json';
// const saraminData = '/saramin.json';
const saraminDataURL = process.env.REACT_APP_SERVER_HOST;
// const saraminDataPort = process.env.REACT_APP_SERVER_PORT;
const saraminDataSearch = process.env.REACT_APP_SERVER_SEARCH;
// console.log(process.env);
// console.log(saraminDataURL);

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
  // const [posts, setPosts] = useState([]);

  // const saraminDataSearch = '';
  const onSearch = form => {
    axios
      .post(saraminDataSearch, form)
      .then(response => {
        console.log('Clicked', response.data);
        // console.log('Clicked', response.data.content);
        // setPost를 할건데 그 전에 saraminDataURL 거기에 filtering 할 정보를 같이 request를 보낸다
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    axios
      .get(saraminDataURL)
      .then(response => {
        setPosts(response.data);
        // console.log(content);
      })
      .catch(error => {
        console.log(error);
      });
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
